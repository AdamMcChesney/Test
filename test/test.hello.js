var index = require("../index.js" ),
event = require("./event.json"),
expect = require("chai").expect,
context = null;
const assert = require('assert'); 

describe("some function we are going to run", function () {

    it("returns back the first key value", function() {
        index.handler(event, context, function(err, res) {
        //    assert(res === "value1")
        expect(res === "value1").be.true
        })
    })
});
