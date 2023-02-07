# Module: index

The Nx Devkit is the underlying technology used to customize Nx to support
different technologies and custom use-cases. It contains many utility
functions for reading and writing files, updating configuration,
working with Abstract Syntax Trees(ASTs), and more.

As with most things in Nx, the core of Nx Devkit is very simple.
It only uses language primitives and immutable objects
(the tree being the only exception).

## Table of contents

### Project Graph Enumerations

- [DependencyType](../../devkit/documents/index#dependencytype)

### Utils Enumerations

- [ChangeType](../../devkit/documents/index#changetype)

### Project Graph Classes

- [ProjectGraphBuilder](../../devkit/documents/index#projectgraphbuilder)

### Utils Classes

- [Hasher](../../devkit/documents/index#hasher)

### Workspace Classes

- [Workspaces](../../devkit/documents/index#workspaces)

### Commands Interfaces

- [Target](../../devkit/documents/index#target)

### Other Interfaces

- [NxPlugin](../../devkit/documents/index#nxplugin)

### Project Graph Interfaces

- [FileData](../../devkit/documents/index#filedata)
- [ProjectFileMap](../../devkit/documents/index#projectfilemap)
- [ProjectGraph](../../devkit/documents/index#projectgraph)
- [ProjectGraphDependency](../../devkit/documents/index#projectgraphdependency)
- [ProjectGraphExternalNode](../../devkit/documents/index#projectgraphexternalnode)
- [ProjectGraphProcessorContext](../../devkit/documents/index#projectgraphprocessorcontext)
- [ProjectGraphProjectNode](../../devkit/documents/index#projectgraphprojectnode)
- [ProjectGraphV4](../../devkit/documents/index#projectgraphv4)

### Tree Interfaces

- [FileChange](../../devkit/documents/index#filechange)
- [Tree](../../devkit/documents/index#tree)

### Utils Interfaces

- [DefaultTasksRunnerOptions](../../devkit/documents/index#defaulttasksrunneroptions)
- [Hash](../../devkit/documents/index#hash)
- [JsonParseOptions](../../devkit/documents/index#jsonparseoptions)
- [JsonSerializeOptions](../../devkit/documents/index#jsonserializeoptions)
- [ModuleFederationConfig](../../devkit/documents/index#modulefederationconfig)
- [RemoteCache](../../devkit/documents/index#remotecache)
- [SharedLibraryConfig](../../devkit/documents/index#sharedlibraryconfig)
- [StringDeletion](../../devkit/documents/index#stringdeletion)
- [StringInsertion](../../devkit/documents/index#stringinsertion)

### Workspace Interfaces

- [ExecutorContext](../../devkit/documents/index#executorcontext)
- [ExecutorsJson](../../devkit/documents/index#executorsjson)
- [GeneratorsJson](../../devkit/documents/index#generatorsjson)
- [HasherContext](../../devkit/documents/index#hashercontext)
- [ImplicitJsonSubsetDependency](../../devkit/documents/index#implicitjsonsubsetdependency)
- [MigrationsJson](../../devkit/documents/index#migrationsjson)
- [NxAffectedConfig](../../devkit/documents/index#nxaffectedconfig)
- [NxJsonConfiguration](../../devkit/documents/index#nxjsonconfiguration)
- [ProjectConfiguration](../../devkit/documents/index#projectconfiguration)
- [ProjectsConfigurations](../../devkit/documents/index#projectsconfigurations)
- [TargetConfiguration](../../devkit/documents/index#targetconfiguration)
- [TargetDependencyConfig](../../devkit/documents/index#targetdependencyconfig)
- [Task](../../devkit/documents/index#task)
- [TaskGraph](../../devkit/documents/index#taskgraph)
- [Workspace](../../devkit/documents/index#workspace)

### Generators Type aliases

- [WorkspaceConfiguration](../../devkit/documents/index#workspaceconfiguration)

### Other Type aliases

- [ProjectTargetConfigurator](../../devkit/documents/index#projecttargetconfigurator)

### Package Manager Type aliases

- [PackageManager](../../devkit/documents/index#packagemanager)

### Project Graph Type aliases

- [ProjectGraphNode](../../devkit/documents/index#projectgraphnode)

### Utils Type aliases

- [AdditionalSharedConfig](../../devkit/documents/index#additionalsharedconfig)
- [ModuleFederationLibrary](../../devkit/documents/index#modulefederationlibrary)
- [Remotes](../../devkit/documents/index#remotes)
- [SharedFunction](../../devkit/documents/index#sharedfunction)
- [SharedWorkspaceLibraryConfig](../../devkit/documents/index#sharedworkspacelibraryconfig)
- [StringChange](../../devkit/documents/index#stringchange)
- [WorkspaceLibrary](../../devkit/documents/index#workspacelibrary)
- [WorkspaceLibrarySecondaryEntryPoint](../../devkit/documents/index#workspacelibrarysecondaryentrypoint)

### Workspace Type aliases

- [CustomHasher](../../devkit/documents/index#customhasher)
- [Executor](../../devkit/documents/index#executor)
- [Generator](../../devkit/documents/index#generator)
- [GeneratorCallback](../../devkit/documents/index#generatorcallback)
- [ImplicitDependencyEntry](../../devkit/documents/index#implicitdependencyentry)
- [ProjectType](../../devkit/documents/index#projecttype)
- [TaskGraphExecutor](../../devkit/documents/index#taskgraphexecutor)
- [WorkspaceJsonConfiguration](../../devkit/documents/index#workspacejsonconfiguration)

### Logger Variables

- [logger](../../devkit/documents/index#logger)

### Utils Variables

- [appRootPath](../../devkit/documents/index#approotpath)
- [cacheDir](../../devkit/documents/index#cachedir)
- [output](../../devkit/documents/index#output)
- [workspaceRoot](../../devkit/documents/index#workspaceroot)

### Functions

- [addDependenciesToPackageJson](../../devkit/documents/index#adddependenciestopackagejson)
- [addProjectConfiguration](../../devkit/documents/index#addprojectconfiguration)
- [applyAdditionalShared](../../devkit/documents/index#applyadditionalshared)
- [applyChangesToString](../../devkit/documents/index#applychangestostring)
- [applySharedFunction](../../devkit/documents/index#applysharedfunction)
- [convertNxExecutor](../../devkit/documents/index#convertnxexecutor)
- [convertNxGenerator](../../devkit/documents/index#convertnxgenerator)
- [createLockFile](../../devkit/documents/index#createlockfile)
- [createPackageJson](../../devkit/documents/index#createpackagejson)
- [createProjectGraphAsync](../../devkit/documents/index#createprojectgraphasync)
- [defaultTasksRunner](../../devkit/documents/index#defaulttasksrunner)
- [detectPackageManager](../../devkit/documents/index#detectpackagemanager)
- [detectWorkspaceScope](../../devkit/documents/index#detectworkspacescope)
- [ensurePackage](../../devkit/documents/index#ensurepackage)
- [extractLayoutDirectory](../../devkit/documents/index#extractlayoutdirectory)
- [formatFiles](../../devkit/documents/index#formatfiles)
- [generateFiles](../../devkit/documents/index#generatefiles)
- [getDependentPackagesForProject](../../devkit/documents/index#getdependentpackagesforproject)
- [getImportPath](../../devkit/documents/index#getimportpath)
- [getNpmPackageSharedConfig](../../devkit/documents/index#getnpmpackagesharedconfig)
- [getOutputsForTargetAndConfiguration](../../devkit/documents/index#getoutputsfortargetandconfiguration)
- [getPackageManagerCommand](../../devkit/documents/index#getpackagemanagercommand)
- [getPackageManagerVersion](../../devkit/documents/index#getpackagemanagerversion)
- [getProjects](../../devkit/documents/index#getprojects)
- [getWorkspaceLayout](../../devkit/documents/index#getworkspacelayout)
- [getWorkspacePath](../../devkit/documents/index#getworkspacepath)
- [installPackagesTask](../../devkit/documents/index#installpackagestask)
- [isStandaloneProject](../../devkit/documents/index#isstandaloneproject)
- [joinPathFragments](../../devkit/documents/index#joinpathfragments)
- [mapRemotes](../../devkit/documents/index#mapremotes)
- [mapRemotesForSSR](../../devkit/documents/index#mapremotesforssr)
- [moveFilesToNewDirectory](../../devkit/documents/index#movefilestonewdirectory)
- [names](../../devkit/documents/index#names)
- [normalizePath](../../devkit/documents/index#normalizepath)
- [offsetFromRoot](../../devkit/documents/index#offsetfromroot)
- [parseJson](../../devkit/documents/index#parsejson)
- [parseTargetString](../../devkit/documents/index#parsetargetstring)
- [readAllWorkspaceConfiguration](../../devkit/documents/index#readallworkspaceconfiguration)
- [readCachedProjectGraph](../../devkit/documents/index#readcachedprojectgraph)
- [readJson](../../devkit/documents/index#readjson)
- [readJsonFile](../../devkit/documents/index#readjsonfile)
- [readNxJson](../../devkit/documents/index#readnxjson)
- [readProjectConfiguration](../../devkit/documents/index#readprojectconfiguration)
- [readRootPackageJson](../../devkit/documents/index#readrootpackagejson)
- [readTargetOptions](../../devkit/documents/index#readtargetoptions)
- [readWorkspaceConfiguration](../../devkit/documents/index#readworkspaceconfiguration)
- [removeDependenciesFromPackageJson](../../devkit/documents/index#removedependenciesfrompackagejson)
- [removeProjectConfiguration](../../devkit/documents/index#removeprojectconfiguration)
- [reverse](../../devkit/documents/index#reverse)
- [runExecutor](../../devkit/documents/index#runexecutor)
- [serializeJson](../../devkit/documents/index#serializejson)
- [sharePackages](../../devkit/documents/index#sharepackages)
- [shareWorkspaceLibraries](../../devkit/documents/index#shareworkspacelibraries)
- [stripIndents](../../devkit/documents/index#stripindents)
- [stripJsonComments](../../devkit/documents/index#stripjsoncomments)
- [targetToTargetString](../../devkit/documents/index#targettotargetstring)
- [toJS](../../devkit/documents/index#tojs)
- [updateJson](../../devkit/documents/index#updatejson)
- [updateNxJson](../../devkit/documents/index#updatenxjson)
- [updateProjectConfiguration](../../devkit/documents/index#updateprojectconfiguration)
- [updateTsConfigsToJs](../../devkit/documents/index#updatetsconfigstojs)
- [updateWorkspaceConfiguration](../../devkit/documents/index#updateworkspaceconfiguration)
- [visitNotIgnoredFiles](../../devkit/documents/index#visitnotignoredfiles)
- [workspaceLayout](../../devkit/documents/index#workspacelayout)
- [writeJson](../../devkit/documents/index#writejson)
- [writeJsonFile](../../devkit/documents/index#writejsonfile)

## Project Graph Enumerations

### DependencyType

• **DependencyType**: `Object`

---

## Utils Enumerations

### ChangeType

• **ChangeType**: `Object`

## Project Graph Classes

### ProjectGraphBuilder

• **ProjectGraphBuilder**: `Object`

---

## Utils Classes

### Hasher

• **Hasher**: `Object`

---

## Workspace Classes

### Workspaces

• **Workspaces**: `Object`

## Commands Interfaces

### Target

• **Target**: `Object`

---

## Other Interfaces

### NxPlugin

• **NxPlugin**: `Object`

A plugin for Nx

---

## Project Graph Interfaces

### FileData

• **FileData**: `Object`

---

### ProjectFileMap

• **ProjectFileMap**: `Object`

---

### ProjectGraph

• **ProjectGraph**: `Object`

---

### ProjectGraphDependency

• **ProjectGraphDependency**: `Object`

---

### ProjectGraphExternalNode

• **ProjectGraphExternalNode**: `Object`

---

### ProjectGraphProcessorContext

• **ProjectGraphProcessorContext**: `Object`

---

### ProjectGraphProjectNode

• **ProjectGraphProjectNode**: `Object`

---

### ProjectGraphV4

• **ProjectGraphV4**<`T`\>: `Object`

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

---

## Tree Interfaces

### FileChange

• **FileChange**: `Object`

---

### Tree

• **Tree**: `Object`

---

## Utils Interfaces

### DefaultTasksRunnerOptions

• **DefaultTasksRunnerOptions**: `Object`

---

### Hash

• **Hash**: `Object`

---

### JsonParseOptions

• **JsonParseOptions**: `Object`

---

### JsonSerializeOptions

• **JsonSerializeOptions**: `Object`

---

### ModuleFederationConfig

• **ModuleFederationConfig**: `Object`

---

### RemoteCache

• **RemoteCache**: `Object`

---

### SharedLibraryConfig

• **SharedLibraryConfig**: `Object`

---

### StringDeletion

• **StringDeletion**: `Object`

---

### StringInsertion

• **StringInsertion**: `Object`

---

## Workspace Interfaces

### ExecutorContext

• **ExecutorContext**: `Object`

---

### ExecutorsJson

• **ExecutorsJson**: `Object`

---

### GeneratorsJson

• **GeneratorsJson**: `Object`

---

### HasherContext

• **HasherContext**: `Object`

---

### ImplicitJsonSubsetDependency

• **ImplicitJsonSubsetDependency**<`T`\>: `Object`

#### Type parameters

| Name | Type                |
| :--- | :------------------ |
| `T`  | `"*"` \| `string`[] |

---

### MigrationsJson

• **MigrationsJson**: `Object`

---

### NxAffectedConfig

• **NxAffectedConfig**: `Object`

---

### NxJsonConfiguration

• **NxJsonConfiguration**<`T`\>: `Object`

#### Type parameters

| Name | Type                |
| :--- | :------------------ |
| `T`  | `"*"` \| `string`[] |

---

### ProjectConfiguration

• **ProjectConfiguration**: `Object`

---

### ProjectsConfigurations

• **ProjectsConfigurations**: `Object`

---

### TargetConfiguration

• **TargetConfiguration**<`T`\>: `Object`

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

---

### TargetDependencyConfig

• **TargetDependencyConfig**: `Object`

---

### Task

• **Task**: `Object`

---

### TaskGraph

• **TaskGraph**: `Object`

---

### Workspace

• **Workspace**: `Object`

## Generators Type aliases

### WorkspaceConfiguration

Ƭ **WorkspaceConfiguration**: `Omit`<[`ProjectsConfigurations`](../../devkit/documents/index#projectsconfigurations), `"projects"`\> & `Partial`<[`NxJsonConfiguration`](../../devkit/documents/index#nxjsonconfiguration)\>

---

## Other Type aliases

### ProjectTargetConfigurator

Ƭ **ProjectTargetConfigurator**: (`file`: `string`) => `Record`<`string`, [`TargetConfiguration`](../../devkit/documents/index#targetconfiguration)\>

#### Type declaration

▸ (`file`): `Record`<`string`, [`TargetConfiguration`](../../devkit/documents/index#targetconfiguration)\>

##### Parameters

| Name   | Type     |
| :----- | :------- |
| `file` | `string` |

##### Returns

`Record`<`string`, [`TargetConfiguration`](../../devkit/documents/index#targetconfiguration)\>

---

## Package Manager Type aliases

### PackageManager

Ƭ **PackageManager**: `"yarn"` \| `"pnpm"` \| `"npm"`

---

## Project Graph Type aliases

### ProjectGraphNode

Ƭ **ProjectGraphNode**: [`ProjectGraphProjectNode`](../../devkit/documents/index#projectgraphprojectnode) \| [`ProjectGraphExternalNode`](../../devkit/documents/index#projectgraphexternalnode)

---

## Utils Type aliases

### AdditionalSharedConfig

Ƭ **AdditionalSharedConfig**: (`string` \| [libraryName: string, sharedConfig: SharedLibraryConfig] \| { `libraryName`: `string` ; `sharedConfig`: [`SharedLibraryConfig`](../../devkit/documents/index#sharedlibraryconfig) })[]

---

### ModuleFederationLibrary

Ƭ **ModuleFederationLibrary**: `Object`

#### Type declaration

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |
| `type` | `string` |

---

### Remotes

Ƭ **Remotes**: `string`[] \| [remoteName: string, remoteUrl: string][]

---

### SharedFunction

Ƭ **SharedFunction**: (`libraryName`: `string`, `sharedConfig`: [`SharedLibraryConfig`](../../devkit/documents/index#sharedlibraryconfig)) => `undefined` \| `false` \| [`SharedLibraryConfig`](../../devkit/documents/index#sharedlibraryconfig)

#### Type declaration

▸ (`libraryName`, `sharedConfig`): `undefined` \| `false` \| [`SharedLibraryConfig`](../../devkit/documents/index#sharedlibraryconfig)

##### Parameters

| Name           | Type                                                                      |
| :------------- | :------------------------------------------------------------------------ |
| `libraryName`  | `string`                                                                  |
| `sharedConfig` | [`SharedLibraryConfig`](../../devkit/documents/index#sharedlibraryconfig) |

##### Returns

`undefined` \| `false` \| [`SharedLibraryConfig`](../../devkit/documents/index#sharedlibraryconfig)

---

### SharedWorkspaceLibraryConfig

Ƭ **SharedWorkspaceLibraryConfig**: `Object`

#### Type declaration

| Name                   | Type                                                                                                                    |
| :--------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| `getAliases`           | () => `Record`<`string`, `string`\>                                                                                     |
| `getLibraries`         | (`eager?`: `boolean`) => `Record`<`string`, [`SharedLibraryConfig`](../../devkit/documents/index#sharedlibraryconfig)\> |
| `getReplacementPlugin` | () => `NormalModuleReplacementPlugin`                                                                                   |

---

### StringChange

Ƭ **StringChange**: [`StringInsertion`](../../devkit/documents/index#stringinsertion) \| [`StringDeletion`](../../devkit/documents/index#stringdeletion)

---

### WorkspaceLibrary

Ƭ **WorkspaceLibrary**: `Object`

#### Type declaration

| Name        | Type                    |
| :---------- | :---------------------- |
| `importKey` | `string` \| `undefined` |
| `name`      | `string`                |
| `root`      | `string`                |

---

### WorkspaceLibrarySecondaryEntryPoint

Ƭ **WorkspaceLibrarySecondaryEntryPoint**: `Object`

#### Type declaration

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |
| `path` | `string` |

---

## Workspace Type aliases

### CustomHasher

Ƭ **CustomHasher**: (`task`: [`Task`](../../devkit/documents/index#task), `context`: [`HasherContext`](../../devkit/documents/index#hashercontext)) => `Promise`<[`Hash`](../../devkit/documents/index#hash)\>

#### Type declaration

▸ (`task`, `context`): `Promise`<[`Hash`](../../devkit/documents/index#hash)\>

##### Parameters

| Name      | Type                                                          |
| :-------- | :------------------------------------------------------------ |
| `task`    | [`Task`](../../devkit/documents/index#task)                   |
| `context` | [`HasherContext`](../../devkit/documents/index#hashercontext) |

##### Returns

`Promise`<[`Hash`](../../devkit/documents/index#hash)\>

---

### Executor

Ƭ **Executor**<`T`\>: (`options`: `T`, `context`: [`ExecutorContext`](../../devkit/documents/index#executorcontext)) => `Promise`<`Object`\> \| `AsyncIterableIterator`<`Object`\>

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Type declaration

▸ (`options`, `context`): `Promise`<`Object`\> \| `AsyncIterableIterator`<`Object`\>

Implementation of a target of a project

##### Parameters

| Name      | Type                                                              |
| :-------- | :---------------------------------------------------------------- |
| `options` | `T`                                                               |
| `context` | [`ExecutorContext`](../../devkit/documents/index#executorcontext) |

##### Returns

`Promise`<`Object`\> \| `AsyncIterableIterator`<`Object`\>

---

### Generator

Ƭ **Generator**<`T`\>: (`tree`: `any`, `schema`: `T`) => `void` \| [`GeneratorCallback`](../../devkit/documents/index#generatorcallback) \| `Promise`<`void` \| [`GeneratorCallback`](../../devkit/documents/index#generatorcallback)\>

#### Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

#### Type declaration

▸ (`tree`, `schema`): `void` \| [`GeneratorCallback`](../../devkit/documents/index#generatorcallback) \| `Promise`<`void` \| [`GeneratorCallback`](../../devkit/documents/index#generatorcallback)\>

A function that schedules updates to the filesystem to be done atomically

##### Parameters

| Name     | Type  |
| :------- | :---- |
| `tree`   | `any` |
| `schema` | `T`   |

##### Returns

`void` \| [`GeneratorCallback`](../../devkit/documents/index#generatorcallback) \| `Promise`<`void` \| [`GeneratorCallback`](../../devkit/documents/index#generatorcallback)\>

---

### GeneratorCallback

Ƭ **GeneratorCallback**: () => `void` \| `Promise`<`void`\>

#### Type declaration

▸ (): `void` \| `Promise`<`void`\>

A callback function that is executed after changes are made to the file system

##### Returns

`void` \| `Promise`<`void`\>

---

### ImplicitDependencyEntry

Ƭ **ImplicitDependencyEntry**<`T`\>: `Object`

#### Type parameters

| Name | Type                |
| :--- | :------------------ |
| `T`  | `"*"` \| `string`[] |

#### Index signature

▪ [key: `string`]: `T` \| [`ImplicitJsonSubsetDependency`](../../devkit/documents/index#implicitjsonsubsetdependency)<`T`\>

---

### ProjectType

Ƭ **ProjectType**: `"library"` \| `"application"`

---

### TaskGraphExecutor

Ƭ **TaskGraphExecutor**<`T`\>: (`taskGraph`: [`TaskGraph`](../../devkit/documents/index#taskgraph), `options`: `Record`<`string`, `T`\>, `overrides`: `T`, `context`: [`ExecutorContext`](../../devkit/documents/index#executorcontext)) => `Promise`<`Record`<`string`, `Object`\>\>

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Type declaration

▸ (`taskGraph`, `options`, `overrides`, `context`): `Promise`<`Record`<`string`, `Object`\>\>

Implementation of a target of a project that handles multiple projects to be batched

##### Parameters

| Name        | Type                                                              |
| :---------- | :---------------------------------------------------------------- |
| `taskGraph` | [`TaskGraph`](../../devkit/documents/index#taskgraph)             |
| `options`   | `Record`<`string`, `T`\>                                          |
| `overrides` | `T`                                                               |
| `context`   | [`ExecutorContext`](../../devkit/documents/index#executorcontext) |

##### Returns

`Promise`<`Record`<`string`, `Object`\>\>

---

### WorkspaceJsonConfiguration

Ƭ **WorkspaceJsonConfiguration**: [`ProjectsConfigurations`](../../devkit/documents/index#projectsconfigurations)

## Logger Variables

### logger

• **logger**: `Object`

#### Type declaration

| Name    | Type                        |
| :------ | :-------------------------- |
| `debug` | (...`s`: `any`[]) => `void` |
| `error` | (`s`: `any`) => `void`      |
| `fatal` | (...`s`: `any`[]) => `void` |
| `info`  | (`s`: `any`) => `void`      |
| `log`   | (...`s`: `any`[]) => `void` |
| `warn`  | (`s`: `any`) => `void`      |

---

## Utils Variables

### appRootPath

• **appRootPath**: `string` = `workspaceRoot`

---

### cacheDir

• **cacheDir**: `string`

---

### output

• **output**: `CLIOutput`

---

### workspaceRoot

• **workspaceRoot**: `string`

## Functions

### addDependenciesToPackageJson

▸ **addDependenciesToPackageJson**(`tree`, `dependencies`, `devDependencies`, `packageJsonPath?`): [`GeneratorCallback`](../../devkit/documents/index#generatorcallback)

Add Dependencies and Dev Dependencies to package.json

For example:

```typescript
addDependenciesToPackageJson(tree, { react: 'latest' }, { jest: 'latest' });
```

This will **add** `react` and `jest` to the dependencies and devDependencies sections of package.json respectively.

#### Parameters

| Name              | Type                                        | Default value    | Description                                                             |
| :---------------- | :------------------------------------------ | :--------------- | :---------------------------------------------------------------------- |
| `tree`            | [`Tree`](../../devkit/documents/index#tree) | `undefined`      | Tree representing file system to modify                                 |
| `dependencies`    | `Record`<`string`, `string`\>               | `undefined`      | Dependencies to be added to the dependencies section of package.json    |
| `devDependencies` | `Record`<`string`, `string`\>               | `undefined`      | Dependencies to be added to the devDependencies section of package.json |
| `packageJsonPath` | `string`                                    | `'package.json'` | Path to package.json                                                    |

#### Returns

[`GeneratorCallback`](../../devkit/documents/index#generatorcallback)

Callback to install dependencies only if necessary, no-op otherwise

---

### addProjectConfiguration

▸ **addProjectConfiguration**(`tree`, `projectName`, `projectConfiguration`, `standalone?`): `void`

Adds project configuration to the Nx workspace.

#### Parameters

| Name                   | Type                                                                        | Default value | Description                                                             |
| :--------------------- | :-------------------------------------------------------------------------- | :------------ | :---------------------------------------------------------------------- |
| `tree`                 | [`Tree`](../../devkit/documents/index#tree)                                 | `undefined`   | the file system tree                                                    |
| `projectName`          | `string`                                                                    | `undefined`   | unique name. Often directories are part of the name (e.g., mydir-mylib) |
| `projectConfiguration` | [`ProjectConfiguration`](../../devkit/documents/index#projectconfiguration) | `undefined`   | project configuration                                                   |
| `standalone`           | `boolean`                                                                   | `true`        | whether the project is configured in workspace.json or not              |

#### Returns

`void`

---

### applyAdditionalShared

▸ **applyAdditionalShared**(`sharedConfig`, `additionalShared`, `projectGraph`): `void`

Add additional dependencies to the shared package that may not have been
discovered by the project graph.

This can be useful for applications that use a Dependency Injection system
that expects certain Singleton values to be present in the shared injection
hierarchy.

#### Parameters

| Name               | Type                                                                                           | Description                        |
| :----------------- | :--------------------------------------------------------------------------------------------- | :--------------------------------- |
| `sharedConfig`     | `Record`<`string`, [`SharedLibraryConfig`](../../devkit/documents/index#sharedlibraryconfig)\> | The original Shared Config         |
| `additionalShared` | [`AdditionalSharedConfig`](../../devkit/documents/index#additionalsharedconfig)                | The additional dependencies to add |
| `projectGraph`     | [`ProjectGraph`](../../devkit/documents/index#projectgraph)                                    | The Nx project graph               |

#### Returns

`void`

---

### applyChangesToString

▸ **applyChangesToString**(`text`, `changes`): `string`

Applies a list of changes to a string's original value.

This is useful when working with ASTs.

For Example, to rename a property in a method's options:

```typescript
const code = `bootstrap({
  target: document.querySelector('#app')
})`;

const indexOfPropertyName = 13; // Usually determined by analyzing an AST.
const updatedCode = applyChangesToString(code, [
  {
    type: ChangeType.Insert,
    index: indexOfPropertyName,
    text: 'element',
  },
  {
    type: ChangeType.Delete,
    start: indexOfPropertyName,
    length: 6,
  },
]);

bootstrap({
  element: document.querySelector('#app'),
});
```

#### Parameters

| Name      | Type                                                          |
| :-------- | :------------------------------------------------------------ |
| `text`    | `string`                                                      |
| `changes` | [`StringChange`](../../devkit/documents/index#stringchange)[] |

#### Returns

`string`

---

### applySharedFunction

▸ **applySharedFunction**(`sharedConfig`, `sharedFn`): `void`

Apply a custom function provided by the user that will modify the Shared Config
of the dependencies for the Module Federation build.

#### Parameters

| Name           | Type                                                                                           | Description                               |
| :------------- | :--------------------------------------------------------------------------------------------- | :---------------------------------------- |
| `sharedConfig` | `Record`<`string`, [`SharedLibraryConfig`](../../devkit/documents/index#sharedlibraryconfig)\> | The original Shared Config to be modified |
| `sharedFn`     | [`SharedFunction`](../../devkit/documents/index#sharedfunction)                                | The custom function to run                |

#### Returns

`void`

---

### convertNxExecutor

▸ **convertNxExecutor**(`executor`): `any`

Convert an Nx Executor into an Angular Devkit Builder

Use this to expose a compatible Angular Builder

#### Parameters

| Name       | Type                                                        |
| :--------- | :---------------------------------------------------------- |
| `executor` | [`Executor`](../../devkit/documents/index#executor)<`any`\> |

#### Returns

`any`

---

### convertNxGenerator

▸ **convertNxGenerator**<`T`\>(`generator`, `skipWritingConfigInOldFormat?`): (`generatorOptions`: `T`) => (`tree`: `any`, `context`: `any`) => `Promise`<`any`\>

Convert an Nx Generator into an Angular Devkit Schematic.

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name                           | Type                                                        | Default value | Description                                                 |
| :----------------------------- | :---------------------------------------------------------- | :------------ | :---------------------------------------------------------- |
| `generator`                    | [`Generator`](../../devkit/documents/index#generator)<`T`\> | `undefined`   | The Nx generator to convert to an Angular Devkit Schematic. |
| `skipWritingConfigInOldFormat` | `boolean`                                                   | `false`       | -                                                           |

#### Returns

`fn`

▸ (`generatorOptions`): (`tree`: `any`, `context`: `any`) => `Promise`<`any`\>

##### Parameters

| Name               | Type |
| :----------------- | :--- |
| `generatorOptions` | `T`  |

##### Returns

`fn`

▸ (`tree`, `context`): `Promise`<`any`\>

##### Parameters

| Name      | Type  |
| :-------- | :---- |
| `tree`    | `any` |
| `context` | `any` |

##### Returns

`Promise`<`any`\>

---

### createLockFile

▸ **createLockFile**(`packageJson`, `packageManager?`): `string`

Create lock file based on the root level lock file and (pruned) package.json

#### Parameters

| Name             | Type                                                            |
| :--------------- | :-------------------------------------------------------------- |
| `packageJson`    | `PackageJson`                                                   |
| `packageManager` | [`PackageManager`](../../devkit/documents/index#packagemanager) |

#### Returns

`string`

---

### createPackageJson

▸ **createPackageJson**(`projectName`, `graph`, `options?`): `PackageJson`

Creates a package.json in the output directory for support to install dependencies within containers.

If a package.json exists in the project, it will reuse that.
If isProduction flag is set, it wil remove devDependencies and optional peerDependencies

#### Parameters

| Name                    | Type                                                        |
| :---------------------- | :---------------------------------------------------------- |
| `projectName`           | `string`                                                    |
| `graph`                 | [`ProjectGraph`](../../devkit/documents/index#projectgraph) |
| `options`               | `Object`                                                    |
| `options.isProduction?` | `boolean`                                                   |
| `options.root?`         | `string`                                                    |

#### Returns

`PackageJson`

---

### createProjectGraphAsync

▸ **createProjectGraphAsync**(`opts?`): `Promise`<[`ProjectGraph`](../../devkit/documents/index#projectgraph)\>

Computes and returns a ProjectGraph.

Nx will compute the graph either in a daemon process or in the current process.

Nx will compute it in the current process if:

- The process is running in CI (CI env variable is to true or other common variables used by CI providers are set).
- It is running in the docker container.
- The daemon process is disabled because of the previous error when starting the daemon.
- `NX_DAEMON` is set to `false`.
- `useDaemon` is set to false in `nx.json`

`NX_DAEMON` env variable takes precedence:

- If it is set to true, the daemon will always be used.
- If it is set to false, the graph will always be computed in the current process.

Tip: If you want to debug project graph creation, run your command with NX_DAEMON=false.

Nx uses two layers of caching: the information about explicit dependencies stored on the disk and the information
stored in the daemon process. To reset both run: `nx reset`.

#### Parameters

| Name                      | Type      |
| :------------------------ | :-------- |
| `opts`                    | `Object`  |
| `opts.exitOnError`        | `boolean` |
| `opts.resetDaemonClient?` | `boolean` |

#### Returns

`Promise`<[`ProjectGraph`](../../devkit/documents/index#projectgraph)\>

---

### defaultTasksRunner

▸ `Const` **defaultTasksRunner**(`tasks`, `options`, `context?`): `any`

#### Parameters

| Name                         | Type                                                                                            |
| :--------------------------- | :---------------------------------------------------------------------------------------------- |
| `tasks`                      | [`Task`](../../devkit/documents/index#task)[]                                                   |
| `options`                    | [`DefaultTasksRunnerOptions`](../../devkit/documents/index#defaulttasksrunneroptions)           |
| `context?`                   | `Object`                                                                                        |
| `context.daemon?`            | `DaemonClient`                                                                                  |
| `context.hasher?`            | [`Hasher`](../../devkit/documents/index#hasher)                                                 |
| `context.initiatingProject?` | `string`                                                                                        |
| `context.nxArgs`             | `NxArgs`                                                                                        |
| `context.nxJson`             | [`NxJsonConfiguration`](../../devkit/documents/index#nxjsonconfiguration)<`string`[] \| `"*"`\> |
| `context.projectGraph`       | [`ProjectGraph`](../../devkit/documents/index#projectgraph)                                     |
| `context.target?`            | `string`                                                                                        |
| `context.taskGraph?`         | [`TaskGraph`](../../devkit/documents/index#taskgraph)                                           |

#### Returns

`any`

---

### detectPackageManager

▸ **detectPackageManager**(`dir?`): [`PackageManager`](../../devkit/documents/index#packagemanager)

Detects which package manager is used in the workspace based on the lock file.

#### Parameters

| Name  | Type     | Default value |
| :---- | :------- | :------------ |
| `dir` | `string` | `''`          |

#### Returns

[`PackageManager`](../../devkit/documents/index#packagemanager)

---

### detectWorkspaceScope

▸ **detectWorkspaceScope**(`packageName`): `string`

Detect workspace scope from the package.json name

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `packageName` | `string` |

#### Returns

`string`

---

### ensurePackage

▸ **ensurePackage**(`tree`, `pkg`, `requiredVersion`, `options?`): `Promise`<`void`\>

Ensure that dependencies and devDependencies from package.json are installed at the required versions.

For example:

```typescript
ensurePackage(tree, '@nrwl/jest', nxVersion);
```

This will check that @nrwl/jest@<nxVersion> exists in devDependencies.
If it exists then function returns, otherwise it will install the package before continuing.
When running with --dryRun, the function will throw when dependencies are missing.

#### Parameters

| Name                      | Type                                        | Description                                                        |
| :------------------------ | :------------------------------------------ | :----------------------------------------------------------------- |
| `tree`                    | [`Tree`](../../devkit/documents/index#tree) | the file system tree                                               |
| `pkg`                     | `string`                                    | the package to check (e.g. @nrwl/jest)                             |
| `requiredVersion`         | `string`                                    | the version or semver range to check (e.g. ~1.0.0, >=1.0.0 <2.0.0) |
| `options`                 | `Object`                                    |                                                                    |
| `options.dev?`            | `boolean`                                   | -                                                                  |
| `options.throwOnMissing?` | `boolean`                                   | -                                                                  |

#### Returns

`Promise`<`void`\>

---

### extractLayoutDirectory

▸ **extractLayoutDirectory**(`directory`): `Object`

Experimental

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `directory` | `string` |

#### Returns

`Object`

| Name               | Type     |
| :----------------- | :------- |
| `layoutDirectory`  | `string` |
| `projectDirectory` | `string` |

---

### formatFiles

▸ **formatFiles**(`tree`): `Promise`<`void`\>

Formats all the created or updated files using Prettier

#### Parameters

| Name   | Type                                        | Description          |
| :----- | :------------------------------------------ | :------------------- |
| `tree` | [`Tree`](../../devkit/documents/index#tree) | the file system tree |

#### Returns

`Promise`<`void`\>

---

### generateFiles

▸ **generateFiles**(`tree`, `srcFolder`, `target`, `substitutions`): `void`

Generates a folder of files based on provided templates.

While doing so it performs two substitutions:

- Substitutes segments of file names surrounded by \_\_
- Uses ejs to substitute values in templates

Examples:

```typescript
generateFiles(tree, path.join(__dirname, 'files'), './tools/scripts', {
  tmpl: '',
  name: 'myscript',
});
```

This command will take all the files from the `files` directory next to the place where the command is invoked from.
It will replace all `__tmpl__` with '' and all `__name__` with 'myscript' in the file names, and will replace all
`<%= name %>` with `myscript` in the files themselves.
`tmpl: ''` is a common pattern. With it you can name files like this: `index.ts__tmpl__`, so your editor
doesn't get confused about incorrect TypeScript files.

#### Parameters

| Name            | Type                                        | Description                                   |
| :-------------- | :------------------------------------------ | :-------------------------------------------- |
| `tree`          | [`Tree`](../../devkit/documents/index#tree) | the file system tree                          |
| `srcFolder`     | `string`                                    | the source folder of files (absolute path)    |
| `target`        | `string`                                    | the target folder (relative to the tree root) |
| `substitutions` | `Object`                                    | an object of key-value pairs                  |

#### Returns

`void`

---

### getDependentPackagesForProject

▸ **getDependentPackagesForProject**(`projectGraph`, `name`): `Object`

#### Parameters

| Name           | Type                                                        |
| :------------- | :---------------------------------------------------------- |
| `projectGraph` | [`ProjectGraph`](../../devkit/documents/index#projectgraph) |
| `name`         | `string`                                                    |

#### Returns

`Object`

| Name                 | Type                                                                  |
| :------------------- | :-------------------------------------------------------------------- |
| `npmPackages`        | `string`[]                                                            |
| `workspaceLibraries` | [`WorkspaceLibrary`](../../devkit/documents/index#workspacelibrary)[] |

---

### getImportPath

▸ **getImportPath**(`npmScope`, `projectDirectory`): `string`

Prefixes project name with npm scope

#### Parameters

| Name               | Type     |
| :----------------- | :------- |
| `npmScope`         | `string` |
| `projectDirectory` | `string` |

#### Returns

`string`

---

### getNpmPackageSharedConfig

▸ **getNpmPackageSharedConfig**(`pkgName`, `version`): [`SharedLibraryConfig`](../../devkit/documents/index#sharedlibraryconfig) \| `undefined`

Build the Module Federation Share Config for a specific package and the
specified version of that package.

#### Parameters

| Name      | Type     | Description                                                                    |
| :-------- | :------- | :----------------------------------------------------------------------------- |
| `pkgName` | `string` | Name of the package to share                                                   |
| `version` | `string` | Version of the package to require by other apps in the Module Federation setup |

#### Returns

[`SharedLibraryConfig`](../../devkit/documents/index#sharedlibraryconfig) \| `undefined`

---

### getOutputsForTargetAndConfiguration

▸ **getOutputsForTargetAndConfiguration**(`task`, `node`): `string`[]

Returns the list of outputs that will be cached.

#### Parameters

| Name   | Type                                                                              | Description                                               |
| :----- | :-------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| `task` | `Pick`<[`Task`](../../devkit/documents/index#task), `"overrides"` \| `"target"`\> | target + overrides                                        |
| `node` | [`ProjectGraphProjectNode`](../../devkit/documents/index#projectgraphprojectnode) | ProjectGraphProjectNode object that the task runs against |

#### Returns

`string`[]

---

### getPackageManagerCommand

▸ **getPackageManagerCommand**(`packageManager?`): `PackageManagerCommands`

Returns commands for the package manager used in the workspace.
By default, the package manager is derived based on the lock file,
but it can also be passed in explicitly.

Example:

```javascript
execSync(`${getPackageManagerCommand().addDev} my-dev-package`);
```

#### Parameters

| Name             | Type                                                            |
| :--------------- | :-------------------------------------------------------------- |
| `packageManager` | [`PackageManager`](../../devkit/documents/index#packagemanager) |

#### Returns

`PackageManagerCommands`

---

### getPackageManagerVersion

▸ **getPackageManagerVersion**(`packageManager?`): `string`

Returns the version of the package manager used in the workspace.
By default, the package manager is derived based on the lock file,
but it can also be passed in explicitly.

#### Parameters

| Name             | Type                                                            |
| :--------------- | :-------------------------------------------------------------- |
| `packageManager` | [`PackageManager`](../../devkit/documents/index#packagemanager) |

#### Returns

`string`

---

### getProjects

▸ **getProjects**(`tree`): `Map`<`string`, [`ProjectConfiguration`](../../devkit/documents/index#projectconfiguration)\>

Get a map of all projects in a workspace.

Use [readProjectConfiguration](../../devkit/documents/index#readprojectconfiguration) if only one project is needed.

#### Parameters

| Name   | Type                                        |
| :----- | :------------------------------------------ |
| `tree` | [`Tree`](../../devkit/documents/index#tree) |

#### Returns

`Map`<`string`, [`ProjectConfiguration`](../../devkit/documents/index#projectconfiguration)\>

---

### getWorkspaceLayout

▸ **getWorkspaceLayout**(`tree`): `Object`

Returns workspace defaults. It includes defaults folders for apps and libs,
and the default scope.

Example:

```typescript
{ appsDir: 'apps', libsDir: 'libs', npmScope: 'myorg' }
```

#### Parameters

| Name   | Type                                        | Description      |
| :----- | :------------------------------------------ | :--------------- |
| `tree` | [`Tree`](../../devkit/documents/index#tree) | file system tree |

#### Returns

`Object`

| Name                  | Type      |
| :-------------------- | :-------- |
| `appsDir`             | `string`  |
| `libsDir`             | `string`  |
| `npmScope`            | `string`  |
| `standaloneAsDefault` | `boolean` |

---

### getWorkspacePath

▸ **getWorkspacePath**(`tree`): `"angular.json"` \| `"workspace.json"`

**`deprecated`** all projects are configured using project.json

#### Parameters

| Name   | Type                                        |
| :----- | :------------------------------------------ |
| `tree` | [`Tree`](../../devkit/documents/index#tree) |

#### Returns

`"angular.json"` \| `"workspace.json"`

---

### installPackagesTask

▸ **installPackagesTask**(`tree`, `alwaysRun?`, `cwd?`, `packageManager?`): `void`

Runs `npm install` or `yarn install`. It will skip running the install if
`package.json` hasn't changed at all or it hasn't changed since the last invocation.

#### Parameters

| Name             | Type                                                            | Default value | Description                                                   |
| :--------------- | :-------------------------------------------------------------- | :------------ | :------------------------------------------------------------ |
| `tree`           | [`Tree`](../../devkit/documents/index#tree)                     | `undefined`   | the file system tree                                          |
| `alwaysRun`      | `boolean`                                                       | `false`       | always run the command even if `package.json` hasn't changed. |
| `cwd`            | `string`                                                        | `''`          | -                                                             |
| `packageManager` | [`PackageManager`](../../devkit/documents/index#packagemanager) | `undefined`   | -                                                             |

#### Returns

`void`

---

### isStandaloneProject

▸ **isStandaloneProject**(`tree`, `project`): `boolean`

Returns if a project has a standalone configuration (project.json).

**`deprecated`** non-standalone projects were deprecated

#### Parameters

| Name      | Type                                        | Description          |
| :-------- | :------------------------------------------ | :------------------- |
| `tree`    | [`Tree`](../../devkit/documents/index#tree) | the file system tree |
| `project` | `string`                                    | the project name     |

#### Returns

`boolean`

---

### joinPathFragments

▸ **joinPathFragments**(...`fragments`): `string`

Normalized path fragments and joins them

#### Parameters

| Name           | Type       |
| :------------- | :--------- |
| `...fragments` | `string`[] |

#### Returns

`string`

---

### mapRemotes

▸ **mapRemotes**(`remotes`, `remoteEntryExt`, `determineRemoteUrl`): `Record`<`string`, `string`\>

Map remote names to a format that can be understood and used by Module
Federation.

#### Parameters

| Name                 | Type                                              | Description                                              |
| :------------------- | :------------------------------------------------ | :------------------------------------------------------- |
| `remotes`            | [`Remotes`](../../devkit/documents/index#remotes) | The remotes to map                                       |
| `remoteEntryExt`     | `"js"` \| `"mjs"`                                 | The file extension of the remoteEntry file               |
| `determineRemoteUrl` | (`remote`: `string`) => `string`                  | The function used to lookup the URL of the served remote |

#### Returns

`Record`<`string`, `string`\>

---

### mapRemotesForSSR

▸ **mapRemotesForSSR**(`remotes`, `remoteEntryExt`, `determineRemoteUrl`): `Record`<`string`, `string`\>

Map remote names to a format that can be understood and used by Module
Federation.

#### Parameters

| Name                 | Type                                              | Description                                              |
| :------------------- | :------------------------------------------------ | :------------------------------------------------------- |
| `remotes`            | [`Remotes`](../../devkit/documents/index#remotes) | The remotes to map                                       |
| `remoteEntryExt`     | `"js"` \| `"mjs"`                                 | The file extension of the remoteEntry file               |
| `determineRemoteUrl` | (`remote`: `string`) => `string`                  | The function used to lookup the URL of the served remote |

#### Returns

`Record`<`string`, `string`\>

---

### moveFilesToNewDirectory

▸ **moveFilesToNewDirectory**(`tree`, `oldDir`, `newDir`): `void`

Analogous to cp -r oldDir newDir

#### Parameters

| Name     | Type                                        |
| :------- | :------------------------------------------ |
| `tree`   | [`Tree`](../../devkit/documents/index#tree) |
| `oldDir` | `string`                                    |
| `newDir` | `string`                                    |

#### Returns

`void`

---

### names

▸ **names**(`name`): `Object`

Util function to generate different strings based off the provided name.

Examples:

```typescript
names('my-name'); // {name: 'my-name', className: 'MyName', propertyName: 'myName', constantName: 'MY_NAME', fileName: 'my-name'}
names('myName'); // {name: 'myName', className: 'MyName', propertyName: 'myName', constantName: 'MY_NAME', fileName: 'my-name'}
```

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`Object`

| Name           | Type     |
| :------------- | :------- |
| `className`    | `string` |
| `constantName` | `string` |
| `fileName`     | `string` |
| `name`         | `string` |
| `propertyName` | `string` |

---

### normalizePath

▸ **normalizePath**(`osSpecificPath`): `string`

Coverts an os specific path to a unix style path

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `osSpecificPath` | `string` |

#### Returns

`string`

---

### offsetFromRoot

▸ **offsetFromRoot**(`fullPathToDir`): `string`

Calculates an offset from the root of the workspace, which is useful for
constructing relative URLs.

Examples:

```typescript
offsetFromRoot('apps/mydir/myapp/'); // returns "../../../"
```

#### Parameters

| Name            | Type     | Description    |
| :-------------- | :------- | :------------- |
| `fullPathToDir` | `string` | directory path |

#### Returns

`string`

---

### parseJson

▸ **parseJson**<`T`\>(`input`, `options?`): `T`

Parses the given JSON string and returns the object the JSON content represents.
By default javascript-style comments and trailing commas are allowed.

#### Type parameters

| Name | Type                     |
| :--- | :----------------------- |
| `T`  | extends `object` = `any` |

#### Parameters

| Name       | Type                                                                | Description            |
| :--------- | :------------------------------------------------------------------ | :--------------------- |
| `input`    | `string`                                                            | JSON content as string |
| `options?` | [`JsonParseOptions`](../../devkit/documents/index#jsonparseoptions) | JSON parse options     |

#### Returns

`T`

Object the JSON content represents

---

### parseTargetString

▸ **parseTargetString**(`targetString`): [`Target`](../../devkit/documents/index#target)

**`deprecated(v17)`** A project graph should be passed to parseTargetString for best accuracy.

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `targetString` | `string` |

#### Returns

[`Target`](../../devkit/documents/index#target)

▸ **parseTargetString**(`targetString`, `projectGraph`): [`Target`](../../devkit/documents/index#target)

Parses a target string into {project, target, configuration}

Examples:

```typescript
parseTargetString('proj:test', graph); // returns { project: "proj", target: "test" }
parseTargetString('proj:test:production', graph); // returns { project: "proj", target: "test", configuration: "production" }
```

#### Parameters

| Name           | Type                                                        | Description      |
| :------------- | :---------------------------------------------------------- | :--------------- |
| `targetString` | `string`                                                    | target reference |
| `projectGraph` | [`ProjectGraph`](../../devkit/documents/index#projectgraph) | -                |

#### Returns

[`Target`](../../devkit/documents/index#target)

---

### readAllWorkspaceConfiguration

▸ **readAllWorkspaceConfiguration**(): [`ProjectsConfigurations`](../../devkit/documents/index#projectsconfigurations) & [`NxJsonConfiguration`](../../devkit/documents/index#nxjsonconfiguration)

TODO(vsavkin): Remove after Nx 16 is out

**`deprecated`** Use readProjectsConfigurationFromProjectGraph(await createProjectGraphAsync())

#### Returns

[`ProjectsConfigurations`](../../devkit/documents/index#projectsconfigurations) & [`NxJsonConfiguration`](../../devkit/documents/index#nxjsonconfiguration)

---

### readCachedProjectGraph

▸ **readCachedProjectGraph**(): [`ProjectGraph`](../../devkit/documents/index#projectgraph)

Synchronously reads the latest cached copy of the workspace's ProjectGraph.

**`throws`** {Error} if there is no cached ProjectGraph to read from

#### Returns

[`ProjectGraph`](../../devkit/documents/index#projectgraph)

---

### readJson

▸ **readJson**<`T`\>(`tree`, `path`, `options?`): `T`

Reads a json file, removes all comments and parses JSON.

#### Type parameters

| Name | Type                     |
| :--- | :----------------------- |
| `T`  | extends `object` = `any` |

#### Parameters

| Name       | Type                                                                | Description                 |
| :--------- | :------------------------------------------------------------------ | :-------------------------- |
| `tree`     | [`Tree`](../../devkit/documents/index#tree)                         | file system tree            |
| `path`     | `string`                                                            | file path                   |
| `options?` | [`JsonParseOptions`](../../devkit/documents/index#jsonparseoptions) | Optional JSON Parse Options |

#### Returns

`T`

---

### readJsonFile

▸ **readJsonFile**<`T`\>(`path`, `options?`): `T`

Reads a JSON file and returns the object the JSON content represents.

#### Type parameters

| Name | Type                     |
| :--- | :----------------------- |
| `T`  | extends `object` = `any` |

#### Parameters

| Name       | Type              | Description        |
| :--------- | :---------------- | :----------------- |
| `path`     | `string`          | A path to a file.  |
| `options?` | `JsonReadOptions` | JSON parse options |

#### Returns

`T`

Object the JSON content of the file represents

---

### readNxJson

▸ **readNxJson**(`tree`): [`NxJsonConfiguration`](../../devkit/documents/index#nxjsonconfiguration) \| `null`

Reads nx.json

#### Parameters

| Name   | Type                                        |
| :----- | :------------------------------------------ |
| `tree` | [`Tree`](../../devkit/documents/index#tree) |

#### Returns

[`NxJsonConfiguration`](../../devkit/documents/index#nxjsonconfiguration) \| `null`

---

### readProjectConfiguration

▸ **readProjectConfiguration**(`tree`, `projectName`): [`ProjectConfiguration`](../../devkit/documents/index#projectconfiguration)

Reads a project configuration.

**`throws`** If supplied projectName cannot be found

#### Parameters

| Name          | Type                                        | Description                                                             |
| :------------ | :------------------------------------------ | :---------------------------------------------------------------------- |
| `tree`        | [`Tree`](../../devkit/documents/index#tree) | the file system tree                                                    |
| `projectName` | `string`                                    | unique name. Often directories are part of the name (e.g., mydir-mylib) |

#### Returns

[`ProjectConfiguration`](../../devkit/documents/index#projectconfiguration)

---

### readRootPackageJson

▸ **readRootPackageJson**(): `Object`

#### Returns

`Object`

| Name               | Type     |
| :----------------- | :------- |
| `dependencies?`    | `Object` |
| `devDependencies?` | `Object` |

---

### readTargetOptions

▸ **readTargetOptions**<`T`\>(`__namedParameters`, `context`): `T`

Reads and combines options for a given target.

Works as if you invoked the target yourself without passing any command lint overrides.

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name                | Type                                                              |
| :------------------ | :---------------------------------------------------------------- |
| `__namedParameters` | [`Target`](../../devkit/documents/index#target)                   |
| `context`           | [`ExecutorContext`](../../devkit/documents/index#executorcontext) |

#### Returns

`T`

---

### readWorkspaceConfiguration

▸ **readWorkspaceConfiguration**(`tree`): [`WorkspaceConfiguration`](../../devkit/documents/index#workspaceconfiguration)

Read general workspace configuration such as the default project or cli settings

This does _not_ provide projects configuration, use [readProjectConfiguration](../../devkit/documents/index#readprojectconfiguration) instead.

**`deprecated`** use readNxJson

#### Parameters

| Name   | Type                                        |
| :----- | :------------------------------------------ |
| `tree` | [`Tree`](../../devkit/documents/index#tree) |

#### Returns

[`WorkspaceConfiguration`](../../devkit/documents/index#workspaceconfiguration)

---

### removeDependenciesFromPackageJson

▸ **removeDependenciesFromPackageJson**(`tree`, `dependencies`, `devDependencies`, `packageJsonPath?`): [`GeneratorCallback`](../../devkit/documents/index#generatorcallback)

Remove Dependencies and Dev Dependencies from package.json

For example:

```typescript
removeDependenciesFromPackageJson(tree, ['react'], ['jest']);
```

This will **remove** `react` and `jest` from the dependencies and devDependencies sections of package.json respectively.

#### Parameters

| Name              | Type                                        | Default value    | Description                                                                 |
| :---------------- | :------------------------------------------ | :--------------- | :-------------------------------------------------------------------------- |
| `tree`            | [`Tree`](../../devkit/documents/index#tree) | `undefined`      | -                                                                           |
| `dependencies`    | `string`[]                                  | `undefined`      | Dependencies to be removed from the dependencies section of package.json    |
| `devDependencies` | `string`[]                                  | `undefined`      | Dependencies to be removed from the devDependencies section of package.json |
| `packageJsonPath` | `string`                                    | `'package.json'` | -                                                                           |

#### Returns

[`GeneratorCallback`](../../devkit/documents/index#generatorcallback)

Callback to uninstall dependencies only if necessary. undefined is returned if changes are not necessary.

---

### removeProjectConfiguration

▸ **removeProjectConfiguration**(`tree`, `projectName`): `void`

Removes the configuration of an existing project.

#### Parameters

| Name          | Type                                        | Description                                                             |
| :------------ | :------------------------------------------ | :---------------------------------------------------------------------- |
| `tree`        | [`Tree`](../../devkit/documents/index#tree) | the file system tree                                                    |
| `projectName` | `string`                                    | unique name. Often directories are part of the name (e.g., mydir-mylib) |

#### Returns

`void`

---

### reverse

▸ **reverse**(`graph`): [`ProjectGraph`](../../devkit/documents/index#projectgraph)

Returns a new project graph where all the edges are reversed.

For instance, if project A depends on B, in the reversed graph
B will depend on A.

#### Parameters

| Name    | Type                                                        |
| :------ | :---------------------------------------------------------- |
| `graph` | [`ProjectGraph`](../../devkit/documents/index#projectgraph) |

#### Returns

[`ProjectGraph`](../../devkit/documents/index#projectgraph)

---

### runExecutor

▸ **runExecutor**<`T`\>(`targetDescription`, `overrides`, `context`): `Promise`<`AsyncIterableIterator`<`T`\>\>

Loads and invokes executor.

This is analogous to invoking executor from the terminal, with the exception
that the params aren't parsed from the string, but instead provided parsed already.

Apart from that, it works the same way:

- it will load the workspace configuration
- it will resolve the target
- it will load the executor and the schema
- it will load the options for the appropriate configuration
- it will run the validations and will set the default
- and, of course, it will invoke the executor

Example:

```typescript
for await (const s of await runExecutor(
  { project: 'myproj', target: 'serve' },
  { watch: true },
  context
)) {
  // s.success
}
```

Note that the return value is a promise of an iterator, so you need to await before iterating over it.

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `Object` |

#### Parameters

| Name                               | Type                                                              |
| :--------------------------------- | :---------------------------------------------------------------- |
| `targetDescription`                | `Object`                                                          |
| `targetDescription.configuration?` | `string`                                                          |
| `targetDescription.project`        | `string`                                                          |
| `targetDescription.target`         | `string`                                                          |
| `overrides`                        | `Object`                                                          |
| `context`                          | [`ExecutorContext`](../../devkit/documents/index#executorcontext) |

#### Returns

`Promise`<`AsyncIterableIterator`<`T`\>\>

---

### serializeJson

▸ **serializeJson**<`T`\>(`input`, `options?`): `string`

Serializes the given data to a JSON string.
By default the JSON string is formatted with a 2 space indentation to be easy readable.

#### Type parameters

| Name | Type                        |
| :--- | :-------------------------- |
| `T`  | extends `object` = `object` |

#### Parameters

| Name       | Type                                                                        | Description                               |
| :--------- | :-------------------------------------------------------------------------- | :---------------------------------------- |
| `input`    | `T`                                                                         | Object which should be serialized to JSON |
| `options?` | [`JsonSerializeOptions`](../../devkit/documents/index#jsonserializeoptions) | JSON serialize options                    |

#### Returns

`string`

the formatted JSON representation of the object

---

### sharePackages

▸ **sharePackages**(`packages`): `Record`<`string`, [`SharedLibraryConfig`](../../devkit/documents/index#sharedlibraryconfig)\>

Create a dictionary of packages and their Module Federation Shared Config
from an array of package names.

Lookup the versions of the packages from the root package.json file in the
workspace.

#### Parameters

| Name       | Type       | Description                       |
| :--------- | :--------- | :-------------------------------- |
| `packages` | `string`[] | Array of package names as strings |

#### Returns

`Record`<`string`, [`SharedLibraryConfig`](../../devkit/documents/index#sharedlibraryconfig)\>

---

### shareWorkspaceLibraries

▸ **shareWorkspaceLibraries**(`libraries`, `tsConfigPath?`): [`SharedWorkspaceLibraryConfig`](../../devkit/documents/index#sharedworkspacelibraryconfig)

Build an object of functions to be used with the ModuleFederationPlugin to
share Nx Workspace Libraries between Hosts and Remotes.

#### Parameters

| Name           | Type                                                                  | Description                                                                  |
| :------------- | :-------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| `libraries`    | [`WorkspaceLibrary`](../../devkit/documents/index#workspacelibrary)[] | The Nx Workspace Libraries to share                                          |
| `tsConfigPath` | `string`                                                              | The path to TS Config File that contains the Path Mappings for the Libraries |

#### Returns

[`SharedWorkspaceLibraryConfig`](../../devkit/documents/index#sharedworkspacelibraryconfig)

---

### stripIndents

▸ **stripIndents**(`strings`, ...`values`): `string`

Removes indents, which is useful for printing warning and messages.

Example:

```typescript
stripIndents`
 Options:
 - option1
 - option2
`;
```

#### Parameters

| Name        | Type                   |
| :---------- | :--------------------- |
| `strings`   | `TemplateStringsArray` |
| `...values` | `any`[]                |

#### Returns

`string`

---

### stripJsonComments

▸ `Const` **stripJsonComments**(`text`, `replaceCh?`): `string`

Takes JSON with JavaScript-style comments and remove
them. Optionally replaces every none-newline character
of comments with a replaceCharacter

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `text`       | `string` |
| `replaceCh?` | `string` |

#### Returns

`string`

---

### targetToTargetString

▸ **targetToTargetString**(`target`): `string`

Returns a string in the format "project:target[:configuration]" for the target

#### Parameters

| Name     | Type                                            | Description                                                                                                                                                                                                                                     |
| :------- | :---------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` | [`Target`](../../devkit/documents/index#target) | target object Examples: `typescript targetToTargetString({ project: "proj", target: "test" }) // returns "proj:test" targetToTargetString({ project: "proj", target: "test", configuration: "production" }) // returns "proj:test:production" ` |

#### Returns

`string`

---

### toJS

▸ **toJS**(`tree`): `void`

Rename and transpile any new typescript files created to javascript files

#### Parameters

| Name   | Type                                        |
| :----- | :------------------------------------------ |
| `tree` | [`Tree`](../../devkit/documents/index#tree) |

#### Returns

`void`

---

### updateJson

▸ **updateJson**<`T`, `U`\>(`tree`, `path`, `updater`, `options?`): `void`

Updates a JSON value to the file system tree

#### Type parameters

| Name | Type                     |
| :--- | :----------------------- |
| `T`  | extends `object` = `any` |
| `U`  | extends `object` = `T`   |

#### Parameters

| Name       | Type                                                                                                                                              | Description                                                                                          |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------- |
| `tree`     | [`Tree`](../../devkit/documents/index#tree)                                                                                                       | File system tree                                                                                     |
| `path`     | `string`                                                                                                                                          | Path of JSON file in the Tree                                                                        |
| `updater`  | (`value`: `T`) => `U`                                                                                                                             | Function that maps the current value of a JSON document to a new value to be written to the document |
| `options?` | [`JsonParseOptions`](../../devkit/documents/index#jsonparseoptions) & [`JsonSerializeOptions`](../../devkit/documents/index#jsonserializeoptions) | Optional JSON Parse and Serialize Options                                                            |

#### Returns

`void`

---

### updateNxJson

▸ **updateNxJson**(`tree`, `nxJson`): `void`

Update nx.json

#### Parameters

| Name     | Type                                                                                            |
| :------- | :---------------------------------------------------------------------------------------------- |
| `tree`   | [`Tree`](../../devkit/documents/index#tree)                                                     |
| `nxJson` | [`NxJsonConfiguration`](../../devkit/documents/index#nxjsonconfiguration)<`string`[] \| `"*"`\> |

#### Returns

`void`

---

### updateProjectConfiguration

▸ **updateProjectConfiguration**(`tree`, `projectName`, `projectConfiguration`): `void`

Updates the configuration of an existing project.

#### Parameters

| Name                   | Type                                                                        | Description                                                             |
| :--------------------- | :-------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| `tree`                 | [`Tree`](../../devkit/documents/index#tree)                                 | the file system tree                                                    |
| `projectName`          | `string`                                                                    | unique name. Often directories are part of the name (e.g., mydir-mylib) |
| `projectConfiguration` | [`ProjectConfiguration`](../../devkit/documents/index#projectconfiguration) | project configuration                                                   |

#### Returns

`void`

---

### updateTsConfigsToJs

▸ **updateTsConfigsToJs**(`tree`, `options`): `void`

#### Parameters

| Name                  | Type                                        |
| :-------------------- | :------------------------------------------ |
| `tree`                | [`Tree`](../../devkit/documents/index#tree) |
| `options`             | `Object`                                    |
| `options.projectRoot` | `string`                                    |

#### Returns

`void`

---

### updateWorkspaceConfiguration

▸ **updateWorkspaceConfiguration**(`tree`, `workspaceConfig`): `void`

Update general workspace configuration such as the default project or cli settings.

This does _not_ update projects configuration, use [updateProjectConfiguration](../../devkit/documents/index#updateprojectconfiguration) or [addProjectConfiguration](../../devkit/documents/index#addprojectconfiguration) instead.

**`deprecated`** use updateNxJson

#### Parameters

| Name              | Type                                                                            |
| :---------------- | :------------------------------------------------------------------------------ |
| `tree`            | [`Tree`](../../devkit/documents/index#tree)                                     |
| `workspaceConfig` | [`WorkspaceConfiguration`](../../devkit/documents/index#workspaceconfiguration) |

#### Returns

`void`

---

### visitNotIgnoredFiles

▸ **visitNotIgnoredFiles**(`tree`, `dirPath?`, `visitor`): `void`

Utility to act on all files in a tree that are not ignored by git.

#### Parameters

| Name      | Type                                        | Default value |
| :-------- | :------------------------------------------ | :------------ |
| `tree`    | [`Tree`](../../devkit/documents/index#tree) | `undefined`   |
| `dirPath` | `string`                                    | `tree.root`   |
| `visitor` | (`path`: `string`) => `void`                | `undefined`   |

#### Returns

`void`

---

### workspaceLayout

▸ **workspaceLayout**(): `Object`

Returns information about where apps and libs will be created.

#### Returns

`Object`

| Name      | Type     |
| :-------- | :------- |
| `appsDir` | `string` |
| `libsDir` | `string` |

---

### writeJson

▸ **writeJson**<`T`\>(`tree`, `path`, `value`, `options?`): `void`

Writes a JSON value to the file system tree

#### Type parameters

| Name | Type                        |
| :--- | :-------------------------- |
| `T`  | extends `object` = `object` |

#### Parameters

| Name       | Type                                                                        | Description                     |
| :--------- | :-------------------------------------------------------------------------- | :------------------------------ |
| `tree`     | [`Tree`](../../devkit/documents/index#tree)                                 | File system tree                |
| `path`     | `string`                                                                    | Path of JSON file in the Tree   |
| `value`    | `T`                                                                         | Serializable value to write     |
| `options?` | [`JsonSerializeOptions`](../../devkit/documents/index#jsonserializeoptions) | Optional JSON Serialize Options |

#### Returns

`void`

---

### writeJsonFile

▸ **writeJsonFile**<`T`\>(`path`, `data`, `options?`): `void`

Serializes the given data to JSON and writes it to a file.

#### Type parameters

| Name | Type                        |
| :--- | :-------------------------- |
| `T`  | extends `object` = `object` |

#### Parameters

| Name       | Type               | Description                                                     |
| :--------- | :----------------- | :-------------------------------------------------------------- |
| `path`     | `string`           | A path to a file.                                               |
| `data`     | `T`                | data which should be serialized to JSON and written to the file |
| `options?` | `JsonWriteOptions` | JSON serialize options                                          |

#### Returns

`void`
