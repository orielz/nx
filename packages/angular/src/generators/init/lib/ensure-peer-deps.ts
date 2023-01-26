import { ensurePackage, Tree } from '@nrwl/devkit';
import * as moduleAlias from 'module-alias';
import { angularVersion } from '../../../utils/versions';

export async function ensurePeersDeps(tree: Tree) {
  await ensurePackage(tree, '@angular-devkit/core', angularVersion);
  await ensurePackage(tree, '@angular-devkit/schematics', angularVersion);
  await ensurePackage(tree, '@schematics/angular', angularVersion);

  // TODO: below is a hack to fix MODULE_NOT_FOUND, if not found, redirect to file typescript/lib/typescript.js
  try {
    require('@angular-devkit/core');
  } catch (err) {
    try {
      require('@angular-devkit/core/src/index');
      moduleAlias.addAlias(
        '@angular-devkit/core',
        (fromPath, request, alias) => {
          if (request === '@angular-devkit/core') {
            return '@angular-devkit/core/src/index';
          }
          return '@angular-devkit/core';
        }
      );
    } catch (err) {}
  }

  try {
    require('@angular-devkit/schematics');
  } catch (err) {
    try {
      require('@angular-devkit/schematics/src/index');
      moduleAlias.addAlias(
        '@angular-devkit/schematics',
        (fromPath, request, alias) => {
          if (request === '@angular-devkit/schematics') {
            return '@angular-devkit/schematics/src/index';
          }
          return '@angular-devkit/schematics';
        }
      );
    } catch (err) {}
  }
}
