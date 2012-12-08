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

// Albam Cipher
var albam = {
    alfa: new String("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"),
    beta: new String("LMNOPQRSTUVWXYZABCDEFGHIJKlmnopqrstuvwxyzabcdefghijk1234567890"),
    encrypt: function(message) {
        var ris = "";
        var ord = 0;
        var len = message.length;
        //log("debug", "albam encrypt input: " + message);
        for (i = 0; i < len; i++) {
            c = message.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
                ord = this.alfa.indexOf(c);
                ris += this.beta.charAt(ord);
            } else {
                ris += c;
            }
        }
        //log("debug", "albam encrypt output: " + ris);
        return ris;
    },
    decrypt: function(message) {
        var ris = "";
        var ord = 0;
        var len = message.length;
        //log("debug", "albam decrypt input: " + message);
        for (i = 0; i < len; i++) {
            c = message.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
                ord = this.beta.indexOf(c);
                ris += this.alfa.charAt(ord);
            } else {
                ris += c;
            }
        }
        //log("debug", "albam decrypt output: " + ris);
        return ris;
    }
};

// Alfabeto Carbonaro
var carbonaro = {
    alfa: new String("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"),
    beta: new String("OPGTIVCHEJKRNMABQLZDUFWXYSopgtivchejkrnmabqlzdufwxys"),
    encrypt: function(message) {
        var ris = "";
        var ord = 0;
        var len = message.length;
        //log("debug", "carbonaro encrypt input: " + message);
        for (i = 0; i < len; i++) {
            c = message.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
                ord = this.alfa.indexOf(c);
                ris += this.beta.charAt(ord);
            } else {
                ris += c;
            }
        }
        //log("debug", "carbonaro encrypt output: " + ris);
        return ris;
    },
    decrypt: function(message) {
        var ris = "";
        var ord = 0;
        var len = message.length;
        //log("debug", "carbonaro decrypt input: " + message);
        for (i = 0; i < len; i++) {
            c = message.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
                ord = this.alfa.indexOf(c);
                ris += this.beta.charAt(ord);
            } else {
                ris += c;
            }
        }
        //log("debug", "carbonaro decrypt output: " + ris);
        return ris;
    }
};

// Atbash Cipher
var atbash = {
    alfa: new String("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"),
    beta: new String("ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210"),
    encrypt: function(message) {
        var ris = "";
        var ord = 0;
        var len = message.length;
        //log("debug", "atbash encrypt input: " + message);
        for (i = 0; i < len; i++) {
            c = message.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
                ord = this.alfa.indexOf(c);
                ris += this.beta.charAt(ord);
            } else {
                ris += c;
            }
        }
        //log("debug", "atbash encrypt output: " + ris);
        return ris;
    },
    decrypt: function(message) {
        var ris = "";
        var ord = 0;
        var len = message.length;
        //log("debug", "atbash decrypt input: " + message);
        for (i = 0; i < len; i++) {
            c = message.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
                ord = this.alfa.indexOf(c);
                ris += this.beta.charAt(ord);
            } else {
                ris += c;
            }
        }
        //log("debug", "atbash decrypt output: " + ris);
        return ris;
    }
};

// Caesar Cipher
var cesare = {
    alfa: new String("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"),
    beta: new String("DEFGHIJKLMNOPQRSTUVWXYZABCdefghijklmnopqrstuvwxyzabc3456789012"),
    encrypt: function(message) {
        var ris = "";
        var ord = 0;
        var len = message.length;
        //log("debug", "caesar encrypt input: " + message);
        for (i = 0; i < len; i++) {
            c = message.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
                ord = this.alfa.indexOf(c);
                ris += this.beta.charAt(ord);
            } else {
                ris += c;
            }
        }
        //log("debug", "caesar encrypt output: " + ris);
        return ris;
    },
    decrypt: function(message) {
        var ris = "";
        var ord = 0;
        var len = message.length;
        //log("debug", "caesar decrypt input: " + message);
        for (i = 0; i < len; i++) {
            c = message.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
                ord = this.beta.indexOf(c);
                ris += this.alfa.charAt(ord);
            } else {
                ris += c;
            }
        }
        //log("debug", "caesar decrypt output: " + ris);
        return ris;
    }
};

