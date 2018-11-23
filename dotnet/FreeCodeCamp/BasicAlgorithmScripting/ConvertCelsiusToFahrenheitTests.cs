using System;
using Xunit;

namespace BasicAlgorithmScripting
{
    public class ConvertCelsiusToFahrenheitTests
    {
        [Fact]
        public void ShouldReturnANumber()
        {
            Assert.IsType(typeof(double), ConvertToFahrenheit(0));
        }

        [Theory]
        [InlineData(-22, -30)]
        [InlineData(14, -10)]
        [InlineData(32, 0)]
        [InlineData(68, 20)]
        [InlineData(86, 30)]
        public void ShouldReturnCorrectValue(double f, double c) 
        {
            Assert.Equal(f, ConvertToFahrenheit(c));
        }

        double ConvertToFahrenheit(double celsius) 
        {
            return (1.8 * celsius) + 32;
        }
    }
}
