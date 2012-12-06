# CassiaJS

_Copyright (c) 2012 Daniele Veneroni. Released under MIT License._

CassiaJS is a JavaScript library to encrypt/decrypt text with various cryptopraphic algoritms.

To import the library, use this code between the head tags on your page:

	<script src="cassia.min.js"></script>

The library is called by using one of the following methods followed by the cipher name and the methods encrypt/decrypt:

	CassiaJS
	cassiaJS
	Cassiajs
	cassiajs
	Cassia
	cassia

## API

Additive Cipher:

	var encrypted = CassiaJS.additive.encrypt("Message", shift); // shift must be a number, i.e. shift = 5
	var decrypted = CassiaJS.additive.decrypt("Message", shift);

Albam Cipher:

	var encrypted = CassiaJS.albam.encrypt("Message");
	var decrypted = CassiaJS.albam.decrypt("Message");

Alfabeto Carbonaro:

	var encrypted = CassiaJS.carbonaro.encrypt("Message");
	var decrypted = CassiaJS.carbonaro.decrypt("Message");

Atbash:

	var encrypted = CassiaJS.atbash.encrypt("Message");
	var decrypted = CassiaJS.atbash.decrypt("Message");

Binary Encode:

	var encrypted = CassiaJS.binary.encrypt("Message");
	var decrypted = CassiaJS.binary.decrypt("Message");

Cesare Cipher (Caesar Cipher):

	var encrypted = CassiaJS.cesare.encrypt("Message");
	var decrypted = CassiaJS.cesare.decrypt("Message");

Leet (only encrypt):

	var baseencrypted = CassiaJS.leet.encrypt("Message", "base");
	var advancedencrypted = CassiaJS.leet.encrypt("Message", "advanced");

Morse Code:

	var encrypted = CassiaJS.morse.encrypt("Message", separator); // separator must be a character, i.e. separator = " " or separator = "+"
	var decrypted = CassiaJS.morse.decrypt("Message", separator);