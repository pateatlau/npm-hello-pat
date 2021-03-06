'use strict';

var expect = require('chai').expect;
var hello = require('../index');

describe('#hello-world-pat', function() {
    it('should return a "hello, world!" message', function() {
        var result = hello('world');
        expect(result).to.equal('Hello, world!');
    });
    it('should return a "hello, world!" message is no argument is given', function() {
        var result = hello();
        expect(result).to.equal('Hello, world!');
    });
});
