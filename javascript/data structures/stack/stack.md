## Stack

Arguably the most important Stack in JavaScript is the call stack where we push in the scope of a function whenever we execute it.

Programmatically, it’s just an array with two principled operations: push and pop. Push adds elements to the top of the array, while Pop removes them from the same location. In other words, Stacks follow the “Last In, First Out” protocol (LIFO).

```javascript
class Stack
{
    constructor(...items)
    {
        this.reverse = false;
        this.stack = [...items];
    }

    push(...items)
    {
        return this.reverse ? this.stack.unshift(...items) : this.stack.push(...items);
    }

    pop()
    {
        return this.reverse ? this.stack.shift() : this.stack.pop();
    }
}
```