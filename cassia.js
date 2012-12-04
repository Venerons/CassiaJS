// Copyright (c) 2012 Daniele Veneroni. Released under MIT License

// Caesar Cipher
var cesare = {
    encrypt: function(messaggio) {
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        beta = "DEFGHIJKLMNOPQRSTUVWXYZABCdefghijklmnopqrstuvwxyzabc3456789012";
        ris = "";
        for (i = 0; i < messaggio.length; i++) {
            c = messaggio.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
                ord = alfa.indexOf(c);
                ris += beta.charAt(ord);
            } else {
                ris += c;
            }
        }
        return ris;
    },
    decrypt: function(messaggio) {
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        beta = "DEFGHIJKLMNOPQRSTUVWXYZABCdefghijklmnopqrstuvwxyzabc3456789012";
        ris = "";
        for (i = 0; i < messaggio.length; i++) {
            c = messaggio.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
                ord = beta.indexOf(c);
                ris += alfa.charAt(ord);
            } else {
                ris += c;
            }
        }
        return ris;
    }
};

// Albam Cipher
var albam = {
    encrypt: function(messaggio) {
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        beta = "LMNOPQRSTUVWXYZABCDEFGHIJKlmnopqrstuvwxyzabcdefghijk1234567890";
        ris = "";
        for (i = 0; i < messaggio.length; i++) {
            c = messaggio.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
                ord = alfa.indexOf(c);
                ris += beta.charAt(ord);
            } else {
                ris += c;
            }
        }
        return ris;
    },
    decrypt: function(messaggio) {
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        beta = "LMNOPQRSTUVWXYZABCDEFGHIJKlmnopqrstuvwxyzabcdefghijk1234567890";
        ris = "";
        for (i = 0; i < messaggio.length; i++) {
            c = messaggio.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
                ord = beta.indexOf(c);
                ris += alfa.charAt(ord);
            } else {
                ris += c;
            }
        }
        return ris;
    }
};

function Ciphers() {
    this.cesare = cesare;
    this.albam = albam;
}

var Cassia = cassia = new Ciphers();