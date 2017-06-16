// Date started:    15th June, 2017
// Date completed:  16th June, 2017

const input = (process.argv[2]).toUpperCase();
const toLeet = process.argv[3];

var toLeetLang = {}; // English -> Leetlang
var fromLeetLang = {}; // Leetlang -> English

var buildLeetLang = function() {
    const lang = ["A", 4, "B", 6, "E", 3, "I", "|", "L", 1, "M", "(V)", "N", "(\)", "O", 0, "S", 5, "T", 7, "V", "\/", "W", "`//"];
    for(var i = 0; i < lang.length; i += 2) {
        toLeetLang[lang[i]] = lang[i + 1];
        fromLeetLang[lang[i + 1]] = lang[i];
    }
}

buildLeetLang();

var output = "";
console.log(toLeet);

if(toLeet === "1") {
    for(var i = 0; i < input.length; i++) {
        output += toLeetLang[input.charAt(i)];
    }
    console.log("Leetified: " + input + " --> " + output);
} else {
    for(var i = 0; i < input.length; i++) {
        output += fromLeetLang[input.charAt(i)];
    }
    console.log("Deleetified: " + input + " --> " + output);
}



