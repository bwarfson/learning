Null coalescing. The null coalescing operator "??" uses two question marks. With it you can use a custom value for a null reference variable. It simplifies null tests.

The null coalescing operator is useful inside properties. Often, a property that returns an object (such as a string) may be null. This null value complicates things.

Tip:
It is sometimes clearer to have code inside the property that handles null values and returns a custom value in that case.

```c#
using System;

class Program
{
    static string _name;

    /// <summary>
    /// Property with custom value when null.
    /// </summary>
    static string Name
    {
        get
        {
            return _name ?? "Default";
        }
        set
        {
            _name = value;
        }
    }

    static void Main()
    {
        Console.WriteLine(Name);
        Name = "Perls";
        Console.WriteLine(Name);
        Name = null;
        Console.WriteLine(Name);
    }
}

Output

Default
Perls
Default
```

Above, the Name property will never return null. If the "_name" is null, it return the string "Default". Calling code does not need to check against null.
And:
You can always use an expression like Name.Length, because Name will never return null. NullReferenceException is never thrown.