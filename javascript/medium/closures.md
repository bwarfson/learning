A basic closure

[Link to Post](https://itnext.io/a-beginners-guide-to-understanding-javascript-closures-b5eb57fdbeb4)

```javascript
function outside()
{
    let x = 2;
    return function inside(y) 
    {
        return x * y;
    }
}
```

A closure is a function inside another function that: 
1) Uses variables from its parent scope and
2) is exposed to the outside world

Calling outside() gives us inside's definition.
It's the same output you get when you forget the () when invoking a function.

```javascript
outside()             
//  f inside(y) {     
//    return x + y 
//  }
```

So now add another () 
```javascript
outside()(4)
// 8
```
Since outside returns a function definition, we simply call it.

The double () looks weird so you will see a lot of this:

```javascript
let myClosure = outside();
myClosure(5);
//10
myClosure(5) === outside()(5)
// true 
```

The variable x can't be touched by any other part of the program. 

"This is the power of closures: it lets us create values that can’t be altered or accessed by any functions other than the closure itself."

- x is defined in the parent scope of inside
- inside can still access x and multiply it by y
- the only thing exposed to the global scope is the definition of inside, not the variable x
- in our program, the only way we can interact with x is by using the closure

A code example which doesn't use a closure:

```javascript
let x = 2 // global scope
function inside(y) {
  return x * y  // reaching up to global scope
}
inside(4)
// 8
// but we can change the 'x'
// variable in the global scope and 
// alter inside()'s behavior
x = 5
inside(4)
// 20
```

Protect x with a closure:

```javascript
function outside() {          
  let x = 2                    
  return function inside(y) {  
    return x * y               
  }                    
}
let myClosure = outside()
myClosure(5)                   
// 10
x = 4
// this is not the same 'x' variable: 

myClosure(5)
// 10      // notice how it's still 10 
```

Self-executing (self-invoking) functions

```javascript
(function () {
  // body
})();
```

The anonymous function above will be invoked right after it has been defined. The benefit of self-invoking functions is that they enable us to execute code once without cluttering the global namespace (without declaring any globals). For example, if we have a web page in which we want to attach event listeners to DOM elements and other initialization work, self-invoking functions would be the best tool for the job!

You can also pass parameters to the self-invoking functions. It is a commonly used practice to pass references to global objects:

```javascript
(function (w, d, $) {
  // body
}(window, document, jQuery));
```

Usually the module pattern is implemented using self-invoking functions. In the module pattern, we keep the reference to the function’s returned object. In such case we consider the return value as the public API of the module:

```javascript
var module = (function () {
  // private
  return {
    // public
  };
}());
```