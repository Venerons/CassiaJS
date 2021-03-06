// ┌───────────────────────────────────────────────────────────────────────┐
// │ CassiaJS - Cassia for JavaScript (http://venerons.github.io/CassiaJS) │
// ├───────────────────────────────────────────────────────────────────────┤
// │ Version 1.0.0 - 20/01/2014                                            │
// ├───────────────────────────────────────────────────────────────────────┤
// │ Copyright (c) 2012-2014 Daniele Veneroni (http://venerons.github.io)  │
// ├───────────────────────────────────────────────────────────────────────┤
// │ Licensed under the MIT License (X11 License).                         │
// └───────────────────────────────────────────────────────────────────────┘

"use strict";

var CassiaJS = cassiaJS = Cassiajs = cassiajs = Cassia = cassia = {};

// Generic Substitution Cipher
CassiaJS.substitution = {
    encrypt: function (message, alfa, beta) {
        var ris = "", ord = 0, len = message.length, c = "";
        for (var i = 0; i < len; i++) {
            c = message.charAt(i);
            ord = alfa.indexOf(c);
            if (ord >= 0) {
                ris += beta.charAt(ord);
            } else {
                ris += c;
            }
        }
        return ris;
    },
    decrypt: function (message, alfa, beta) {
        var ris = "", ord = 0, len = message.length, c = "";
        for (var i = 0; i < len; i++) {
            c = message.charAt(i);
            ord = beta.indexOf(c);
            if (ord >= 0) {
                ris += alfa.charAt(ord);
            } else {
                ris += c;
            }
        }
        return ris;
    }
};

// Albam Cipher
CassiaJS.albam = {
    alfa: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    beta: "LMNOPQRSTUVWXYZABCDEFGHIJKlmnopqrstuvwxyzabcdefghijk1234567890",
    encrypt: function (message) {
        return CassiaJS.substitution.encrypt(message, this.alfa, this.beta);
    },
    decrypt: function (message) {
        return CassiaJS.substitution.decrypt(message, this.alfa, this.beta);
    }
};

// Alfabeto Carbonaro
CassiaJS.carbonaro = {
    alfa: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    beta: "OPGTIVCHEJKRNMABQLZDUFWXYSopgtivchejkrnmabqlzdufwxys",
    encrypt: function (message) {
        return CassiaJS.substitution.encrypt(message, this.alfa, this.beta);
    },
    decrypt: function (message) {
        return CassiaJS.substitution.decrypt(message, this.alfa, this.beta);
    }
};

// Atbash Cipher
CassiaJS.atbash = {
    alfa: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    beta: "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210",
    encrypt: function (message) {
        return CassiaJS.substitution.encrypt(message, this.alfa, this.beta);
    },
    decrypt: function (message) {
        return CassiaJS.substitution.decrypt(message, this.alfa, this.beta);
    }
};

// Caesar Cipher
CassiaJS.cesare = {
    alfa: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    beta: "DEFGHIJKLMNOPQRSTUVWXYZABCdefghijklmnopqrstuvwxyzabc3456789012",
    encrypt: function (message) {
        return CassiaJS.substitution.encrypt(message, this.alfa, this.beta);
    },
    decrypt: function (message) {
        return CassiaJS.substitution.decrypt(message, this.alfa, this.beta);
    }
};

// ROT-13
CassiaJS.rot13 = {
    alfa: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    beta: "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm",
    encrypt: function (message) {
        return CassiaJS.substitution.encrypt(message, this.alfa, this.beta);
    },
    decrypt: function (message) {
        return CassiaJS.substitution.decrypt(message, this.alfa, this.beta);
    }
};

// T9
CassiaJS.t9 = {
    alfa: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzèéàòù",
    beta: "222333444555666777788899992223334445556667777888999933268",
    encrypt: function (message) {
        return CassiaJS.substitution.encrypt(message, this.alfa, this.beta);
    }
};

