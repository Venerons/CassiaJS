# CassiaJS

_Copyright (c) 2012 Daniele Veneroni. Released under MIT License._

CassiaJS is a JavaScript library to encrypt/decrypt text with various cryptopraphic algoritms.

To import the library, use this code between the head tags on your page:

	<script src="cassia.min.js"></script>

The library is called by using `CassiaJS` followed by the cipher name and the methods encrypt/decrypt.

## API

Additive Cipher:
	
	// shift must be a number, i.e. shift = 5
	var encrypted = CassiaJS.additive.encrypt("Message", shift); 
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

	// separator must be a character, i.e. separator = " " or separator = "+"
	var encrypted = CassiaJS.morse.encrypt("Message", separator); 
	var decrypted = CassiaJS.morse.decrypt("Message", separator);

One-Time Pad (Vernam Cipher):

	var encrypted = CassiaJS.onetimepad.encrypt("Message", "key"); 
	var decrypted = CassiaJS.onetimepad.decrypt("Message", "key");

Pizzini:

	var encrypted = CassiaJS.pizzini.encrypt("Message"); 
	var decrypted = CassiaJS.pizzini.decrypt("Message");

Polibio Cipher:

	var encrypted = CassiaJS.polibio.encrypt("Message"); 
	var decrypted = CassiaJS.polibio.decrypt("Message");

Pollux Cipher:

	// chpoint, chline, chpuls are three string variables that contains the characters for point, line and plus symbols.
	// i.e. chpoint = "ADGJMPSVYcfilorux"
	// i.e. chlint = "BEHKNQTWZadgjmpsvy"
	// i.e. chplus = "CFILORUXbehknqtwz"
	var encrypted = CassiaJS.pollux.encrypt("Message", chpoint, chline, chplus); 
	var decrypted = CassiaJS.pollux.decrypt("Message", chpoint, chline, chplus);

ROT-13:

	var encrypted = CassiaJS.rot13.encrypt("Message"); 
	var decrypted = CassiaJS.rot13.decrypt("Message");

T9 (only encrypt):

	var encrypted = CassiaJS.t9.encrypt("Message");

VIC Cipher:

	// key is a string variable that must containt only numeric characters, i.e. key = "1234567890"
	var encrypted = CassiaJS.vic.encrypt("Message", key); 
	var decrypted = CassiaJS.vic.decrypt("Message", key);