---
date: "2025-07-08"
title: "Rasterizer"
tags: ["computergraphics"]
draft: false
---

# Introduction

Computer graphics is one of my favorite topics in computer science.
Here I will try to document a bit of the math and algorithms necessary to build a simple engine that can render 3d models on the screen.

The two main methods to create images from 3d geometry are rasterization and ray tracing.
On this post I will focus on the rasterization method.

<!-- If you are interested in ray tracing, you can check [this post](). -->

# Vector

We normally use a three dimensional vector to represent a point in space.
It has three components: x, y, and z.
Each component is a float number.
You can use single precision (32 bits) or double precision (64 bits) to represent the vector.

Using math notation, we can represent a vector as:

$$
\begin{bmatrix}
x \\\
y \\\
z
\end{bmatrix}
$$

# Scene

We can think of a scene as a collection of models, lights, and cameras.
It is the data structure that holds all the information necessary to render the scene.

## Model

We can call a model the collection of 3d points defined in local space that is built using a software like Blender.

#### Mesh

We group each three points to form a face/triangle.
And we group faces into a entity called mesh.
Any 3d object can be represented by a collection of triangles called mesh, from a simple cube to a complex model like a human body.

#### Reading a model from a file

Softwares like Blender can export the model in a file format like OBJ.
It can be a text file that you can open with a text editor to see the vertices and faces.
There are also binary formats like FBX that can include more data like textures, materials, and animations.

If your file is using the same 3d point multiple times, it may be benefical using the idea of indices.
The indices are a list of numbers that point to a resubable vertex.
This helps to reduce the size of the file and to avoid rewritting the same vertex multiple times.

Besides indices and vertices, a 3D model file can also include vertex normals, face normals, texture coordinates, and transformations such as translation, rotation, and scaling.

## Camera

The camera is the point of view from which we are looking at the scene.
It is defined by a position, a look at point, and an up vector.
We can have multiple cameras in the scene, each one with its own position, look at point, and up vector.

# Transformations

We can use matrices as a well defined structure to do transformations.
The main matrices are model, view, and projection.

The model matrix is the collection of all the transformations applied to the 3D object like translation, rotation, and scaling.
The order is important, we first apply the translation, then the rotation, and finally the scaling.

## Model Matrix

Model Matrix transforms from Local Space to World Space.

### Translation

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

For example, the new prime elements will contain the following:

- x' = x + tx
- y' = y + ty
- z' = z + tz
- w' = w = 1

Note that we use homogeneous coordinates to be able to do the translation using matrices.
The w component is 1 and still 1 after the translation.

### Scaling

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
\mathrel{=}
\begin{bmatrix}
x + s_x \\\
y + s_y \\\
z + s_z \\\
w
\end{bmatrix}
$$

- x' = sx \* x
- y' = sy \* y
- z' = sz \* z
- w' = w = 1

### Rotation

## View

View Matrix transform from Model Space to View Space.

If we keep the camera at the origin, looking at the negative z-axis, the view matrix is the identity matrix.
However, if we want to move or rotate the camera around the world, we need to use the view matrix to transform the world space to the camera space.

We can model the camera with a position, a look at point, and an up vector.
The three properties are defined with vectors.

### Projection

Projection is the mathematical transformation that maps 3D coordinates to a 2D plane (the screen), simulating the perspective or orthographic view of a camera.

### Perspective

This projection simulates the human eye's perspective, where objects appear smaller as they are further away.

### Orthographic

This propjection preserves size regardless of depth, parallel lines stay parallel.

## Viewport

The last transformation is to scale the normalized coordinates (x,y) of each vertex to the screen space.
The screen space x component will be x times the canvas width.

# Optimization

To avoid wasting computation rendering objects that are not visible, we can use the culling and clipping techniques.
This is valid because normally rasterization of the pixels of a triangle is way more costly than just checking the 3 vertexes of the face.

### Frustum

The camera frustum is the volume that contains the visible objects from the camera point of view.
It is a volume defined by 6 planes: top, bottom, left, right, near and far.

### Culling

Culling is the process of removing _entire_ objects that are not visible from the scene.

#### Outside Frustum Culling

If a surface/triangle is outside the frustum, we can remove it.
This means a surface behind the camera (behind the near plane).

#### Backface Culling

Another culling technique is to check if the face is facing away from the camera.
We can compute the normal of the face and check if it is facing away from the camera.
To compute the normal of the face, we can use the right hand wind rule.
Using math, we can compute the normal of the face by using the cross product of the two edges of the face.

### Clipping

When we are lucky, we can just remove the entire triagle from the pipeline if it is outside the field of view.
However, sometimes the triangle is right on the barrier that divide what we want to render and what we don't want to render.
When this happens, we could just remove the object, but the right way is to clip the triangle.

Clipping is the process of removing parts of objects, often a triangle, that are not visible from the camera.
Clipping needs more advanced math to remove or add vertices of the sliced triangle.

### Rendering Order

Using a technique to render surfaces in the correct order can fix some of the problems where we render a back surface over the front surface.

#### Painter Algorithm

The painter algorithm is just a way of sorting each surface by the averange z value of the vertexes.
Assuming a triangle defined by 3 vertexes v1, v2 and v3, the triangle average z is the `(v1.z + v2.z + v3.z) / 3`.

#### Z-Buffer

The Z-Buffer, also called Depth buffer, is a additional buffer that contains a number for each pixel of the canvas.
The number is specifically the front-most z value of each vertex (x,y,z) of the surface.
So as we render, if the buffer already contains a z value that is smaller than the current, we ignore it to prevent rendering on top of a existing surface.

# Rasterization

Once we finish to transform and cull the objects, we can start to rasterize the objects.
Rasterization is the stage in the graphics pipeline where projected 2D shapes (from 3D scene) are converted into pixel data.

## Line Rasterization

The simplest shape to rasterize is a line.
We can use the DDA algorithm to rasterize a line.

## Triangle Rasterization

The next shape to rasterize is a triangle.
We can use the scanline algorithm to rasterize a triangle.

# Normals

## Face Normal

The face normal can be computed from the winding of the face vertexes using right hand rule.

## Vertex Normal

The vertex normal can be computed from the averange of the normal of each face shared by the vertex.

{{< figure src="./vertex-normal.png#center"width="70%">}}

# Shading

How surface respond to light.

Diffuse reflection of light caused by irregular surface.
Light rays are reflected to all directions.
Sunrise and sunset have a difuse behavior.
A big area lamp creates a difuse light.

Specular reflection is caused by a smooth surface.
A shine metal surface has a high specular reflection than rubber surface.
A concentrated highlight spot on a metallic surface.

## Flat Shading

The entire face is painted with one single solid color.

## Gouraud Shading

Each vertex of the triangle has a color.
We interpolate the color using barycenter coordinates as we paint the triangle.
Each pixel receives a unique color from the interpolation.
Create smooth surfaces.

## Phong Shading

Interpolate the normal across the surface of the triangle.
Same reasoning used to interpolate color in Gouraud, but now applied to the normals of each vertex.

## Blinn-Phong

# Texture

## Normal Mapping

# Shadow

Computing shadow in a rasterizer is not straight forward as in a raytracer.
We don't want to compute rays from the light to the objects.

## Stencil Buffer

## Shadow Mapping

Shadow Mapping is another technique to create shadows in a rasterizer.