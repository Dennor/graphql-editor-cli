export default {
  compilerOptions: {
    skipLibCheck: true,
    target:
      'es5' /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */,
    module:
      'commonjs' /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
    declaration: true /* Generates corresponding '.d.ts' file. */,
    outDir: './lib' /* Redirect output structure to the directory. */,
    rootDir:
      './src' /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */,
    strict: true /* Enable all strict type-checking options. */,
    strictNullChecks: true,
    typeRoots: [
      './node_modules/@types',
      './src/typings',
      'graphql',
    ] /* List of folders to include type definitions from. */,
    esModuleInterop: true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
  },
  include: ['./src/**/*'],
  exclude: ['node_modules'],
};
