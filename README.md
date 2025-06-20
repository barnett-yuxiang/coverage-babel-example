Build a frontend project with the following features:

1. Write source code using TypeScript;
2. Use Babel for syntax transformation and AST operations;
3. Use Istanbul (via babel-plugin-istanbul) for code instrumentation;
4. Use Jest to execute tests and generate coverage reports;
5. View AST structure and instrumented JS code.

## Installation

```
npm install --save-dev typescript ts-jest jest babel-jest
npm install --save-dev @babel/core @babel/preset-env @babel/preset-typescript
npm install --save-dev babel-plugin-istanbul
npm install --save-dev @babel/parser @babel/traverse @babel/generator
```

## Available Scripts

- `npm test` - Run Jest tests
- `npm run test:coverage` - Run Jest tests with coverage report
- `npm run build:transformed` - View instrumented JS code after Babel transformation
- `npm run dump:ast` - View AST structure of the source code
