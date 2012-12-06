// Copyright (c) 2012 Daniele Veneroni. Released under MIT License

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

// Alfabeto Carbonaro
var carbonaro = {
    encrypt: function(messaggio) {
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        beta = "OPGTIVCHEJKRNMABQLZDUFWXYSopgtivchejkrnmabqlzdufwxys";
        ris = "";
        for (i = 0; i < messaggio.length; i++) {
            c = messaggio.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
                ord = alfa.indexOf(c);
                ris += beta.charAt(ord);
            } else {
                ris += c;
            }
        }
        return ris;
    },
    decrypt: function(messaggio) {
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        beta = "OPGTIVCHEJKRNMABQLZDUFWXYSopgtivchejkrnmabqlzdufwxys";
        ris = "";
        for (i = 0; i < messaggio.length; i++) {
            c = messaggio.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
                ord = alfa.indexOf(c);
                ris += beta.charAt(ord);
            } else {
                ris += c;
            }
        }
        return ris;
    }
};

// Atbash Cipher
var atbash = {
    encrypt: function(messaggio) {
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        beta = "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210";
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
        beta = "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210";
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
    }
};

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

// Additive Cipher
var additive = {
    encrypt: function(messaggio, scostamento) {
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        ris = "";
        lunghezza = messaggio.length;
        shift = parseInt(scostamento); 
        for (i = 0; i < lunghezza; i++) {
            c = messaggio.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
                ord = alfa.indexOf(c);
                ris += alfa.charAt((ord + shift) % 52);
            } else {
                ris += c;
            }
        }
        return ris;
    },
    decrypt: function(messaggio, scostamento) {
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        ris = "";
        lunghezza = messaggio.length;
        shift = parseInt(scostamento); 
        for (i = 0; i < lunghezza; i++) {
            c = messaggio.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
                ord = alfa.indexOf(c);
                r = ord - shift;
                if (r < 0) { r += 52; }
                    ris += alfa.charAt(r);
                } else {
                    ris += c;
                }
        }
        return ris;
    }
};

// Binary Encode
var binary = {
    encrypt: function(messaggio) {
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        beta = ["000000","000001","000010","000011","000100","000101","000110","000111","001000","001001","001010","001011","001100","001101","001110","001111","010000","010001","010010","010011","010100","010101","010110","010111","011000","011001","011010","011011","011100","011101","011110","011111","100000","100001","100010","100011","100100","100101","100110","100111","101000","101001","101010","101011","101100","101101","101110","101111","110000","110001","110010","110011"];
        ris = "";
        for (i = 0; i < messaggio.length; i++) {
            c = messaggio.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
                ord = alfa.indexOf(c);
                ris += beta[ord];
            } else {
                ris += c;
            }
        }
        return ris;
    },
    decrypt: function(messaggio) {
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        beta = ["000000","000001","000010","000011","000100","000101","000110","000111","001000","001001","001010","001011","001100","001101","001110","001111","010000","010001","010010","010011","010100","010101","010110","010111","011000","011001","011010","011011","011100","011101","011110","011111","100000","100001","100010","100011","100100","100101","100110","100111","101000","101001","101010","101011","101100","101101","101110","101111","110000","110001","110010","110011"];
        ris = "";
        for (i = 0; i < messaggio.length-5; i++) {
            c = "" + messaggio.substring(i, i+6);
            trovato = false;
            j = 0;
            while ((j < 52) && (!trovato)) {
                cod = beta[j];
                if (c == cod) { ris += alfa.charAt(j); trovato = true; }
                j++;
            }
            if (!trovato) { ris += c.charAt(0); } else { i+=5; }
        }
        return ris;
    }
};

// Leet
var leet = {
    encrypt: function(messaggio, version) {
        testo = messaggio.toUpperCase();
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var beta;
        base = ["4","8","(","|)","3","F","G","H","1","J","K","L","M","N","0","P","Q","Я","5","7","U","V","W","><","Ұ","2"];
        avanzato = ["4","8","(","|)","3","ƒ","9","|-|","1","_/","|<","|_","/\\/\\","|\\|","0","|º","[,]","Я","5","7","|_|","\\./","\\X/","><","Ұ","2"];
        if ((version == "1") || (version == "base"))
            beta = base;
        else
            beta = avanzato;
        ris = "";
        for (i = 0; i < testo.length; i++) {
            c = testo.charAt(i);
            if (c >= 'A' && c <= 'Z') {
                ord = alfa.indexOf(c);
                ris += beta[ord];
            } else {
                ris += c;
            }
        }
        return ris;
    }
};

