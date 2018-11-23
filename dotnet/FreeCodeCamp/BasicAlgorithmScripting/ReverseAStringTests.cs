using System;
using Xunit;

namespace BasicAlgorithmScripting
{
    public class ReverseAStringTests
    {
        [Fact]
        void ShouldReturnAString() 
        {
            Assert.IsType(typeof(string), Reverse(""));
        }

        [Fact]
        void ShouldReturnReversedString() 
        {
            Assert.Equal("olleh", Reverse("Hello"));
        }

        string Reverse(string s)
        {
            return s;
        }
    }
}