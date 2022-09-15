# eslint-plugin-import

[Home](../../index.md) >
[eslint ルール](../index.md) >
eslint-plugin-import

latest version 2.26.0 published at 2022-04-06

[npm](https://www.npmjs.com/package/eslint-plugin-import)
[github](https://github.com/import-js/eslint-plugin-import)

## 設定

- plugin:import/recommended
- plugin:import/errors
- plugin:import/warnings
- plugin:import/stage-0
- plugin:import/react
- plugin:import/react-native
- plugin:import/electron
- plugin:import/typescript

## ルール

- [import/arrow](./import/arrow.md)


Static analysis

Ensure imports point to a file/module that can be resolved. (no-unresolved)
Ensure named imports correspond to a named export in the remote file. (named)
Ensure a default export is present, given a default import. (default)
Ensure imported namespaces contain dereferenced properties as they are dereferenced. (namespace)
Restrict which files can be imported in a given folder (no-restricted-paths)
Forbid import of modules using absolute paths (no-absolute-path)
Forbid require() calls with expressions (no-dynamic-require)
Prevent importing the submodules of other modules (no-internal-modules)
Forbid webpack loader syntax in imports (no-webpack-loader-syntax)
Forbid a module from importing itself (no-self-import)
Forbid a module from importing a module with a dependency path back to itself (no-cycle)
Prevent unnecessary path segments in import and require statements (no-useless-path-segments)
Forbid importing modules from parent directories (no-relative-parent-imports)
Prevent importing packages through relative paths (no-relative-packages)
Helpful warnings

Report any invalid exports, i.e. re-export of the same name (export)
Report use of exported name as identifier of default export (no-named-as-default)
Report use of exported name as property of default export (no-named-as-default-member)
Report imported names marked with @deprecated documentation tag (no-deprecated)
Forbid the use of extraneous packages (no-extraneous-dependencies)
Forbid the use of mutable exports with var or let. (no-mutable-exports)
Report modules without exports, or exports without matching import in another module (no-unused-modules)
Module systems

Report potentially ambiguous parse goal (script vs. module) (unambiguous)
Report CommonJS require calls and module.exports or exports.*. (no-commonjs)
Report AMD require and define calls. (no-amd)
No Node.js builtin modules. (no-nodejs-modules)
Forbid imports with CommonJS exports (no-import-module-exports)
Style guide

Ensure all imports appear before other statements (first)
Ensure all exports appear after other statements (exports-last)
Report repeated import of the same module in multiple places (no-duplicates)
Forbid namespace (a.k.a. "wildcard" *) imports (no-namespace)
Ensure consistent use of file extension within the import path (extensions)
Enforce a convention in module import order (order)
Enforce a newline after import statements (newline-after-import)
Prefer a default export if module exports a single name (prefer-default-export)
Limit the maximum number of dependencies a module can have (max-dependencies)
Forbid unassigned imports (no-unassigned-import)
Forbid named default exports (no-named-default)
Forbid default exports (no-default-export)
Forbid named exports (no-named-export)
Forbid anonymous values as default exports (no-anonymous-default-export)
Prefer named exports to be grouped together in a single export declaration (group-exports)
Enforce a leading comment with the webpackChunkName for dynamic imports (dynamic-import-chunkname)
Enforce or ban the use of inline type-only markers for named imports (consistent-type-specifier-style)