// Morse Code
var morse = {
    encrypt: function(messaggio, separator) {
        Morse = new Array();
        Morse['A'] = '•—';
        Morse['À'] = '•—';
        Morse['B'] = '—•••';
        Morse['C'] = '—•—•';
        Morse['D'] = '—••';
        Morse['E'] = '•';
        Morse['È'] = '•';
        Morse['É'] = '•';
        Morse['F'] = '••—•';
        Morse['G'] = '——•';
        Morse['H'] = '••••';
        Morse['I'] = '••';
        Morse['Ì'] = '••';
        Morse['J'] = '•———';
        Morse['K'] = '—•—';
        Morse['L'] = '•—••';
        Morse['M'] = '——';
        Morse['N'] = '—•';
        Morse['O'] = '———';
        Morse['Ò'] = '———';
        Morse['P'] = '•——•';
        Morse['Q'] = '——•—';
        Morse['R'] = '•—•';
        Morse['S'] = '•••';
        Morse['T'] = '—';
        Morse['U'] = '••—';
        Morse['Ù'] = '••—';
        Morse['V'] = '•••—';
        Morse['W'] = '•——';
        Morse['X'] = '—••—';
        Morse['Y'] = '—•——';
        Morse['Z'] = '——••';
        Morse['1'] = '•————';
        Morse['2'] = '••———';
        Morse['3'] = '•••——';
        Morse['4'] = '••••—';
        Morse['5'] = '•••••';
        Morse['6'] = '—••••';
        Morse['7'] = '——•••';
        Morse['8'] = '———••';
        Morse['9'] = '————•';
        Morse['0'] = '—————';
        Morse['.'] = '•—•—•—';
        Morse[','] = '——••——';
        Morse[':'] = '———•••';
        Morse['?'] = '••——••';
        Morse['='] = '—•••—';
        Morse['-'] = '—••••—';
        Morse['('] = '—•——•';
        Morse[')'] = '—•——•—';
        Morse['"'] = '•—••—•';
        Morse['\''] = '•————•';
        Morse['/'] = '—••—•';
        Morse['!'] = '•—••—'; // equivalente di "EX"
        Morse[' '] = '••——•—'; // in realtà sarebbe la sequenza per "sottolineato"
        Morse['@'] = '•——•—•';
        messaggio = messaggio.toUpperCase();
        morse = "";
        for(conta = 0; conta < messaggio.length; conta++){
            ch  = messaggio.charAt(conta);
            morse += Morse[ch];
            morse += separator;
        }
        ris = morse;
        return ris;
    },
    decrypt: function(messaggio, separator) {
        Morse = new Array();
        Morse['•—'] = 'A';
        Morse['—•••'] = 'B';
        Morse['—•—•'] = 'C';
        Morse['—••'] = 'D';
        Morse['•'] = 'E';
        Morse['••—•'] = 'F';
        Morse['——•'] = 'G';
        Morse['••••'] = 'H';
        Morse['••'] = 'I';
        Morse['•———'] = 'J';
        Morse['—•—'] = 'K';
        Morse['•—••'] = 'L';
        Morse['——'] = 'M';
        Morse['—•'] = 'N';
        Morse['———'] = 'O';
        Morse['•——•'] = 'P';
        Morse['——•—'] = 'Q';
        Morse['•—•'] = 'R';
        Morse['•••'] = 'S';
        Morse['—'] = 'T';
        Morse['••—'] = 'U';
        Morse['•••—'] = 'V';
        Morse['•——'] = 'W';
        Morse['—••—'] = 'X';
        Morse['—•——'] = 'Y';
        Morse['——••'] = 'Z';
        Morse['•————'] = '1';
        Morse['••———'] = '2';
        Morse['•••——'] = '3';
        Morse['••••—'] = '4';
        Morse['•••••'] = '5';
        Morse['—••••'] = '6';
        Morse['——•••'] = '7';
        Morse['———••'] = '8';
        Morse['————•'] = '9';
        Morse['—————'] = '0';
        Morse['•—•—•—'] = '.';
        Morse['——••——'] = ',';
        Morse['———•••'] = ':';
        Morse['••——••'] = '?';
        Morse['—•••—'] = '=';
        Morse['—••••—'] = '-';
        Morse['—•——•'] = '(';
        Morse['—•——•—'] = ')';
        Morse['•—••—•'] = '"';
        Morse['•————•'] = '\'';
        Morse['—••—•'] = '/';
        Morse['•—••—'] = '!'; // equivalente di "EX"
        Morse['••——•—'] = ' '; // in realtà sarebbe la sequenza per "sottolineato"
        Morse['•——•—•'] = '@';

        ris = "";
        sequenza = "";
        for(conta = 0; conta < messaggio.length; conta++){
            ch = messaggio.charAt(conta);
            if (ch == separator) {
                ris += Morse[sequenza];
                // risultato.value += " |" + sequenza + "| ";  // SCRITTURA DI DEBUG
                sequenza = "";
            } else {
                sequenza += ch;
            }
        }
        return ris;
    }
};

function Ciphers() {
    this.albam = albam;
    this.carbonaro = carbonaro;
    this.atbash = atbash;
    this.cesare = cesare;
    this.additive = additive;
    this.binary = binary;
    this.leet = leet;
    this.morse = morse;
}

var Cassia = cassia = CassiaJS = cassiaJS = Cassiajs = cassiajs = new Ciphers();