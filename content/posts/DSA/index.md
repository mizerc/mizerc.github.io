---
date: "2025-05-21"
draft: false
title: "DSA"
tag: ["dsa"]
---

# Introduction

DSA stands for Data Structures and Algorithms.

# Linear Containers

A linear container is a type of data structure where elements are arranged in a linear order, which each element has a unique predecessor and successor, except the first and last items.

We can use the term `List` to refer the interface that define the operations that can be performed on it.
And let the term like `Array`, `Queue`, `Linked List`, etc. to refer to the specific implementation of the `List` interface.
Each implementation has its own advantages and disadvantages.

About memory layout, each element could be sequentially layed in memory (contiguous memory allocation like in `Array`) or not contiguous (like in `Linked List`).
Having a contiguous memory allocation allows O(1) access time to elements using address arithmetic.
The downside is that the size of the container is fixed, requiring a resize operation if the container is full.
Which can be amortized to O(1) if the resize operation is done in a factor of 2 (twice the current size).

Linked list allow us to grow the container without the need to resize the underlying array.
Each new element is allocated in the heap memory and linked to the next/previous element using a pointer.
A linked list can be single or double linked.
It also can contain a reference to the first (head) and last element (tail).

Another structures like `Queue` and `Stack` are special cases of `List`.
They have constraints on the operations/behavior that can be performed on them.
For example, a Stack implements the LIFO (Last In First Out) policy, and often expose the `push` and `pop` operations where the `push` operation adds an element to the top of the stack and the `pop` operation removes the top element from the stack, respecting the LIFO policy.

A Queue implements the FIFO (First In First Out) policy, and often expose the `enqueue` and `dequeue` operations where the `enqueue` operation adds an element to the back of the queue and the `dequeue` operation removes the front element from the queue, respecting the FIFO policy.

A `Deque` is a double ended queue, which allows the insertion and removal of elements from both ends.
It normally exposses methods like `push_front`, `push_back`, `pop_front`, and `pop_back`.

## Array

- Static Array (Fixed size)
- Dynamic Array (Growable)

## List

- Single Linked List
- Double Linked List
- Circular Linked List

## Queue

A queue is a linear container that follows the FIFO (First In First Out) policy.
If you insert 1, then 2, then 3, then dequeue, you will get 1, then 2, then 3.
The first element inserted is the first element to be removed.
The last element inserted is the last element to be removed.

A priority queue is a queue in which each element has a priority.
The element with the highest priority is the first element to be removed.
The element with the lowest priority is the last element to be removed.
A priority queue can be implemented using a binary heap or sorting an array by priority.

A circular queue is a queue in which the last element is connected to the first element.
You can stop inserting once you fill the queue.
Or keep inserting and overwriting the first elements.

## Stack

Implement the LIFO (Last In First Out) policy.
If you insert 1, then 2, then 3, then pop, you will get 3, then 2, then 1.
The first element inserted is the last element to be removed.
The last element inserted is the first element to be removed.

## Deque

# Nom-Linear Containers

Non-linear containers are data structures that do not follow a linear order, where each element can have multiple predecessors and successors.

## Trees

A `binary tree` is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child. It is a special case of a tree where each node has at most two children.
The root is the topmost node of the tree.
The leaves are the nodes that do not have any children.
The height of a tree is the number of edges on the longest path from the root to a leaf.
The depth of a node is the number of edges from the root to the node.

A `binary search tree` is a binary tree in which the value of each node's left child is less than the node's value, and the value of each node's right child is greater than the node's value.
A balanced binary tree offer O(log n) for the insert, delete, and search operation.

Oftern we want to keep the tree balanced, so that the height of the tree is minimized.
This avoid the worst case scenario of O(n) for the search operation like having a tree with only one branch.

![unbalenced-tree](./images/unbalenced-tree.png#center)

We can keep the tree balanced by rebalancing the tree after each insertion or deletion.
Some of the algorithms to keep the tree balanced are: AVL Tree, Red-Black Tree.

Implementations:

- Binary Tree
- Binary Search Tree
- AVL Tree
- Red-Black Tree
- B-Tree
- B+Tree
- Trie

## Graphs

A Graph is a more general data structure that can be used to represent a variety of relationships between objects.
It is a collection of nodes (vertices) and edges (connections) between them.

A `directed graph` is a graph in which the edges have a direction, ie, A -> B, meaning that the edges can only be traversed in one direction.
A `undirected graph` is a graph in which the edges do not have a direction, ie, A - B, meaning that the edges can be traversed in both directions.

A `weighted graph` is a graph in which the edges have a weight/cost.
A `unweighted graph` is a graph in which the edges do not have a weight/cost.
Algortim like Dijkstra's Algorithm requires a weighted graph to compute the shortest path.

A `cyclic graph` is a graph in which there is a path that starts and ends at the same node.
A `acyclic graph` is a graph in which there is no path that starts and ends at the same node.

A `connected graph` is a graph in which there is a path between any two nodes.
A `disconnected graph` is a graph in which there is no path between any two nodes.

- Directed Graph
- Undirected Graph
- Weighted Graph
- Unweighted Graph

# Heap

- Min Heap
- Max Heap

## Hash-based

- Hash Map

## Sets

- Union Find
- Disjoint Set

# Algorithms

## Sorting

- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Heap Sort

### Merge Sort

Recursively split the array into two halves until we have arrays of size 1.
Then merge the two halves back together in a sorted manner.

## Searching

- Linear Search
- Binary Search

## Graph Algorithms

- Binary Search Tree
- Breadth-First Search (BFS)
- Depth-First Search (DFS)
- Dijkstra's Algorithm
- Kruskal's Algorithm
- Prim's Algorithm
- Graph Coloring
- Travelling Salesman Problem
- Hamiltonian Cycle
- Minimum Spanning Tree

# Strategies

- Brute Force
- Greedy
- Divide and Conquer
- Dynamic Programming

# Famous Problems

- Two Sum
- Longest Substring Without Repeating Characters
- Longest Palindromic Substring
- 2d Grid Paths