// Additive Cipher
CassiaJS.additive = {
    alfa: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    encrypt: function (message, scostamento) {
        var ris = "", ord = 0, len = message.length, shift = parseInt(scostamento, 10), c = "";
        for (var i = 0; i < len; i++) {
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
    decrypt: function (message, scostamento) {
        var ris = "", ord = 0, len = message.length, shift = parseInt(scostamento, 10), c = "", r; 
        for (var i = 0; i < len; i++) {
            c = message.charAt(i);
            if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
                ord = this.alfa.indexOf(c);
                r = ord - shift;
                if (r < 0) { r += 52; }
                    ris += this.alfa.charAt(r);
                } else {
                    ris += c;
                }
        }
        return ris;
    }
};

// Base64 Encode
CassiaJS.base64 = {
    encrypt: function (message) {
        return btoa(message);
    },
    decrypt: function (message) {
        return atob(message);
    }
};

// Binary Encode
CassiaJS.binary = {
    encrypt: function (message) {
        var alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        beta = ["000000","000001","000010","000011","000100","000101","000110","000111","001000","001001","001010","001011","001100","001101","001110","001111","010000","010001","010010","010011","010100","010101","010110","010111","011000","011001","011010","011011","011100","011101","011110","011111","100000","100001","100010","100011","100100","100101","100110","100111","101000","101001","101010","101011","101100","101101","101110","101111","110000","110001","110010","110011"],
        ris = "", ord = 0, len = message.length, c = "";
        for (var i = 0; i < len; i++) {
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
    decrypt: function (message) {
        var alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        beta = ["000000","000001","000010","000011","000100","000101","000110","000111","001000","001001","001010","001011","001100","001101","001110","001111","010000","010001","010010","010011","010100","010101","010110","010111","011000","011001","011010","011011","011100","011101","011110","011111","100000","100001","100010","100011","100100","100101","100110","100111","101000","101001","101010","101011","101100","101101","101110","101111","110000","110001","110010","110011"],
        ris = "", len = message.length, c = "", trovato, j, cod;
        for (var i = 0; i < len - 5; i++) {
            c = "" + message.substring(i, i+6);
            trovato = false;
            j = 0;
            while ((j < 52) && (!trovato)) {
                cod = beta[j];
                if (c === cod) { ris += alfa.charAt(j); trovato = true; }
                j++;
            }
            if (!trovato) { ris += c.charAt(0); } else { i += 5; }
        }
        return ris;
    }
};

// Leet
CassiaJS.leet = {
    encrypt: function (message, version) {
        var testo = message.toUpperCase(), alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", beta,
        base = ["4","8","(","|)","3","F","G","H","1","J","K","L","M","N","0","P","Q","Я","5","7","U","V","W","><","Ұ","2"],
        avanzato = ["4","8","(","|)","3","ƒ","9","|-|","1","_/","|<","|_","/\\/\\","|\\|","0","|º","[,]","Я","5","7","|_|","\\./","\\X/","><","Ұ","2"];
        if ((version === "1") || (version === "base")) {
            beta = base;
        } else {
            beta = avanzato;
        }
        var ris = "", ord = 0, len = testo.length, c = "";
        for (var i = 0; i < len; i++) {
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
CassiaJS.morse = {
    encrypt: function (message, separator) {
        var Morse = [];
        Morse.A = '•—';
        Morse['À'] = '•—';
        Morse.B = '—•••';
        Morse.C = '—•—•';
        Morse.D = '—••';
        Morse.E = '•';
        Morse['È'] = '•';
        Morse['É'] = '•';
        Morse.F = '••—•';
        Morse.G = '——•';
        Morse.H = '••••';
        Morse.I = '••';
        Morse['Ì'] = '••';
        Morse.J = '•———';
        Morse.K = '—•—';
        Morse.L = '•—••';
        Morse.M = '——';
        Morse.N = '—•';
        Morse.O = '———';
        Morse['Ò'] = '———';
        Morse.P = '•——•';
        Morse.Q = '——•—';
        Morse.R = '•—•';
        Morse.S = '•••';
        Morse.T = '—';
        Morse.U = '••—';
        Morse['Ù'] = '••—';
        Morse.V = '•••—';
        Morse.W = '•——';
        Morse.X = '—••—';
        Morse.Y = '—•——';
        Morse.Z = '——••';
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
        var morse = "", ris = "", len = message.length, ch = "";
        for(var conta = 0; conta < len; conta++){
            ch  = message.charAt(conta);
            morse += Morse[ch] + separator;
        }
        ris = morse;
        return ris;
    },
    decrypt: function (message, separator) {
        var Morse = [];
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

        var ris = "", len = message.length, sequenza = "", ch = "";
        for(var conta = 0; conta < len; conta++){
            ch = message.charAt(conta);
            if (ch === separator) {
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
CassiaJS.onetimepad = {
    encrypt: function (message, key) {
        var ris = "", len = message.length, m = "", k = "", c;
        for (var i = 0; i < len; i++) {
            m = message.charCodeAt(i);
            k = key.charCodeAt(i % key.length);
            c = m + k;
            ris += String.fromCharCode(c);
        }
        return ris;
    },
    decrypt: function (message, key) {
        var ris = "", len = message.length, m = "", k = "", c;
        for (var i = 0; i < len; i++) {
            m = message.charCodeAt(i);
            k = key.charCodeAt(i % key.length);
            c = m - k;
            ris += String.fromCharCode(c);
        }
        return ris;
    }
};

// Pizzini
CassiaJS.pizzini = {
    encrypt: function (message) {
        message = message.toUpperCase();
        var alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        beta = ["4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29"],
        ris = "", ord = 0, len = message.length, c = "";
        for (var i = 0; i < len; i++) {
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
    decrypt: function (message) {
        message += "*";
        var alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        beta = ['4','5','6','7','8','9','0','1','2','3','4','5','6','7','8','9','0','1','2','3','4','5','6','7','8','9'],
        ris = "", len = message.length, c = "", trovato = false, j = 0;
        for (var i = 0; i < len - 1; i++) {
            c = message.charAt(i);
            trovato = false;
            j = 0;
            if (c === '1') { 
                j = 6;
                i++;
                c = message.charAt(i);
            } else 
                if (c === '2') {
                    j = 16;
                    i++;
                    c = message.charAt(i);
                }
            while ((j < 26) && (!trovato)) {
                if (c === beta[j]) {
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
CassiaJS.polibio = {
    encrypt: function (message) {
        message = message.toUpperCase();
        var alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        beta = ["11","12","13","14","15","21","22","23","24","24","25","31","32","33","34","35","41","42","43","44","45","51","52","53","54","55"],
        ris = "", ord = 0, len = message.length, c = "";
        for (var i = 0; i < len; i++) {
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
    decrypt: function (message) {
        message = message + " ";
        var alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        beta = ["11","12","13","14","15","21","22","23","24","24","25","31","32","33","34","35","41","42","43","44","45","51","52","53","54","55"],
        ris = "", len = message.length, c = "", d = "", num, trovato = false, j = 0;
        for (var i = 0; i < len - 5; i++) {
            c = "" + message.charAt(i);
            d = "" + message.charAt(i+1);
            num = c + d;
            trovato = false;
            j = 0;
            while ((j < 26) && (!trovato)) {
                if (num === beta[j]) {
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
CassiaJS.pollux = {
    encrypt: function (message, cpunto, clinea, cplus) {
        message = message.toUpperCase();
        var morse = "", ris = "";

        morse = CassiaJS.morse.encrypt(message, "+");

        var Cifrante = [];
        Cifrante['•'] = cpunto;
        Cifrante['—'] = clinea;
        Cifrante['+'] = cplus;

        var len = morse.length, sposta = 0, ch;
        for(var conta = 0; conta < len; conta++){
            ch  = morse.charAt(conta);
            sposta = Cifrante[ch].length * Math.random();
            ris += Cifrante[ch].charAt(sposta);
        }
        return ris;
    },
    decrypt: function (message, cpunto, clinea, cplus) {
        var morse = "", ris = "", len = message.length, ch = "";
        
        for(var conta = 0; conta < len; conta++){
            ch  = message.charAt(conta);
            if (cpunto.indexOf(ch) >= 0) { morse += '•'; }
            if (clinea.indexOf(ch) >= 0) { morse += '—'; }
            if (cplus.indexOf(ch) >= 0) { morse += '+'; }
        }

        ris = CassiaJS.morse.decrypt(morse, "+");
        
        return ris;
    }
};

// VIC Cipher
CassiaJS.vic = {
    encrypt: function (message, key) {
        message = message.toUpperCase();
        var alfa = "ETAONRISBCDFGHJKLMPQ/UVWXYZ.",
        beta = ["0","1","3","4","5","7","8","9","20","21","22","23","24","25","26","27","28","29","60","61","62","63","64","65","66","67","68","69"],
        ris = "", ord = 0, len = message.length, c = "";
        // codifica da lettere a numeri
        for (var i = 0; i < len; i++) {
            c = message.charAt(i);
            if ((c >= 'A' && c <= 'Z') || c === '/' || c === '.') {
                ord = alfa.indexOf(c);
                ris += beta[ord];
            } else {
                ris += c;
            }
        }
        // modifica dei numeri in base alla chiave
        len = ris.length;
        var risultato = "", a, b, d;
        for (var i = 0; i < len; i++) {
            c = ris.charAt(i);
            if (c >= '0' && c <= '9'){
                a = parseInt(c, 10);
                b = parseInt(key.charAt(i % key.length), 10);
                d = a + b;
                if (d > 9) { d = d - 10; }
                risultato += String(d);
            } else {
                risultato += c;
            }
        }
        return risultato;
    },
    decrypt: function (message, key) {
        var originale = message + "*", testo = "",
        alfa = "ETAONRISBCDFGHJKLMPQ/UVWXYZ.",
        beta = ["0","1","3","4","5","7","8","9","0","1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9"],
        risultato = "", c = "", a , b, d;
        // modifica dei numeri in base alla chiave
        var len = originale.length;
        for (var i = 0; i < len; i++) {
            c = originale.charAt(i);
            if (c >= '0' && c <= '9'){
                a = parseInt(c, 10);
                b = parseInt(key.charAt(i % key.length), 10);
                d = a - b;
                if (d < 0) { d = d + 10; }
                testo += String(d);
            } else {
                testo += c;
            }
         }
        // codifica da numeri a lettere
        len = testo.length;
        var trovato = false, j = 0;
        for (var i = 0; i < len - 1; i++) {
            c = testo.charAt(i);
            trovato = false;
            j = 0;
            if (c === '2') { 
                j = 8; 
                i++; 
                c = testo.charAt(i); 
            } else {
                if (c === '6') {
                    j = 18;
                    i++;
                    c = testo.charAt(i);
                }
            }
            while ((j < 28) && (!trovato)) {
                if (c === beta[j]) {
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
CassiaJS.randombreak = {
    encrypt: function (message, reversing) {
        message = message.replace(/ /g, "");
        var len = message.length, tmp = "", j, ris = "";
        for (var i = 0; i < len; i++) {
            j = Math.floor(Math.random() * 6 + 2);
            if (len < i + j) {
                j = len - i;
            }
            tmp = tmp + message.substring(i, i + j) + " ";
            i += j - 1;
        }
        if (reversing) {
            len = tmp.length;
            for (i = 0; i < len; i++) {
                ris = tmp.charAt(i) + ris;
            }
        } else {
            ris = tmp;
        }
        return ris;
    },
    decrypt: function (message, reversing) {
        var ris = message.replace(/ /g, "");
        if (reversing) {
            var len = ris.length, tmp = "";
            for (var i = 0; i < len; i++) {
                tmp = ris.charAt(i) + tmp;
            }
            ris = tmp;
        }
        return ris;
    }
};

// TRANSPOSITION CIPHER
CassiaJS.transposition = {
    encrypt: function (message, cols) {
        if (cols < 2) {
            log("error", "cols parameter cannot be < 2. Your input: " + cols);
            return;
        }
        if (cols > message.length) {
            log("error", "cols parameter cannot be higher than message length. Your input: " + cols);
            return;
        }
        // riempimento del testo con caratteri nulli
        var resto = message.length % cols;
        resto = (cols - resto) % cols;
        for (var i = 0; i < resto; i++){
            message += 'x';
        }
        // trasposizione
        var ris = "", righe = message.length / cols;
        for (var colonna = 0; colonna < cols; colonna++) {
            for (var conta = 0; conta < righe; conta++) {
                ris += message.charAt(colonna + (cols * conta));
            }
        }
        return ris;
    },
    decrypt: function (message, cols) {
        if (cols < 2) {
            log("error", "cols parameter cannot be < 2. Your input: " + cols);
            return;
        }
        if (cols > message.length) {
            log("error", "cols parameter cannot be higher than message length. Your input: " + cols);
            return;
        }
        // de-trasposizione
        var ris = "", righe = message.length / cols;
        for (var conta = 0; conta < righe; conta++) {
            for (var colonna = 0; colonna < cols; colonna++) {
                ris += message.charAt(conta + (righe * colonna));
            }
        }
        return ris;
    }
};

// READING KEY
CassiaJS.reading = {
    generate: function (level) {
        if (level === "") {
            log("error", "Insert a level to generate a key");
            return;
        }
        for (var i = 0; i < level.length; i++) {
            if ((level.charAt(i) < "0") || (level.charAt(i) > "9")) {
                log("error", "Level is not valid, insert a positive integer number < 30.");
                return;
            }
        }
        var ris = "1 \b", tmp = "", num = parseInt(level, 10), len;
        if ((num <= 30) && (num >= 0)) {
            for (var i = 0; i < num; i++) {
                len = ris.length - 2;
                for (var j = 0; j < len; j++) {
                    if (ris.charAt(j) === ris.charAt(j + 1)) {
                        if (ris.charAt(j + 1) === ris.charAt(j + 2)) {
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
CassiaJS.fibonacci = {
    generate: function (level, separator) {
        if (level === "") {
            log("error", "Insert a level to generate a key");
            return;
        }
        for (var i = 0; i < level.length; i++) {
            if ((level.charAt(i) < "0") || (level.charAt(i) > "9")) {
                log("error", "Level is not valid, insert a positive integer number < 91.");
                return;
            }
        }
        var ris = "0" + separator + "1", n1 = 0, n2 = 1, t, num = parseInt(level, 10);
        if ((num <= 91) && (num > 0)) {
            for (var i = 0; i < num; i++) {
                t = n2;
                n2 += n1;
                n1 = t;
                ris += separator + n2;
            }
            return ris;
        } else {
            log("error", "Level is not valid, insert a positive integer number < 91.");
        }
    }
};

// 3n+1 SERIE
CassiaJS.serie3n1 = {
    generate: function (input, separator) {
        if (input === "") {
            log("error", "Insert a number to generate a key");
            return;
        }
        for (var i = 0; i < input.length; i++) {
            if ((input.charAt(i) < "0") || (input.charAt(i) > "9")) {
                log("error", "The specified input is not valid, insert a positive integer");
                return;
            }
        }
        if (parseInt(input, 10) < 1) {
            log("error", "The specified input is not valid, insert a positive integer");
            return;
        }
        var ris = "", num = parseInt(input, 10);
        while (num !== 1) {
            if ((num % 2) === 0) {
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
CassiaJS.randomkey = {
    generate: function (length, charset) {
        if (charset === "") {
            log("error", "Insert a charset to generate a key");
            return;
        }
        var ris = "", l = charset.length;
        for (var i = 0; i < length; i++) {
            ris += charset.charAt(Math.floor(Math.random() * l));
        }
        return ris;
    }
};
