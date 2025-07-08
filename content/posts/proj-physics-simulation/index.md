---
title: Physics Simulation
date: 2025-06-30
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

Numerical integration methods are used to update positions and velocities over discrete time, since analytical solutions are not practical.
Usually it is a trade off between speed vs. accuracy vs. stability

### Explicit Euler method

```math
v_{n+1} = v_n + a_n * dt
x_{n+1} = x_n + v_n * dt
```

### Semi-Implicit Euler (a.k.a. Symplectic Euler)

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
### Runge-Kutta method (RK4)

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

Once we have detected a collision, we need to resolve it.
One first step could be just translating the a minimum distance between the bodies to avoid penetration.
Another step could be to compute the impulse of the collision to apply a force to the bodies to avoid penetration.

- Penetration-based
- Impulse-based

## Jacobian

The Jacobian is a matrix that is used to compute the impulse of the collision.
It is a matrix of partial derivatives of the constraint function with respect to the position and velocity of the bodies.

- Jacobian matrix
- Jacobian determinant
- Jacobian transpose

## Constraints

Having the flexibility to insert different constraints to the simulation allow us to simulate more complex physics.
For example, we can use a distance constraint to keep two bodies at a fixed distance from each other.
Or we can use an angle constraint to keep two bodies at a fixed angle from each other.
Or we can use a pin constraint to keep a body at a fixed position.

- Distance constraint
- Angle constraint
- Pin constraint
- Motor constraint

## Integration methods

Because we are using a discrete time step, we need to use an integration method to compute the new state.
And we assume that the acceleration is constant over the time step.
Some methods are more accurate and stable than others.
The unstability comes from the fact that the acceleration is not constant over the time step.
For example, if we use the explicit Euler method, the error will accumulate over time.
The Runge-Kutta method is more accurate than the explicit Euler method, but it is more complex to implement.

- Explicit Euler
- Forward Euler
- Runge-Kutta
- Verlet integration

## References

- [Box2d](https://box2d.org/)
- [Matter.js](https://brm.io/matter-js/)
- [Physics for Game Developers](https://www.amazon.com/Physics-Game-Developers-Second-Edition/dp/1138013256)
- [Game Physics](https://www.amazon.com/Game-Physics-Second-David-Hunt/dp/0123747319)
- [Game Physics Cookbook](https://www.amazon.com/Game-Physics-Cookbook-David-Hunt/dp/0123747327)
