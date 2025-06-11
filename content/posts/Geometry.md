---
title: Geometry
date: 2025-05-24
tags: ["math"]
---

Small collection of 2D geometry functions that I use in my projects.
I will be using TypeScript syntax for the examples.

## Coordinates

Using the HTML5 canvas coordinate system.
The origin is (0, 0) at the top-left corner of the canvas.
The x-axis goes from left to right and the y-axis goes from top to bottom.

## Shapes

A point is a location in 2D space.

```ts
type Point = {
  x: number;
  y: number;
};
```

A circle is a shape with a center and a radius.

```ts
type Circle = {
  center: Point;
  radius: number;
};
```

A line is a shape with a start and end point.

```ts
type Line = {
  start: Point;
  end: Point;
};
```

A rectangle is a shape with a start and end point.
The start point is the top-left corner and the end point is the bottom-right corner.
The width and height can be calculated from the start and end points like `width = end.x - start.x` and `height = end.y - start.y`.

```ts
type Rectangle = {
  start: Point;
  end: Point;
};
```

## Checking

### IsPointInsideCircle

Function to check if a point is inside a circle.

```ts
function isPointOverCircle(point: Point, circle: Circle) {
  const distance = Math.sqrt(
    (point.x - circle.x) ** 2 + (point.y - circle.y) ** 2
  );
  return distance <= circle.radius;
}
```

### IsPointInsideRectangle

```ts
function isPointOverRectangle(point: Point, rectangle: Rectangle) {
  return (
    point.x >= rectangle.start.x &&
    point.x <= rectangle.end.x &&
    point.y >= rectangle.start.y &&
    point.y <= rectangle.end.y
  );
}
```

## IsPointOnLine

```ts
function isPointOnLine(point: Point, line: Line) {
  const distance = Math.sqrt(
    (point.x - line.start.x) ** 2 + (point.y - line.start.y) ** 2
  );
}
```

## IsCircleCollidingWithCircle

```ts
function isCircleCollidingWithCircle(circle1: Circle, circle2: Circle) {
  const distance = Math.sqrt(
    (circle1.center.x - circle2.center.x) ** 2 +
      (circle1.center.y - circle2.center.y) ** 2
  );
}
```

## IsRectCollidingWithRect


