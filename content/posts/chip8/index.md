---
date: "2025-05-21"
draft: true
title: "Chip8"
tags: ["chip8"]
---

Random notes about the Chip8 virtual machine.

- Chip8 Virtual machine emulator
- IO (keyboard, screen, speaker, etc)
- Roms (binary)
- Assembler (src1 => rom/binary)
- Source code 1 (src1)
- Compiler (src2 => src1)
- Source code 2 (src2)

# Roms

Roms are the programs that the Chip8 can execute.
Each instruction is 2 bytes.
The 2 bytes encode the opcode and the operands.

# Assembler

The assembler is a program that translates the assembly language into the binary language (roms) that the Chip8 can execute.

# Compiler

TODO.

The compiler is a program that translates the high level language into the assembly language.

This is a separated project.

# Virtual Machine

TODO

## Memory Layout

## Chip8 instructions