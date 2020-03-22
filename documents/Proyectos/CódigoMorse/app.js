var displayVocabulary = document.getElementById("displayVocabulary");

displayVocabulary.style.display="none";


//MAIN MENU 
var menu = document.getElementById("menu");
var morseCodeButton = document.getElementById("morseCodeButton"); //Button
var vocabularyButton  = document.getElementById("vocabularyButton"); //Button

//MORSECODE INTERFACE
var morseCodeInterface = document.getElementById("morseCodeInterface");
var vocabularyInterface = document.getElementById("vocabularyInterface");

morseCodeInterface.style.display = "none";
vocabularyInterface.style.display = "none";



morseCodeButton.addEventListener("click", function(){ morseCodeInterface.style.display = "block"; menu.style.display="none"; });

var morseButton = document.getElementById("morseButton"); //Button

morseButton.addEventListener("click", function (){
    let morseInput = document.getElementById("morseInput").value;
    morseInput = morseInput.toUpperCase();

    if (morseInput!="") {
        let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ';
        let morsecode =['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-','-.--', '--..',
                        '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..','----.','-----',']   ['];
        let morseArray = [];
        let length = abc.length;

        for(let i = 0; i < morseInput.length; i++)
        {
            for(let j = 0; j < length; j++)
            {
                if (morseInput.charAt(i) == abc.charAt(j))
                {
                    morseArray[i] = j; 
                }
            }   
        }

        let convert = "";
        for (let index = 0; index < morseArray.length; index++) {
            convert += morsecode[morseArray[index]];
        }

        console.log(convert);
        displayVocabulary.innerHTML = "<p class='m-3 text-white' style='font-size: 30px; font-weigth: 10000'>"+ "[" + convert+ "]" +"</p>";
        displayVocabulary.style.display="block";
    }    

});



vocabularyButton.addEventListener("click", function () { vocabularyInterface.style.display = "block"; menu.style.display="none";});

var vocaButton  = document.getElementById("vocaButton"); //Button
var vocabularyInput = document.getElementById("vocabularyInput");

var a = document.getElementById("A");
var b = document.getElementById("B");
var c = document.getElementById("C");
var d = document.getElementById("D");
var e = document.getElementById("E");
var f = document.getElementById("F");
var g = document.getElementById("G");
var h = document.getElementById("H");
var i = document.getElementById("I");
var j = document.getElementById("J");
var k = document.getElementById("K");
var l = document.getElementById("L");
var m = document.getElementById("M");
var n = document.getElementById("N");
var o = document.getElementById("O");
var p = document.getElementById("P");
var q = document.getElementById("Q");
var r = document.getElementById("R");
var s = document.getElementById("S");
var t = document.getElementById("T");
var u = document.getElementById("U");
var v = document.getElementById("V");
var w = document.getElementById("W");
var x = document.getElementById("X");
var y = document.getElementById("Y");
var z = document.getElementById("Z");

a.addEventListener("click", function(){vocabularyInput.value += "A"});
b.addEventListener("click", function(){vocabularyInput.value += "B"});
c.addEventListener("click", function(){vocabularyInput.value += "C"});
d.addEventListener("click", function(){vocabularyInput.value += "D"});
e.addEventListener("click", function(){vocabularyInput.value += "E"});
f.addEventListener("click", function(){vocabularyInput.value += "F"});
g.addEventListener("click", function(){vocabularyInput.value += "G"});
h.addEventListener("click", function(){vocabularyInput.value += "H"});
i.addEventListener("click", function(){vocabularyInput.value += "I"});
j.addEventListener("click", function(){vocabularyInput.value += "J"});
k.addEventListener("click", function(){vocabularyInput.value += "K"});
l.addEventListener("click", function(){vocabularyInput.value += "L"});
m.addEventListener("click", function(){vocabularyInput.value += "M"});
n.addEventListener("click", function(){vocabularyInput.value += "N"});
o.addEventListener("click", function(){vocabularyInput.value += "O"});
p.addEventListener("click", function(){vocabularyInput.value += "P"});
q.addEventListener("click", function(){vocabularyInput.value += "Q"});
r.addEventListener("click", function(){vocabularyInput.value += "R"});
s.addEventListener("click", function(){vocabularyInput.value += "S"});
t.addEventListener("click", function(){vocabularyInput.value += "T"});
u.addEventListener("click", function(){vocabularyInput.value += "U"});
v.addEventListener("click", function(){vocabularyInput.value += "V"});
w.addEventListener("click", function(){vocabularyInput.value += "W"});
x.addEventListener("click", function(){vocabularyInput.value += "X"});
y.addEventListener("click", function(){vocabularyInput.value += "Y"});
z.addEventListener("click", function(){vocabularyInput.value += "Z"});


var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");
var zero = document.getElementById("0");


var clear = document.getElementById("clear");

one.addEventListener("click", function(){  vocabularyInput.value += 1});
two.addEventListener("click", function(){  vocabularyInput.value += 2});
three.addEventListener("click", function(){vocabularyInput.value += 3});
four.addEventListener("click", function(){ vocabularyInput.value += 4});
five.addEventListener("click", function(){ vocabularyInput.value += 5});
six.addEventListener("click", function(){  vocabularyInput.value += 6});
seven.addEventListener("click", function(){vocabularyInput.value += 7});
eight.addEventListener("click", function(){vocabularyInput.value += 8});
nine.addEventListener("click", function(){ vocabularyInput.value += 9});
zero.addEventListener("click", function(){ vocabularyInput.value += 0});

clear.addEventListener("click", function(){vocabularyInput.value = ""});

