---
date: "2025-05-11"
draft: false
title: "C Language"
tags: ["programming"]
---

Random notes about the C language.

# Entry Point

The `main` function is the entry point of the program. It is the first function that is called when the program starts.

```c
int main(void)
{
	return 0;
}
```

# Compilation and Linking

The C compiler (cc) compiles each source code into object files.

```
cc -c file1.c file2.c
```

The `-c` option tells the compiler to compile only and not to link.

The object files are then linked together to form an executable.

```
cc file1.o file2.o -o myprog
```

The `-o` option tells the linker to output the executable as `myprog`.

# Modules

Modules are a way to organize code into separate files. Each module has a header file and a source file. We could have one header file for multiple source files as well.

We can include a module in another module using `#include "header_file.h"`.

The preprocessor will replace the `#include` directive with the contents of the header file. This happens before the compiler compiles the code.

# Storage Classes and Scopes

Storage classes define the scope (visibility) and life-time of variables and/or functions within a C program.

There are four storage classes:

- `auto`
- `static`
- `extern`
- `register`

## Extern

Use `extern` to declare something without defining it.

Tells the compiler not to allocate storage, because the variable/function is defined elsewhere (in another file or later in the same file), ie, “this variable or function is defined elsewhere.”

### Extern with variables

```
extern int global_var;	// declared here, defined in another file

// file1.c
int global_var = 42;

// file2.c
extern int global_var;  // declaration, no memory allocated
```

### Extern with functions

In C (including C99), function declarations and definitions at file scope are extern by default.

## Static

Use `static` to change the linkage or storage duration, depending on where it is used.

"A global variable or function can be accessed by name from outside the file in which it is declared, if and only if it is not declared static." [1]

### Static in file scope (global)

Means internal linkage: symbol is only visible in this file.

```
static int counter = 0;	// only visible within this .c file
```

### Static in functions

A static function is only callable from within the file where it's defined.

```
static int helper(int x)
{
	 // only callable in this file
	return x * 2;
}
```

That function has internal linkage — it’s not visible outside this file.

### Static block scope

Means static storage duration: variable is allocated once, keeps its value between calls.

```
void fn()
{
	static int count = 0;  // keeps value between calls
	count++;
}
```

# Parameter vs Argument

A parameter is the variable in the method definition. It is the variable. It is the placeholder for the data that you pass into the method. It is the space in memory that is reserved for the data that you pass into the method.

When a method is called, the argument is the actual data that you pass into the method parameters. It is the value.

```c
void fn(char* thisIsTheParameter)
{
	return thisIsTheParameter;
}

fn("this string is the argument");
```

# Lvalue vs Rvalue

TODO

# Passing Functions to Functions

We can pass functions to other functions.

# Dynamic Array

Creating a dynamic array in C is a good challenge.
Being able to keep pushing new elements to the array without dealing with array size limit, resize, desalocation.

- init
- push
- size
- free

# Reference

[1] K&R 2nd Edition
