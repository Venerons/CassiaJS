# CassiaJS

_Copyright (c) 2012 Daniele Veneroni. Released under MIT License._

CassiaJS is a JavaScript library to encrypt/decrypt text with various cryptopraphic algoritms.

To import the library, use this code between the <head> tags on your page:

	<script src="cassia.js"></script>

## API

Albam Cipher:

	var encrypted = Cassia.albam.encrypt("Message");
	var encrypted = Cassia.albam.decrypt("Message");

Cesare Cipher (Caesar Cipher):

	var encrypted = Cassia.cesare.encrypt("Message");
	var encrypted = Cassia.cesare.decrypt("Message");