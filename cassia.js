// Copyright (c) 2012 Daniele Veneroni. Released under MIT License. 
// http://venerons.github.com/CassiaJS

// Log function
function log(type, message) {
    if ((typeof console != "undefined") && (window.console.log)) {
        if (type === "log") console.log(message);
        if (type === "info") console.info(message);
        if (type === "warn") console.warn(message);
        if (type === "debug") console.debug(message);
        if (type === "error") console.error(message);
    } else {
        window.alert(type + " " + message);
    }
}

// Generic Substitution Cipher
var substitution = {
    encrypt: function(message, alfa, beta) {
        var ris = "";
        var ord = 0;
        var len = message.length;
        //log("debug", "substitution encrypt input: " + message);
        for (i = 0; i < len; i++) {
            c = message.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
                ord = alfa.indexOf(c);
                ris += beta.charAt(ord);
            } else {
                ris += c;
            }
        }
        //log("debug", "substitution encrypt output: " + ris);
        return ris;
    },
    decrypt: function(message, alfa, beta) {
        var ris = "";
        var ord = 0;
        var len = message.length;
        //log("debug", "substitution decrypt input: " + message);
        for (i = 0; i < len; i++) {
            c = message.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
                ord = beta.indexOf(c);
                ris += alfa.charAt(ord);
            } else {
                ris += c;
            }
        }
        //log("debug", "substitution decrypt output: " + ris);
        return ris;
    }
};

// Albam Cipher
var albam = {
    alfa: new String("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"),
    beta: new String("LMNOPQRSTUVWXYZABCDEFGHIJKlmnopqrstuvwxyzabcdefghijk1234567890"),
    encrypt: function(message) {
        //log("debug", "albam encrypt input: " + message);
        return substitution.encrypt(message, this.alfa, this.beta);
        //log("debug", "albam encrypt output: " + ris);
    },
    decrypt: function(message) {
        //log("debug", "albam decrypt input: " + message);
        return substitution.decrypt(message, this.alfa, this.beta);
        //log("debug", "albam decrypt output: " + ris);
    }
};

// Alfabeto Carbonaro
var carbonaro = {
    alfa: new String("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"),
    beta: new String("OPGTIVCHEJKRNMABQLZDUFWXYSopgtivchejkrnmabqlzdufwxys"),
    encrypt: function(message) {
        //log("debug", "carbonaro encrypt input: " + message);
        return substitution.encrypt(message, this.alfa, this.beta);
        //log("debug", "carbonaro encrypt output: " + ris);
    },
    decrypt: function(message) {
        //log("debug", "carbonaro decrypt input: " + message);
        return substitution.decrypt(message, this.alfa, this.beta);
        //log("debug", "carbonaro decrypt output: " + ris);
    }
};

// Atbash Cipher
var atbash = {
    alfa: new String("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"),
    beta: new String("ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210"),
    encrypt: function(message) {
        //log("debug", "atbash encrypt input: " + message);
        return substitution.encrypt(message, this.alfa, this.beta);
        //log("debug", "atbash encrypt output: " + ris);
    },
    decrypt: function(message) {
        //log("debug", "atbash decrypt input: " + message);
        return substitution.decrypt(message, this.alfa, this.beta);
        //log("debug", "atbash decrypt output: " + ris);
    }
};

// Caesar Cipher
var cesare = {
    alfa: new String("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"),
    beta: new String("DEFGHIJKLMNOPQRSTUVWXYZABCdefghijklmnopqrstuvwxyzabc3456789012"),
    encrypt: function(message) {
        //log("debug", "caesar encrypt input: " + message);
        return substitution.encrypt(message, this.alfa, this.beta);
        //log("debug", "caesar encrypt output: " + ris);
    },
    decrypt: function(message) {
        //log("debug", "caesar decrypt input: " + message);
        return substitution.decrypt(message, this.alfa, this.beta);
        //log("debug", "caesar decrypt output: " + ris);
    }
};

// ROT-13
var rot13 = {
    alfa: new String("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"),
    beta: new String("NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"),
    encrypt: function(message) {
        //log("debug", "ROT-13 encrypt input: " + message);
        return substitution.encrypt(message, this.alfa, this.beta);
        //log("debug", "ROT-13 encrypt output: " + ris);
    },
    decrypt: function(message) {
        //log("debug", "ROT-13 decrypt input: " + message);
        return substitution.decrypt(message, this.alfa, this.beta);
        //log("debug", "ROT-13 decrypt output: " + ris);
    }
};

