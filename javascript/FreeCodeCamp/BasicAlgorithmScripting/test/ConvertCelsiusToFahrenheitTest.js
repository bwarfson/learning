var assert = require('assert');

describe('Convert Celsius to Fahrenheit Tests', () => {
    it('should return number', () => {
        assert.equal("number", typeof(convertToFahrenheit(0)));
    });
});

const convertToFahrenheit = value => value;