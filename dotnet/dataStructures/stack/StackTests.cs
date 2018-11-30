using System;
using Xunit;
using System.Collections.Generic;
using System.Linq;

namespace stack
{
    public class Stack<T>
    {
        private List<T> stack = new List<T>();

        public bool Push(T stuff) 
        {
            this.stack.Add(stuff);
            return true;
        }

        public T Pop()
        {
            var item = this.stack.Last();
            this.stack.Remove(item);
            return item;
        }

        public int Size()
        {
            return this.stack.Count;
        }
    }

    // don't expose the internals of your object to test it


    public class StackTests
    {
        [Fact]
        public void Test1()
        {
            var stack = new Stack<int>();

            stack.Push(1);
            var x = stack.Pop();
            Assert.Equal(1, x);           
        }

        [Fact]
        public void TestSize() 
        {
            var stack = new Stack<string>();

            stack.Push("Brad");
            stack.Push("Hi Dad!");

            Assert.Equal(2, stack.Size());
        }
    }


}
