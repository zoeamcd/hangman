/**
 * Created by h205p2 on 10/26/16.
 */
var words = [["h","e","l","l","o"],["a","p","p","l","e"],["i","n","d","e","x"],["c","h","i","n","a"],["l","a","u","g","h"],["r","o","d","e","o"]];
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);
function testLetter() {

    document.getElementById("letters guessed").innerHTML += document.getElementById("letter").value + "  ";

    if(document.getElementById("count").innerHTML > 0) {
        document.getElementById("count").innerHTML -- ;

        for (var i = 0; i < word.length; i++) {
            if(document.getElementById("letter").value == word[i]) {
                document.getElementById("box" + i).innerHTML = document.getElementById("letter").value;

            }
        }
    }
    if(document.getElementById("box0").innerHTML != "" &&
        document.getElementById("box1").innerHTML != "" &&
        document.getElementById("box2").innerHTML != "" &&
        document.getElementById("box3").innerHTML != "" &&
        document.getElementById("box4").innerHTML != ""){
        document.getElementById("output").innerHTML = "you win!";
    }
    else if(document.getElementById("count").innerHTML == 0) {
        document.getElementById("output").innerHTML = "try again"
    }

}

