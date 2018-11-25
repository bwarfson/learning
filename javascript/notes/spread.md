The spread syntax is simply three dots: ...

It allows an iterable to expand in places where 0+ arguments are expected.

Example without spread operator:

```javascript
var mid = [3, 4];
var arr = [1, 2, mid, 5, 6];

console.log(arr); // [1,2,[3,4],5,6]
```

We’ve ended up with an array within an array. That’s fine if that was the goal, but what if want only a single array with the values of 1 through 6?

The spread syntax allows the elements of our array to expand.

```javascript
var mid = [3, 4];
var arr = [1, 2, ...mid, 5, 6];

console.log(arr); // [1, 2, 3, 4, 5, 6]
```