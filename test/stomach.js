
/**
 * Test dependencies.
 */

var assert = require('assert');
var dom = require('stomach');

describe("string", function() {

	it("should render string template", function() {
		var result = dom('<button>stomach</button>');
		assert.equal(result.nodeName, 'BUTTON');
		assert.equal(result.innerHTML, 'stomach');
	});

	it("should select node into document", function() {
		var result = dom('myButton');
		assert.equal(result.nodeName, 'BUTTON');
		assert.equal(result.innerHTML, 'my button');
	});
});

describe("node", function() {

	it("should return node", function() {
		var btn = document.querySelector('.myButton');
		var result = dom(btn);
		assert.equal(btn, result);
	});

	it("should clone node", function() {
		var btn = document.querySelector('.myButton');
		var result = dom(btn, true);

		btn.innerHTML = 'hello';
		assert.equal(result.innerHTML, 'my button');
	});
});
