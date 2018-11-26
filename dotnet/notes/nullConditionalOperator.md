Null-conditional. Let's examine the null-conditional operator. The Test() method here receives a string called "name." If name is null, the Length property will not be accessed.
However:
If name is not null, we check Length as expected. With this operator we reduce our if-statements to combine two logical checks.

```c#
using System;

class Program
{
    static void Test(string name)
    {
        // Use null-conditional operator.
        // ... If name is not null, check its Length property.
        if (name?.Length >= 3)
        {
            Console.WriteLine(true);
        }
    }

    static void Main()
    {
        Console.WriteLine(1);
        Test(null);
        Console.WriteLine(2);
        Test("cat"); // True.
        Test("x");
        Test("parrot"); // True.
    }
}

Output

1
2
True
True
```

Value types. You cannot use the null coalescing operator on value types such as int or char. But with nullable types, such as "int?" or "char?" you can use the "??" operator.
- Nullable Int
- Nullable Bool
- Nullable DateTime