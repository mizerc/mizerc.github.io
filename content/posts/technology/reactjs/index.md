---
title: 'ReactJS'
tags: ['reactjs']
draft: true
---

The ReactJS is a popular library for building user interfaces. 

We can use it together with the ReactDOM to build a web application. Or with the React Native to build a mobile application. Or with the React Three Fiber to build a 3D application. We can even build console applications using xxx.

# The Virtual DOM

One of the selling points of ReactJS is to reduce the manual DOM manipulation of DOM elements. To achieve this, ReactJS uses multiple techniques. One of them is the idea of the Virtual DOM.

The Virtual DOM is a representation of the DOM (Document Object Model) in the memory.

# Hooks

## useState

The `useState` hook is used to manage the state of a functional component.

## useEffect

The `useEffect` hook is used to manage the side effects. You define a function that will be envoked when any of the dependencies change.

## useRef

The `useRef` hook allow us to store a value that doesn't trigger a re-render when it changes. Ie, it is not reactive.

## useCallback

TODO

## useMemo

TODO

# Variables Comparison

In JavaScript, primitive variables are compared by value, while objects/functions are compared by reference.

```js
const a = 1;
const b = 1;

console.log(a === b); // true (same value)
```

```js
const a = {
  value: 1
};
const b = {
  value: 1
};

console.log(a === b); // false (different reference)
```
# Function Envokation vs Declaration

Another important concept to understand is the difference between function envokation and function declaration.

