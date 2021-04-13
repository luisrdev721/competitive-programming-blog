---
title: Queue data structure
date: 2021-04-09
description: How to works and implement a queue
author: Luis Resendiz
github: https://github.com/luisrdev721
---

A queue is an abstract data type that maintains the order in which elements were added to it, allowing the oldest elements to be removed from the front and new elements to be added to the rear. This is called a *First-In-First-Out* (FIFO) data structure because the first element added to the queue (i.e., the one that has been waiting the longest) is always the first one to be removed.

![Queue data structure](https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/1200px-Data_Queue.svg.png)

## Basic operations
A basic queue has the following operations:

- **Enqueue (push)**: add a new element to the end of the queue.
- **Dequeue (pop)**: remove the element from the front of the queue and return it.

### Aditional but useful operations

- **Front**: return the value of the front element if exist.
- **Back**: return the value of the back element if exist.
- **Size**: return the length of the queue, in other words number of elements in the queue.

## Implementation

#### Node class
```cpp
template <typename T>
using pointer = T*;

template <typename T>
struct node {
  T value;
  pointer<node> next;

  node(T _value) : value {_value}, next {nullptr} {}
};
```

#### Queue class
```cpp
template <typename T>
class queue {
  size_t size;
  pointer<node<T>> front, back;
 public:
  queue() : front {nullptr}, back {nullptr}, size {0} {}
};
```

#### Push operation
```cpp
auto push(T&& value) {
    auto* node = new node {forward(value)};
    if (empty()) { front = back = node; } 
    else { back->next = node, back = node; }

    ++size;
}
```

#### Pop operation
```cpp
auto pop() -> void {
    if (size == 0) { return; }
    if (size == 1) { back = nullptr; }

    auto* to_delete = front;

    front = front->next;
    delete to_delete;
    --size;
}
```

#### Empty operation
```cpp
auto empty() -> bool { return front == nullptr; };
```

#### Front operation
```cpp
auto front() -> T { return front->value; };
```

#### Back operation
```cpp
auto back() -> T { return front->value; };
```

#### Size operation
```cpp
auto size() -> size_t { return size; };
```