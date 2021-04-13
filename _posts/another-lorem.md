---
title: Anoter lorem post
date: 2021-04-11
description: Description here
author: Luis Resendiz
github: https://github.com/luisrdev721
---

### Lorem h3 subtitle

Maecenas dictum tortor eu lectus auctor pharetra. Proin tincidunt dolor blandit ante interdum suscipit. Donec efficitur mauris vel semper volutpat. Integer semper orci vitae nisl cursus, at interdum libero malesuada. Quisque non congue libero. Aenean rhoncus, nisl eget fermentum fermentum, nisi risus pharetra lectus, sed suscipit magna sem vitae felis. Ut molestie nisi ac leo condimentum scelerisque. 

- This is a list
- Writen in md
- or markdown

```cpp
#include <iostream>
using namespace std;

template <typename T>
using pointer = T*;

template <typename T>
struct node {
  T value;
  pointer<node> next;

  node(T _value) : value {_value}, next {nullptr} {}
};

template <typename T>
class queue {
  size_t size;
  pointer<node<T>> front, back;

 public:
  queue() : front {nullptr}, back {nullptr}, size {0} {}

  auto push(T&& value) {
    auto* node = new node {forward(value)};
    if (empty()) { front = back = node; } 
    else { back->next = node, back = node; }

    ++size;
  }

  auto pop() -> void {
    if (size == 0) { return; }
    if (size == 1) { back = nullptr; }

    auto* to_delete = front;

    front = front->next;
    delete to_delete;
    --size;
  }

  auto empty() -> bool { return front == nullptr; };
  auto front() -> T { return front->value; };
  auto back() -> T { return front->value; };
  auto size() -> size_t { return size; };

  auto display() -> void {
    for (auto i = front; i != nullptr; i = i->next) { cout << i->value << "->"; }
    cout << endl;
  };
};

auto main() -> int {
  auto q = queue<int> {};
  return 0;
}
```

### Lorem h3 subtitle

Maecenas dictum tortor eu lectus auctor pharetra. Proin tincidunt dolor blandit ante interdum suscipit. Donec efficitur mauris vel semper volutpat. Integer semper orci vitae nisl cursus, at interdum libero malesuada. Quisque non congue libero. Aenean rhoncus, nisl eget fermentum fermentum, nisi risus pharetra lectus, sed suscipit magna sem vitae felis. Ut molestie nisi ac leo condimentum scelerisque. 

- This is a list
- Writen in md
- or markdown

```cpp
auto foo() -> bool {
    auto bar = true;
    return bar && bar;`
}
```