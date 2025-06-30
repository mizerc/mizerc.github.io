---
date: "2025-05-21"
title: "WebGL"
tags: ["webgl", "graphics"]
draft: false
---

# Introduction

The HTML5 <canvas> element provides a drawable region in a web page that can be manipulated with JavaScript.

It supports two main rendering contexts:

- `context2d`: which uses the CanvasRenderingContext2D API to draw shapes, text, images, and perform pixel manipulation in a rasterized space;
- `webgl`: which exposes a low-level WebGL API that allows direct access to the GPU for high-performance, hardware-accelerated rendering of 2D and 3D graphics.

While context2d is simpler and suited for lightweight graphics, webgl enables us to run small programs in the GPU (shaders) which allow us to build more complex visualizations like simulations, games, and 3D rendering by interfacing with shaders and GPU buffers.
The WebGL has limitation if we compare with modern OpenGL, but it is still offer a great way to create 3D graphics in the browser.

## Canvas and WebGL Context

The `<canvas>` element is the HTML element that we need to use to access the WebGL context.
The WebGL context is the object that we will use define programs, shaders, buffers, etc.

```js
const canvas = document.querySelector("#canvas");
const gl = canvas.getContext("webgl");
```

## Shaders

Shaders are small programs that run on the GPU.

### Vertex Shader

The vertex shader is the first shader that runs. It is responsible for transforming the vertices of the geometry.

We can apply transformations like translation, rotation, and scaling to the vertices in the vertex shader.

### Fragment Shader

The fragment shader is the second shader that runs. It is responsible for setting each color of the pixels of the geometry. A color could be a simple solid color or a texture (color from an image source).

### Shader Variables

We can pass data from the JavaScript code to the shaders using variables. We can also pass data from the vertex shader to the fragment shader using special variables called varyings.

#### Uniforms

Uniforms are variables that are passed from the JavaScript code to the shaders. They are constant for the entire shader program.

#### Attributes

TODO

## Buffers

Buffers are objects that store data in the GPU memory.

A complex 3D object normally is represented by a mesh which is made of a set of triangles. Each triangle is made of 3 vertices. Each vertex has a position, a normal, and a color.

If we have too many repeated vertices, we can use the `BufferAttribute` to store the vertices in a more efficient way using indices.

## Materials

Materials are objects that store the properties of the surface of the 3D object. They are used to define the color of the object, the texture, the shininess, etc.

### Light

Light is a property of the material that defines how the material reacts to light.

The Phong lighting model is a popular model that defines the light of a material.

### Textures

Textures are images that are used to color the surface of the 3D objects. We use the `uv` coordinates to map the texture to the surface of the 3D object.

The `uv` coordinates are a pair of numbers (x, y) that range from 0 to 1. The `u` coordinate is the x coordinate and the `v` coordinate is the y coordinate.

The work of the fragment shader is to take the `uv` coordinates of each pixel of the triangle and sample the color of the texture at that position.

### Shadow

TODO

## Reflection

TODO

## Refraction

TODO

## 3D Transformations

We can apply transformations to the 3D object using matrices. The `modelView` matrix is the matrix that transforms the vertices of the 3D object to the world space.

It is a combination of the `model` matrix and the `view` matrix. Every time we render the scene, we need to multiply each visible vertex of the 3D object by the `modelView` matrix. Note the work 'visible', more about this when we talk about the clipping.

The `model` matrix is the collection of all the transformations applied to the 3D object like translation, rotation, and scaling.

The `view` matrix is the camera matrix, often we build it using the `lookAt` function.

## Architecture

We have multiple objects that we need to organize in the codebase. Let's go over the main ones:

### Scene

The scene is the collection of all the 3D objects that we want to render.

Normally it will hold the objects, the camera, and the lights.

### Object

Each object will hold the geometry, the material, and the transformation.

### Camera

We can add the camera to the scene to be able to walk around the 3D scene.

Often we want to use the lookAt function to build the camera matrix.

## Clipping

To avoid wasting processing power rendering objects that are not visible, like behind the camera or facing away from the camera, we can use the clipping.

A simple climping technique is to use the normal of the face to check if it is facing the camera or not.

Another technique is to build the frustum and check if the object is inside it. The frustum is a pyramid of 6 planes that define the visible area of the camera.

## The Draw Call

The most important function of the WebGL context is the draw call that will trigger the rendering of the scene in the GPU.

A tipical concern is to keep the number of draw calls to a minimum. Each draw means running the shaders and setting the uniforms.

## The Pipeline

The pipeline is the sequence of steps that the GPU follows to render the scene.
