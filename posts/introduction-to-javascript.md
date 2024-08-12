---
title: 'Understanding JavaScript Closures'
date: '2024-08-10'
image: 'intro-js.avif'
excerpt: 'Learn the concept of closures in JavaScript, a powerful feature that allows functions to access variables from their lexical scope even after the function is executed.'
isFeatured: true
---

# Understanding JavaScript Closures

![Introduction to javascript](/images/posts/introduction-to-javascript.webp)

JavaScript closures are a fundamental concept that every JavaScript developer should understand. Closures allow a function to access variables from an outer function's scope even after the outer function has finished executing. This can be a powerful tool when used correctly.

## What is a Closure?

A **closure** is the combination of a function and the lexical environment within which that function was declared. In other words, closures give you access to an outer function's scope from an inner function.

### Example of a Closure

Let's take a look at an example:

```javascript
function outerFunction() {
    const outerVariable = 'I am from the outer function!';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: 'I am from the outer function!'
```

