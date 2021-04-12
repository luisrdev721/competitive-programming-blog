---
title: Queue data structure
date: 1618201918979
description: How to works and implement a queue
---

A queue is an abstract data type that maintains the order in which elements were added to it, allowing the oldest elements to be removed from the front and new elements to be added to the rear. This is called a First-In-First-Out (FIFO) data structure because the first element added to the queue (i.e., the one that has been waiting the longest) is always the first one to be removed.

![Queue data structure](https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/1200px-Data_Queue.svg.png)

## Basic operations
A basic queue has the following operations:

- Enqueue (push): add a new element to the end of the queue.
- Dequeue (pop): remove the element from the front of the queue and return it.

### Aditional but useful operations

- Front: return the value of the front element if exist.
- Back: return the value of the back element if exist.
- Size: return the length of the queue, in other words number of elements in the queue.