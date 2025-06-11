---
title: Physics simulation
date: 2025-05-24
tags: ["physics"]
draft: true
---

Notes on physics simulation.

## Shape

- Point
- Circle
- Polygon
- Line

## Body

### Linear motion

- Pixel per meter ratio [px/m]
- Mass [kg]
- Position [m]
- Velocity [m/s]
- Acceleration [m/s^2]
- Force [Newton]

### Rotational motion

- Orientation [rad]
- Angular velocity [rad/s]
- Angular acceleration [rad/s^2]
- Torque [Newton-meter]
- Moment of inertia [kg-m^2]

## Force and Torque

### Planet gravity

Each update step, the body will receive a force from the planet gravity.
The magnitude of the force is computed by Newton's law of universal gravitation.
We can also apply a constant acceleration to each body to simulate the planet gravity.

### Gravity

Each two bodies will receive a force from the gravity between them.
The magnitude of the force is computed by Newton's law of universal gravitation.

```math
F = G * (m1 * m2) / r^2
```

## Integration

### Explicit Euler method

```math
v_{n+1} = v_n + a_n * dt
x_{n+1} = x_n + v_n * dt
```

### Forward Euler method

```math
Acceleration_{n+1} = (F_n / m)
Velocity_{n+1} = Velocity_n + Acceleration_{n+1} * dt
Position_{n+1} = Position_n + Velocity_{n+1} * dt
```

```math
Angular_acceleration_{n+1} = (T_n / I)
Angular_velocity_{n+1} = Angular_velocity_{n} + Angular_acceleration_{n+1} * dt
Orientation_{n+1} = Orientation_n + Angular_velocity_{n+1} * dt
```
### Runge-Kutta method

```math
Acceleration_{n+1} = (F_n / m)
Velocity_{n+1} = Velocity_n + Acceleration_{n+1} * dt
Position_{n+1} = Position_n + Velocity_{n+1} * dt
```

### Verlet integration

It emphasizes position and acceleration, often skipping explicit velocity updates or approximating them.
More accurate for energy conservation.
Time-reversible and symplectic (preserves phase-space volume).
Simulating physical systems with long-term stability needs, Verlet is often preferred over Euler variants.

## Collision detection

- Circle vs Circle
- Polygon vs Polygon
- Circle vs Polygon

## Collision resolution

- Penetration-based
- Impulse-based

## Jacobian

- Jacobian matrix
- Jacobian determinant
- Jacobian transpose

## Constraints

- Distance constraint
- Angle constraint
- Pin constraint
- Motor constraint

## References

- [Box2d](https://box2d.org/)
- [Matter.js](https://brm.io/matter-js/)
- [Physics for Game Developers](https://www.amazon.com/Physics-Game-Developers-Second-Edition/dp/1138013256)
- [Game Physics](https://www.amazon.com/Game-Physics-Second-David-Hunt/dp/0123747319)
- [Game Physics Cookbook](https://www.amazon.com/Game-Physics-Cookbook-David-Hunt/dp/0123747327)