// Additive Cipher
var additive = {
    encrypt: function(message, scostamento) {
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        ris = "";
        lunghezza = message.length;
        shift = parseInt(scostamento); 
        for (i = 0; i < lunghezza; i++) {
            c = message.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
                ord = alfa.indexOf(c);
                ris += alfa.charAt((ord + shift) % 52);
            } else {
                ris += c;
            }
        }
        return ris;
    },
    decrypt: function(message, scostamento) {
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        ris = "";
        lunghezza = message.length;
        shift = parseInt(scostamento); 
        for (i = 0; i < lunghezza; i++) {
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

// Binary Encode
var binary = {
    encrypt: function(message) {
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        beta = ["000000","000001","000010","000011","000100","000101","000110","000111","001000","001001","001010","001011","001100","001101","001110","001111","010000","010001","010010","010011","010100","010101","010110","010111","011000","011001","011010","011011","011100","011101","011110","011111","100000","100001","100010","100011","100100","100101","100110","100111","101000","101001","101010","101011","101100","101101","101110","101111","110000","110001","110010","110011"];
        ris = "";
        for (i = 0; i < message.length; i++) {
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
        ris = "";
        for (i = 0; i < message.length-5; i++) {
            c = "" + message.substring(i, i+6);
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
        morse = "";
        for(conta = 0; conta < message.length; conta++){
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

        ris = "";
        sequenza = "";
        for(conta = 0; conta < message.length; conta++){
            ch = message.charAt(conta);
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

// One-Time Pad (Vernam Cipher)
var onetimepad = {
    encrypt: function(message, chiave) {
        key = chiave;
        ris = "";
        for (i = 0; i < message.length; i++) {
            m = testo.charCodeAt(i);
            k = key.charCodeAt(i % key.length);
            c = m + k;
            ris += String.fromCharCode(c);
        }
        return ris;
    },
    decrypt: function(message, chiave) {
        ris = "";
        for (i = 0; i < message.length; i++) {
            m = testo.charCodeAt(i);
            k = key.charCodeAt(i % key.length);
            c = m-k;
            ris += String.fromCharCode(c);
        }
        return ris;
    }
};

// Pizzi
var pizzini = {
    encrypt: function(message) {
        message = message.toUpperCase();
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        beta = ["4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29"];
        ris = "";
        for (i = 0; i < message.length; i++) {
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
        ris = "";
        for (i = 0; i < message.length-1; i++) {
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
        ris = "";
        for (i = 0; i < message.length; i++) {
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
        ris = "";
        for (i = 0; i < message.length-5; i++) {
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
        for(conta = 0; conta < message.length; conta++){
            ch  = message.charAt(conta);
            morse += Morse[ch]+'+';
        }
        ris = "";
        Cifrante = new Array();
        Cifrante['•'] = cpunto;
        Cifrante['—'] = clinea;
        Cifrante['+'] = cplus; 
        for(conta = 0; conta < morse.length; conta++){
            ch  = morse.charAt(conta);
            sposta = Cifrante[ch].length*Math.random();
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
        ris = "";
        
        for(conta = 0; conta < message.length; conta++){
            ch  = message.charAt(conta);
            if (cpunto.indexOf(ch) >= 0) morse += '•';
            if (clinea.indexOf(ch) >= 0) morse += '—';
            if (cplus.indexOf(ch) >= 0) morse += '+';
        }
        
        sequenza = "";
        for(conta = 0; conta < morse.length; conta++){
            ch = morse.charAt(conta);
            if (ch == '+') {
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

// ROT-13
var rot13 = {
    encrypt: function(message) {
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        beta = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
        ris = "";
        for (i = 0; i < message.length; i++) {
            c = message.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
                ord = alfa.indexOf(c);
                ris += beta.charAt(ord);
            } else {
                ris += c;
            }
        }
        return ris;
    },
    decrypt: function(message) {
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        beta = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
        ris = "";
        for (i = 0; i < message.length; i++) {
            c = message.charAt(i);
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

// T9
var t9 = {
    encrypt: function(message) {
        alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzèéàòù";
        beta = "222333444555666777788899992223334445556667777888999933268";
        ris = "";
        for (i = 0; i < message.length; i++) {
            c = message.charAt(i);
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

// VIC Cipher
var vic = {
    encrypt: function(message, key) {
        message = message.toUpperCase();
        alfa = "ETAONRISBCDFGHJKLMPQ/UVWXYZ.";
        beta = ["0","1","3","4","5","7","8","9","20","21","22","23","24","25","26","27","28","29","60","61","62","63","64","65","66","67","68","69"];
        risultato = "";
        ris = "";
        // codifica da lettere a numeri
        for (i = 0; i < message.length; i++) {
            c = message.charAt(i);
            if ((c >= 'A' && c <= 'Z') || c == '/' || c == '.'){
                ord = alfa.indexOf(c);
                ris += beta[ord];
            } else {
                ris += c;
            }
        }
        // modifica dei numeri in base alla chiave
        for (i = 0; i < ris.length; i++) {
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
        for (i = 0; i < originale.length; i++) {
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
        for (i = 0; i < testo.length-1; i++) {
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
}

var Cassia = cassia = CassiaJS = cassiaJS = Cassiajs = cassiajs = new Ciphers();