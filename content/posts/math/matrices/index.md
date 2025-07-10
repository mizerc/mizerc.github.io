---
date: '2025-05-22'
draft: false
title: 'Matrices'
tags: ['math']
---
Matrices are structures that organize numbers into a rectangular array, allowing operations to be performed on groups of values simultaneously.

We can represent linear transformatinos using matrices.

They are a foundational concept in linear algebra and are wide used in computer graphics where they are used for transformations, projections, and modeling spatial relationships.

# Properties

## Commutative

The commutative property means that changing the **order of operands** does not affect the result.
In matrix algebra, not all operations are commutative, unlike scalar arithmetic.

## Associative

The associative property in matrix operations refers to how **grouping of operands** does not affect the result, as long as the order is preserved.

This property applies to both matrix addition and matrix multiplication, but not all operations in general.

# Operations

## Matrix Addition

Matrix addition is a binary operation where two matrices of the same dimensions are added element-wise.

For two matrices $\mathbf{A}$ and $\mathbf{B}$, both of size $m \times n$, their sum $\mathbf{C} = \mathbf{A} + \mathbf{B}$ is a matrix where each element $c_{ij} = a_{ij} + b_{ij}$.

The operation is commutative and associative, meaning the order of addition doesn't affect the result. 

Matrix addition is only defined when both operands have the exact same shape.

$$
\begin{bmatrix}
a_{11} & a_{12} \\\
a_{21} & a_{22}
\end{bmatrix}
\mathrel{+}
\begin{bmatrix}
b_{11} & b_{12} \\\
b_{21} & b_{22}
\end{bmatrix}
\mathrel{=}
\begin{bmatrix}
a_{11} + b_{11} & a_{12} + b_{12} \\\
a_{21} + b_{21} & a_{22} + b_{22}
\end{bmatrix}
$$


## Matrix Subtraction

Matrix subtraction is the element-wise operation of subtracting one matrix from another. 
Matrix subtraction is not commutative.

$$
\mathbf{A} - \mathbf{B} \neq \mathbf{B} - \mathbf{A}
$$

However, it is associative when used carefully with parentheses:

$$
(\mathbf{A} - \mathbf{B}) - \mathbf{C} = \mathbf{A} - (\mathbf{B} + \mathbf{C})
$$

Matrix subtraction can be computed as follow:

$$
\begin{bmatrix}
a_{11} & a_{12} \\\
a_{21} & a_{22}
\end{bmatrix}
\mathrel{-}
\begin{bmatrix}
b_{11} & b_{12} \\\
b_{21} & b_{22}
\end{bmatrix}
\mathrel{=}
\begin{bmatrix}
a_{11} - b_{11} & a_{12} - b_{12} \\\
a_{21} - b_{21} & a_{22} - b_{22}
\end{bmatrix}
$$

## Matrix Multiplication


## Matrix-Vector Multiplication

{{< figure src="./2x2-mul.png#center" width="70%" caption="Figure: Matrix-Vector Multiplication" class="border">}}

## Hadamard Product

The Hadamard product is the element-wise multiplication.

## Identity Matrix

## Inverse Matrix

## Transpose Matrix

# Memory Layout

When implementing matrices in the computer, we have two ways to layout the values into memory because the computer memory is linear.

## Row-Major Order

You store the first row, then the second, then the third and so on.
Ie, the consecutive elements of a **row** reside next to each other in the contiguous memory.

{{< figure src="./row-major.png#center" width="70%">}}

```
rowmajormatrix[row][col] = addr[rowsize * row + col]
rowmajormatrix[1][2] = addr[3 * 1 + 2] = addr[5] = r2c2
```

## Col-Major Order

You store the first col, then the second, then the third and so on.

{{< figure src="./col-major.png#center" width="70%">}}

