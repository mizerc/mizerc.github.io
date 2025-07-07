# Introduction

In this little project, the goal is to use a simple microcontroller to draw a 3d model on a screen.

# Optimization

- If we have more than 1 core, we can keep one doing rasterization and the other one doing SPI communication with the screen.
- Instead of erasing the entire screen each frame, we can erase only the lines of the previous frame (if using wire-frame mode).