// T9
var t9 = {
    alfa: new String("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzèéàòù"),
    beta: new String("222333444555666777788899992223334445556667777888999933268"),
    encrypt: function(message) {
        //log("debug", "T9 encrypt input: " + message);
        return substitution.encrypt(message, this.alfa, this.beta);
        //log("debug", "T9 encrypt output: " + ris);
    }
};

// Additive Cipher
var additive = {
    alfa: new String("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"),
    encrypt: function(message, scostamento) {
        var ris = "";
        var ord = 0;
        var len = message.length;
        shift = parseInt(scostamento); 
        for (i = 0; i < len; i++) {
            c = message.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
                ord = this.alfa.indexOf(c);
                ris += this.alfa.charAt((ord + shift) % 52);
            } else {
                ris += c;
            }
        }
        return ris;
    },
    decrypt: function(message, scostamento) {
        var ris = "";
        var ord = 0;
        var len = message.length;
        shift = parseInt(scostamento); 
        for (i = 0; i < len; i++) {
            c = message.charAt(i);
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

// Base64 Encode
var base64 = {
    encrypt: function(message) {
        //log("debug", "Base64 encrypt input: " + message);
        return btoa(message);
        //log("debug", "Base64 encrypt output: " + ris);
    },
    decrypt: function(message) {
        //log("debug", "Base64 decrypt input: " + message);
        return atob(message);
        //log("debug", "Base64 decrypt output: " + ris);
    }
};

// Binary Encode
var binary = {
    encrypt: function(message) {
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        beta = ["000000","000001","000010","000011","000100","000101","000110","000111","001000","001001","001010","001011","001100","001101","001110","001111","010000","010001","010010","010011","010100","010101","010110","010111","011000","011001","011010","011011","011100","011101","011110","011111","100000","100001","100010","100011","100100","100101","100110","100111","101000","101001","101010","101011","101100","101101","101110","101111","110000","110001","110010","110011"];
        var ris = "";
        var ord = 0;
        var len = message.length;
        for (i = 0; i < len; i++) {
            c = message.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
                ord = alfa.indexOf(c);
                ris += beta[ord];
            } else {
                ris += c;
            }
        }
        return ris;
    },
    decrypt: function(message) {
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        beta = ["000000","000001","000010","000011","000100","000101","000110","000111","001000","001001","001010","001011","001100","001101","001110","001111","010000","010001","010010","010011","010100","010101","010110","010111","011000","011001","011010","011011","011100","011101","011110","011111","100000","100001","100010","100011","100100","100101","100110","100111","101000","101001","101010","101011","101100","101101","101110","101111","110000","110001","110010","110011"];
        var ris = "";
        var ord = 0;
        var len = message.length;
        for (i = 0; i < len - 5; i++) {
            c = "" + message.substring(i, i+6);
            trovato = false;
            j = 0;
            while ((j < 52) && (!trovato)) {
                cod = beta[j];
                if (c == cod) { ris += alfa.charAt(j); trovato = true; }
                j++;
            }
            if (!trovato) { ris += c.charAt(0); } else { i += 5; }
        }
        return ris;
    }
};

// Leet
var leet = {
    encrypt: function(message, version) {
        testo = message.toUpperCase();
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var beta;
        base = ["4","8","(","|)","3","F","G","H","1","J","K","L","M","N","0","P","Q","Я","5","7","U","V","W","><","Ұ","2"];
        avanzato = ["4","8","(","|)","3","ƒ","9","|-|","1","_/","|<","|_","/\\/\\","|\\|","0","|º","[,]","Я","5","7","|_|","\\./","\\X/","><","Ұ","2"];
        if ((version == "1") || (version == "base"))
            beta = base;
        else
            beta = avanzato;
        var ris = "";
        var ord = 0;
        var len = testo.length;
        for (i = 0; i < len; i++) {
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
    encrypt: function(message, separator) {
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
        message = message.toUpperCase();
        var morse = "";
        var ris = "";
        var len = message.length;
        for(conta = 0; conta < len; conta++){
            ch  = message.charAt(conta);
            morse += Morse[ch];
            morse += separator;
        }
        ris = morse;
        return ris;
    },
    decrypt: function(message, separator) {
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

        var ris = "";
        var len = message.length;
        sequenza = "";
        for(conta = 0; conta < len; conta++){
            ch = message.charAt(conta);
            if (ch == separator) {
                ris += Morse[sequenza];
                // ris += " |" + sequenza + "| ";  // SCRITTURA DI DEBUG
                sequenza = "";
            } else {
                sequenza += ch;
            }
        }
        return ris;
    }
};

// One-Time Pad (Vernam Cipher)
var onetimepad = {
    encrypt: function(message, chiave) {
        var key = chiave;
        var ris = "";
        var len = message.length;
        for (i = 0; i < len; i++) {
            m = testo.charCodeAt(i);
            k = key.charCodeAt(i % key.length);
            c = m + k;
            ris += String.fromCharCode(c);
        }
        return ris;
    },
    decrypt: function(message, chiave) {
        var ris = "";
        var len = message.length;
        for (i = 0; i < len; i++) {
            m = testo.charCodeAt(i);
            k = key.charCodeAt(i % key.length);
            c = m-k;
            ris += String.fromCharCode(c);
        }
        return ris;
    }
};

// Pizzini
var pizzini = {
    encrypt: function(message) {
        message = message.toUpperCase();
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        beta = ["4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29"];
        var ris = "";
        var ord = 0;
        var len = message.length;
        for (i = 0; i < len; i++) {
            c = message.charAt(i);
            if (c >= 'A' && c <= 'Z') {
                ord = alfa.indexOf(c);
                ris += beta[ord];
            } else {
                ris += c;
            }
        }
        return ris;
    },
    decrypt: function(message) {
        message += "*";
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        beta = ['4','5','6','7','8','9','0','1','2','3','4','5','6','7','8','9','0','1','2','3','4','5','6','7','8','9'];
        var ris = "";
        var ord = 0;
        var len = message.length;
        for (i = 0; i < len - 1; i++) {
            c = message.charAt(i);
            trovato = false;
            j = 0;
            if (c == '1') { 
                j = 6;
                i++;
                c = message.charAt(i);
            } else 
                if (c == '2') {
                    j = 16;
                    i++;
                    c = message.charAt(i);
                }
            while ((j < 26) && (!trovato)) {
                if (c == beta[j]) {
                    ris += alfa.charAt(j);
                    trovato = true;
                }
                j++;
            }
            if (!trovato) {
                ris += c;
            }
        }
        return ris;
    }
};

// Polibio
var polibio = {
    encrypt: function(message) {
        message = message.toUpperCase();
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        beta = ["11","12","13","14","15","21","22","23","24","24","25","31","32","33","34","35","41","42","43","44","45","51","52","53","54","55"];
        var ris = "";
        var ord = 0;
        var len = message.length;
        for (i = 0; i < len; i++) {
            c = message.charAt(i);
            if (c >= 'A' && c <= 'Z') {
                ord = alfa.indexOf(c);
                ris += beta[ord];
            } else {
                ris += c;
            }
        }
        return ris;
    },
    decrypt: function(message) {
        message = message + " ";
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        beta = ["11","12","13","14","15","21","22","23","24","24","25","31","32","33","34","35","41","42","43","44","45","51","52","53","54","55"];
        var ris = "";
        var ord = 0;
        var len = message.length;
        for (i = 0; i < len - 5; i++) {
            c = "" + message.charAt(i);
            d = "" + message.charAt(i+1);
            num = c + d;
            trovato = false;
            j = 0;
            while ((j < 26) && (!trovato)) {
                if (num == beta[j]) {
                    ris += alfa.charAt(j);
                    trovato = true;
                }
                j++;
            }
            if (!trovato) {
                ris += c;
            } else {
                i++;
            }
        }
        return ris;
    }
};

// Pollux
var pollux = {
    encrypt: function(message, cpunto, clinea, cplus) {
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
        message = message.toUpperCase();
        morse = "";
        var ris = "";
        var len = message.length;
        for(conta = 0; conta < len; conta++){
            ch  = message.charAt(conta);
            morse += Morse[ch]+'+';
        }
        Cifrante = new Array();
        Cifrante['•'] = cpunto;
        Cifrante['—'] = clinea;
        Cifrante['+'] = cplus; 
        len = morse.length;
        for(conta = 0; conta < len; conta++){
            ch  = morse.charAt(conta);
            sposta = Cifrante[ch].length * Math.random();
            ris += Cifrante[ch].charAt(sposta);
        }
        return ris;
    },
    decrypt: function(message, cpunto, clinea, cplus) {
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
        
        morse = "";
        var ris = "";
        var len = message.length;
        
        for(conta = 0; conta < len; conta++){
            ch  = message.charAt(conta);
            if (cpunto.indexOf(ch) >= 0) morse += '•';
            if (clinea.indexOf(ch) >= 0) morse += '—';
            if (cplus.indexOf(ch) >= 0) morse += '+';
        }
        
        var sequenza = "";
        len = morse.length;
        for(conta = 0; conta < len; conta++){
            ch = morse.charAt(conta);
            if (ch == '+') {
                ris += Morse[sequenza];
                // ris += " |" + sequenza + "| ";  // SCRITTURA DI DEBUG
                sequenza = "";
            } else {
                sequenza += ch;
            }
        }
        return ris;
    }
};

// VIC Cipher
var vic = {
    encrypt: function(message, key) {
        message = message.toUpperCase();
        alfa = "ETAONRISBCDFGHJKLMPQ/UVWXYZ.";
        beta = ["0","1","3","4","5","7","8","9","20","21","22","23","24","25","26","27","28","29","60","61","62","63","64","65","66","67","68","69"];
        var ris = "";
        var ord = 0;
        var len = message.length;
        // codifica da lettere a numeri
        for (i = 0; i < len; i++) {
            c = message.charAt(i);
            if ((c >= 'A' && c <= 'Z') || c == '/' || c == '.'){
                ord = alfa.indexOf(c);
                ris += beta[ord];
            } else {
                ris += c;
            }
        }
        // modifica dei numeri in base alla chiave
        len = ris.length;
        var risultato = "";
        for (i = 0; i < len; i++) {
            c = ris.charAt(i);
            if (c >= '0' && c <= '9'){
                a = parseInt(c);
                b = parseInt(key.charAt(i % key.length));
                d = a + b;
                if (d > 9) d = d - 10;
                risultato += String(d);
            } else {
                risultato += c;
            }
        }
        return risultato;
    },
    decrypt: function(message, key) {
        originale = message + "*";
        testo = "";
        alfa = "ETAONRISBCDFGHJKLMPQ/UVWXYZ.";
        beta = ["0","1","3","4","5","7","8","9","0","1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9"];
        risultato = "";
        // modifica dei numeri in base alla chiave
        var len = originale.length;
        for (i = 0; i < len; i++) {
            c = originale.charAt(i);
            if (c >= '0' && c <= '9'){
                a = parseInt(c);
                b = parseInt(key.charAt(i % key.length));
                d = a - b;
                if (d < 0) d = d + 10;
                testo += String(d);
            } else {
                testo += c;
            }
         }
        // codifica da numeri a lettere
        len = testo.length;
        for (i = 0; i < len - 1; i++) {
            c = testo.charAt(i);
            trovato = false;
            j = 0;
            if (c == '2') { j = 8; i++; c = testo.charAt(i); } else if (c == '6') {
                j = 18;
                i++;
                c = testo.charAt(i);
            }
            while ((j < 28) && (!trovato)) {
                if (c == beta[j]) {
                    risultato += alfa.charAt(j);
                    trovato = true;
                }
                j++;
            }
            if (!trovato) {
                risultato += c;
            }
        }
        return risultato;
    }
};

// RANDOM BREAK
var randombreak = {
    encrypt: function(message, reversing) {
        //log("debug", "randombreak encrypt input: " + message);
        tmp = "";
        message = message.replace(/ /g, "");
        len = message.length;
        for (i = 0; i < len; i++) {
            j = Math.floor(Math.random() * 6 + 2);
            if (len < i + j) {
                j = len - i;
            }
            tmp = tmp + message.substring(i, i + j) + " ";
            i += j - 1;
        }
        ris = "";
        if (reversing) {
            len = tmp.length;
            for (i = 0; i < len; i++) {
                ris = tmp.charAt(i) + ris;
            }
        } else {
            ris = tmp;
        }
        return ris;
        //log("debug", "randombreak encrypt output: " + ris);
    },
    decrypt: function(message, reversing) {
        //log("debug", "randombreak decrypt input: " + message);
        ris = message.replace(/ /g, "");
        if (reversing) {
            len = ris.length;
            tmp = "";
            for (i = 0; i < len; i++) {
                tmp = ris.charAt(i) + tmp;
            }
            ris = tmp;
        }
        return ris;
        //log("debug", "randombreak decrypt output: " + ris);
    }
};

// TRANSPOSITION CIPHER
var transposition = {
    encrypt: function(message, cols) {
        //log("debug", "transposition encrypt input: " + message);
        if (cols < 2) {
            log("error", "cols parameter cannot be < 2. Your input: " + cols);
            return;
        }
        if (cols > message.length) {
            log("error", "cols parameter cannot be higher than message length. Your input: " + cols);
            return;
        }
        // riempimento del testo con caratteri nulli
        resto = message.length % cols;
        resto = (cols - resto) % cols;
        for (i = 0; i < resto; i++){
            message += 'x';
        }
        // trasposizione
        ris = "";
        righe = message.length / cols;
        for (colonna = 0; colonna < cols; colonna++) {
            for (conta = 0; conta < righe; conta++) {
                ris += message.charAt(colonna + (cols * conta));
            }
        }
        return ris;
        //log("debug", "transposition encrypt output: " + ris);
    },
    decrypt: function(message, cols) {
        //log("debug", "transposition decrypt input: " + message);
        if (cols < 2) {
            log("error", "cols parameter cannot be < 2. Your input: " + cols);
            return;
        }
        if (cols > message.length) {
            log("error", "cols parameter cannot be higher than message length. Your input: " + cols);
            return;
        }
        // de-trasposizione
        ris = "";
        righe = message.length / cols;
        for (conta = 0; conta < righe; conta++) {
            for (colonna = 0; colonna < cols; colonna++) {
                ris += message.charAt(conta + (righe * colonna));
            }
        }
        return ris;
        //log("debug", "transposition decrypt output: " + ris);
    }
};

// READING KEY
var reading = {
    generate: function(level) {
        if (level == "") {
            log("error", "Insert a level to generate a key");
            return;
        }
        for (i = 0; i < level.length; i++) {
            if ((level.charAt(i) < "0") || (level.charAt(i) > "9")) {
                log("error", "Level is not valid, insert a positive integer number < 30.");
                return;
            }
        }
        ris = "1 \b";
        tmp = "";
        num = parseInt(level);
        if ((num <= 30) && (num >= 0)) {
            for (i = 0; i < num; i++) {
                len = ris.length - 2;
                for (j = 0; j < len; j++) {
                    if (ris.charAt(j) == ris.charAt(j + 1)) {
                        if (ris.charAt(j + 1) == ris.charAt(j + 2)) {
                            tmp += "3" + ris.charAt(j);
                            j += 2;
                        } else {
                            tmp += "2" + ris.charAt(j);
                            j++;
                        }
                    } else {
                        tmp += "1" + ris.charAt(j);
                    }
                }
                ris = tmp + " \b";
                tmp = "";
            }
            return ris;
        } else {
            log("error", "Level is not valid, insert a positive integer number < 30.");
        }
    }
};

// FIBONACCI
var fibonacci = {
    generate: function(level, separator) {
        if (level == "") {
            log("error", "Insert a level to generate a key");
            return;
        }
        for (i = 0; i < level.length; i++) {
            if ((level.charAt(i) < "0") || (level.charAt(i) > "9")) {
                log("error", "Level is not valid, insert a positive integer number < 91.");
                return;
            }
        }
        ris = "0" + separator + "1";
        n1 = 0;
        n2 = 1;
        var t;
        num = parseInt(level);
        if ((num <= 91) && (num > 0)) {
            for (i = 0; i < num; i++) {
                t = n2;
                n2 += n1;
                n1 = t;
                ris += separator + n2
            }
            return ris;
        } else {
            log("error", "Level is not valid, insert a positive integer number < 91.");
        }
    }
};

// 3n+1 SERIE
var serie3n1 = {
    generate: function(input, separator) {
        if (input == "") {
            log("error", "Insert a number to generate a key");
            return;
        }
        for (i = 0; i < input.length; i++) {
            if ((input.charAt(i) < "0") || (input.charAt(i) > "9")) {
                log("error", "The specified input is not valid, insert a positive integer");
                return;
            }
        }
        if (parseInt(input) < 1) {
            log("error", "The specified input is not valid, insert a positive integer");
            return;
        }
        ris = ""; 
        num = parseInt(input);
        while (num != 1) {
            if ((num % 2) == 0) {
                num = num / 2;
                ris += String(num);
            } else {
                num = (num * 3) + 1;
                ris += String(num);
            }
            ris += separator;
        }
        return ris;
    }
};

// RANDOM KEY
var randomkey = {
    generate: function(length, charset) {
        if (charset == "") {
            log("error", "Insert a charset to generate a key");
            return;
        }
        ris = "";
        l = charset.length;
        for (i = 0; i < length; i++) {
            ris += charset.charAt(Math.floor(Math.random() * l));
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
    this.onetimepad = onetimepad;
    this.pizzini = pizzini;
    this.polibio = polibio;
    this.pollux = pollux;
    this.rot13 = rot13;
    this.t9 = t9;
    this.vic = vic;
    this.substitution = substitution;
    this.randombreak = randombreak;
    this.transposition = transposition;
    this.reading = reading;
    this.fibonacci = fibonacci;
    this.serie3n1 = serie3n1;
    this.randomkey = randomkey;
    this.base64 = base64;
}

var Cassia = cassia = CassiaJS = cassiaJS = Cassiajs = cassiajs = new Ciphers();
