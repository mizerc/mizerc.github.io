# Introduction

In this little project, the goal is to use a simple microcontroller to rasterize a 3d model on a screen.

# Attemp #1 - Arduino Nano

First I want to try using a simple Arduino nano to see how it performs.

# Optimizations

- If we have more than 1 core, we can keep one doing rasterization and the other one doing SPI communication with the screen.
- Instead of erasing the entire screen each frame, we can erase only the lines of the previous frame (if using wire-frame mode).