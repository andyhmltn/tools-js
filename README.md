tools.js
==========

This is a repo of the javascript tools I have built up that I use in most projects.

Each functions
---------------
These two functions add an easy 'each' method to arrays/objects. Usage:

	['hello', 'world', '!'].each(function(index, value) {
		console.log('index (%s): %s',index,value);
	});

	index(0): hello
	index(1): world
	index(2): !

	({'name': 'Andy', 'github':'andyhmltn'}).each(function(index, value) {
		console.log('His %s is %s', index, value);	
	});

	His name is Andy
	His github is andyhmltn
