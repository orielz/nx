import {
  checkFilesExist,
  cleanupProject,
  packageInstall,
  readJson,
  runCLI,
  runCreateWorkspace,
  uniq,
} from '@nrwl/e2e/utils';

describe('create-nx-workspace --preset=npm', () => {
  let wsName;

  beforeEach(() => {
    wsName = uniq('npm');
    runCreateWorkspace(wsName, {
      preset: 'npm',
      packageManager: 'npm',
    });
  });

  afterEach(() => cleanupProject());

  it('should add workspace library', () => {
    packageInstall('@nrwl/workspace', wsName);

    const libName = uniq('lib');

    expect(() =>
      runCLI(`generate @nrwl/workspace:library ${libName} --no-interactive`)
    ).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
    const tsconfig = readJson(`tsconfig.base.json`);
    expect(tsconfig.compilerOptions.paths).toEqual({
      [libName]: [`packages/${libName}/src/index.ts`],
    });
  });

  it('should add js library', () => {
    packageInstall('@nrwl/js', wsName);

    const libName = uniq('lib');

    expect(() =>
      runCLI(`generate @nrwl/js:library ${libName} --no-interactive`)
    ).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
    const tsconfig = readJson(`tsconfig.base.json`);
    expect(tsconfig.compilerOptions.paths).toEqual({
      [libName]: [`packages/${libName}/src/index.ts`],
    });
  });

  it('should add angular application', () => {
    packageInstall('@nrwl/angular', wsName);

    const appName = uniq('my-app');

    expect(() => {
      runCLI(`generate @nrwl/angular:app ${appName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });

  it('should add angular library', () => {
    packageInstall('@nrwl/angular', wsName);

    const libName = uniq('lib');

    expect(() => {
      runCLI(`generate @nrwl/angular:lib ${libName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
    const tsconfig = readJson(`tsconfig.base.json`);
    expect(tsconfig.compilerOptions.paths).toEqual({
      [libName]: [`packages/${libName}/src/index.ts`],
    });
  });

  it('should add react application', () => {
    packageInstall('@nrwl/react', wsName);

    const appName = uniq('my-app');

    expect(() => {
      runCLI(`generate @nrwl/react:app ${appName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });

  it('should add react library', () => {
    packageInstall('@nrwl/react', wsName);

    const libName = uniq('lib');

    expect(() => {
      runCLI(`generate @nrwl/react:lib ${libName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
    const tsconfig = readJson(`tsconfig.base.json`);
    expect(tsconfig.compilerOptions.paths).toEqual({
      [libName]: [`packages/${libName}/src/index.ts`],
    });
  });

  it('should add next application', () => {
    packageInstall('@nrwl/next', wsName);

    const appName = uniq('my-app');

    expect(() => {
      runCLI(`generate @nrwl/next:app ${appName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });

  it('should add next library', () => {
    packageInstall('@nrwl/next', wsName);

    const libName = uniq('lib');

    expect(() => {
      runCLI(`generate @nrwl/next:lib ${libName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
    const tsconfig = readJson(`tsconfig.base.json`);
    expect(tsconfig.compilerOptions.paths).toEqual({
      [libName]: [`packages/${libName}/src/index.ts`],
    });
  });

  it('should add react-native application', () => {
    packageInstall('@nrwl/react-native', wsName);

    const appName = uniq('my-app');

    expect(() => {
      runCLI(`generate @nrwl/react-native:app ${appName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });

  it('should add react-native library', () => {
    packageInstall('@nrwl/react-native', wsName);

    const libName = uniq('lib');

    expect(() => {
      runCLI(`generate @nrwl/react-native:lib ${libName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
    const tsconfig = readJson(`tsconfig.base.json`);
    expect(tsconfig.compilerOptions.paths).toEqual({
      [libName]: [`packages/${libName}/src/index.ts`],
    });
  });

  it('should add node application', () => {
    packageInstall('@nrwl/node', wsName);

    const appName = uniq('my-app');

    expect(() => {
      runCLI(`generate @nrwl/node:app ${appName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });

  it('should add node library', () => {
    packageInstall('@nrwl/node', wsName);

    const libName = uniq('lib');

    expect(() => {
      runCLI(`generate @nrwl/node:lib ${libName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
    const tsconfig = readJson(`tsconfig.base.json`);
    expect(tsconfig.compilerOptions.paths).toEqual({
      [libName]: [`packages/${libName}/src/index.ts`],
    });
  });

  it('should add nest application', () => {
    packageInstall('@nrwl/nest', wsName);

    const appName = uniq('my-app');

    expect(() => {
      runCLI(`generate @nrwl/nest:app ${appName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });

  it('should add nest library', () => {
    packageInstall('@nrwl/nest', wsName);

    const libName = uniq('lib');

    expect(() => {
      runCLI(`generate @nrwl/nest:lib ${libName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
    const tsconfig = readJson(`tsconfig.base.json`);
    expect(tsconfig.compilerOptions.paths).toEqual({
      [libName]: [`packages/${libName}/src/index.ts`],
    });
  });

  it('should add express application', () => {
    packageInstall('@nrwl/express', wsName);

    const appName = uniq('my-app');
    const libName = uniq('lib');

    expect(() => {
      runCLI(`generate @nrwl/express:app ${appName} --no-interactive`);
    }).not.toThrowError();
    checkFilesExist('tsconfig.base.json');
  });
});
