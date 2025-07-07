---
date: "2025-06-01"
title: "Rasterizer"
tags: ["computergraphics"]
draft: true
---

# Introduction

Computer graphics is one of my favorite topics in computer science.
I always wanted to understand how computer graphics works under the hood.
The algorithms and math necessary to create images from 3d geometry.

The two main methods to create images from 3d geometry are rasterization and ray tracing.
Here I want to explore the rasterization method.

# Transformations

We can use matrices as a well defined structure to do transformations.
The main matrices are model, view, and projection.

The model matrix is the collection of all the transformations applied to the 3D object like translation, rotation, and scaling.
The order is important, we first apply the translation, then the rotation, and finally the scaling.

## Translation

We can translate `x` by `t_x` and save the result in `x'` by doing the following:

$$
x' \mathrel{=} x + t_x
$$

Using matrices, we can translate a 3d point by multiplying it by the translation matrix:

$$
\begin{bmatrix}
x' \\\
y' \\\
z' \\\
w'
\end{bmatrix}
\mathrel{=}
\begin{bmatrix}
1 & 0 & 0 & t_x \\\
0 & 1 & 0 & t_y \\\
0 & 0 & 1 & t_z \\\
0 & 0 & 0 & 1
\end{bmatrix}
\cdot
\begin{bmatrix}
x \\\
y \\\
z \\\
1
\end{bmatrix}
$$

Note that we use homogeneous coordinates to be able to do the translation using matrices.
The w component is 1 and still 1 after the translation.

## Scaling

We can scale `x` by `s_x` and save the result in `x'` by doing the following:

$$
x' \mathrel{=} x \cdot s_x
$$

We don't need homogeneous coordinates for the scaling.
But to keep the same structure as the translation matrix, we can write the scaling matrix as:

$$
\begin{bmatrix}
x' \\\
y' \\\
z' \\\
w'
\end{bmatrix}
\mathrel{=}
\begin{bmatrix}
s_x & 0 & 0 & 0 \\\
0 & s_y & 0 & 0 \\\
0 & 0 & s_z & 0 \\\
0 & 0 & 0 & 1
\end{bmatrix}
\cdot
\begin{bmatrix}
x \\\
y \\\
z \\\
w
\end{bmatrix}
$$

## View

If we keep the camera at the origin, looking at the negative z-axis, the view matrix is the identity matrix.
However, if we want to move or rotate the camera around the world, we need to use the view matrix to transform the world space to the camera space.

We can model the camera with a position, a look at point, and an up vector.
The three properties are defined with vectors.

## Projection

Projection is the mathematical transformation that maps 3D coordinates to a 2D plane (the screen), simulating the perspective or orthographic view of a camera.

### Perspective

This projection simulates the human eye's perspective, where objects appear smaller as they are further away.

### Orthographic

This proijection preserves size regardless of depth, parallel lines stay parallel.

# Culling & Clipping

To avoid rendering objects that are not visible, we can use the culling and clipping techniques.
Culling is the process of removing *entire* objects that are not visible from the scene.
Clipping is the process of removing parts of objects that are not visible from the camera.
Clipping needs more advanced math to remove or add vertices.

A way to do culling is to check if the object is behind the camera.

Another culling technique is to check if the face is facing away from the camera.
We can compute the normal of the face and check if it is facing away from the camera.
To compute the normal of the face, we can use the right hand wind rule.
Using math, we can compute the normal of the face by using the cross product of the two edges of the face.

# Rasterization

Once we finish to transform and cull the objects, we can start to rasterize the objects.
Rasterization is the stage in the graphics pipeline where projected 2D shapes (from 3D scene) are converted into pixel data.

## Line Rasterization

The simplest shape to rasterize is a line.
We can use the DDA algorithm to rasterize a line.

## Triangle Rasterization

The next shape to rasterize is a triangle.
We can use the scanline algorithm to rasterize a triangle.