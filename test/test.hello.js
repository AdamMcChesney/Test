var index = require("../index.js" );
var expect = require("chai").expect;
const assert = require('assert'); 

describe("Hello world function", function () {
    it("returns back hello world in english", function() {
        console.log(index.sayHelloInEnglish());
        //expect(index.sayHelloInEnglish === "Hello World").be.true
        assert(index.sayHelloInEnglish() == "Hello World","Hello World expected")
    })
});
