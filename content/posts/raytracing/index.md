---
date: '2025-05-19'
draft: false
title: 'Ray Tracing'
tags: ['graphics']
---

If you're into computer graphics, there's a chance you've come across the famous [ray tracing in one weekend](https://raytracing.github.io/books/RayTracingInOneWeekend.html).

### Algorithm

In a rough way, the overwall algorithm goes like this

```markdown
1. Create the world (aka scene)
2. Put the eye (aka camera) in the scene. It can be at origin and poiting towards +z axis for now.
3. Put the virtual canvas (aka viewport) in the scene, in front of the camera.
4. Compute the viewport_step_x as viewport_w / image_w
5. For each pixel of the canvas (aka image).  
    5.1. Create a ray from eye to viewport.  
    5.2. For each sphere in scene.  
       5.2.1. Check if ray hits using baskara, parametric equation, sphere equation.  
    5.3. Update loop variables
```