import { names, Tree } from '@nrwl/devkit';
import { NormalizedSchema } from './normalized-schema';
import { addRoute } from '../../../utils/nx-devkit/route-utils';

let tsModule: typeof import('typescript');

export function addLoadChildren(
  tree: Tree,
  options: NormalizedSchema['libraryOptions']
) {
  if (!tree.exists(options.parent)) {
    throw new Error(`Cannot find '${options.parent}'`);
  }
  if (!tsModule) {
    tsModule = require('typescript');
  }

  const moduleSource = tree.read(options.parent, 'utf-8');
  const sourceFile = tsModule.createSourceFile(
    options.parent,
    moduleSource,
    tsModule.ScriptTarget.Latest,
    true
  );

  const route = `{path: '${
    names(options.fileName).fileName
  }', loadChildren: () => import('${options.importPath}').then(m => m.${
    options.standalone
      ? `${names(options.name).propertyName}Routes`
      : options.moduleName
  })}`;

  addRoute(tree, options.parent, route);
}
