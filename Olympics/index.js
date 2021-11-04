var text = ["this is not for me", "you got to be kidding me"];
var counter = 0;
var elem = document.getElementById("primary");
var inst = setInterval(change, 1000);

function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }

}

