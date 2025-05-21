---
date: '2025-05-11'
draft: false
title: 'C Language'
tags: ['programming']
---

Random notes about the C language.

## Extern

Use `extern` to declare something without defining it.

Tells the compiler not to allocate storage, because the variable/function is defined elsewhere (in another file or later in the same file), ie, “this variable or function is defined elsewhere.”

#### Extern with variables

```
extern int global_var;	// declared here, defined in another file

// file1.c
int global_var = 42;

// file2.c
extern int global_var;  // declaration, no memory allocated
```

#### Extern with functions

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

## Reference

[1] K&R 2nd Edition