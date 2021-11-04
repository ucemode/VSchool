const readlineSync = require("readline-sync");
const name = readlineSync.question("what is your name?");
    console.log("hello," + name);

if(readlineSync.keyInYN("would you like to play Escape Room?")){
    console.log("just arrived!")}
// }else {

//     Process.exit();
// }
let userAlive = true

foundKey = false
gameOver = false
while (gameOver === false) {
const decisions = ["put your hand in the hole", "found the key", "open the door",]
let index = readlineSync.keyInSelect(decisions, "what would you like to do?");
    if(0 === index) {
        console.log("hand is stuck")
        gameOver = true
    }else if(1 === index) {
        console.log("you found the key")
        foundKey = true
    }else if (2 === index) {
        if (foundKey === false) {
            console.log("you need the key")
            } else {
            console.log("you have the key, go while you can")}
            gameOver = true
            // Process.exit ();
    // }else{
    //     console.log("Congrats")
    }}
// function handInHole(){
//     console.log("hand is stuck")
//     // userAlive = false
// }
// function foundKey (){
//     console.log("you found the key")
//     userAlive = true
// }
// function openDoor(parameter){
//     if(parameter == false)
//     console.log("Try the door")
// }
//     else {
//     console.log("congrats, you've escaped")

// }
// }


