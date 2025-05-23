---
title: "Rollup and React"
date: 2025-05-23
draft: true
tags: ["rollup", "react"]
---

This is a simple guide to setup a bare minimum React app with Rollup.

## Rollup

Rollup is a module bundler for JavaScript.
It has built-in support for ES modules (ESM, like `import` and `export`).
It has built-in watch mode.
You can expand the features with plugins.

## Setup

Initialize a new NPM project

`npm init -y`

Install Rollup

`npm install rollup --save-dev`

Install React

`npm install react react-dom --save-dev`

Install Rollup plugins

`npm install @babel/preset-react @babel/core @rollup/plugin-replace @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-babel --save-dev`

Create `rollup.config.mjs` and add the following content:

```js
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";

export default {
  input: "src/index.jsx",
  output: [
    {
      file: "public/bundle.js",
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [
    commonjs(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: [["@babel/preset-react"]],
      extensions: [".js", ".jsx"],
    }),
    nodeResolve({
      extensions: [".js", ".jsx"],
    }),
    replace({
      preventAssignment: false,
      "process.env.NODE_ENV": '"development"',
    }),
  ],
};
```

Create `index.jsx` and add the following content:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
```

Create `App.jsx` and add the following content:

```jsx
import React from "react";

export function App() {
  return <h1>This is a React app!</h1>;
}
```

Update `package.json` to add the following scripts:

```json
"scripts": {
  "build": "rollup -c",
  "dev": "rollup -c -w",
}
```

Now you can run `npm run dev` and open `public/index.html` with a local server like VSCode Live Server.

## Rollup Plugins

### @rollup/plugin-node-resolve

When we have an import like `import 'react'`, we want the rollup bundler to know how to extract the desired package from the `node_modules` directory.
This is known as Node's module resolution algorithm.

### @rollup/plugin-replace

Allows us to replace text in our code with other text.

### @rollup/plugin-commonjs

Allow us to use the CommonJS module syntax in our code like `const { useState } = require('react')`.

### @rollup/plugin-babel

We need babel to understand the JSX syntax in our code.
This plugin automatically loads Babel and the configuration from `.babelrc.json` file.

### rollup-plugin-terser

It's basically a plugin to integrate the usage of terser.
It helps to minify and compress our output JavaScript files.

### rollup-plugin-visualizer

Helps us to visualize the output bundle.
