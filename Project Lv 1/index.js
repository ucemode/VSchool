
const readlineSync = require("readline-sync");

const name = readlineSync.question("what is your name?"); {
    console.log("hi" + name + "!");
}

const user = {
    name: "",
    alive: true,
    items: [ ],
    ap: 40,
    hp: 40
}    
//var enemy = null;
const chanceofNewEnemy = .10;

const scare = {
    name: "Scarecrow",
    loot: "brain",
    ap: 30,
    hp: 20
};

const tin = {
    name: "Tin-Man",
    loot: "heart",
    ap: 40,
    hp: 30
};

const lion = {
    name: "Lion",
    loot: "courage",
    // ap: 50,...user.alive.valueOf...0  /////m                 
    hp: 40
};

function meetEnemy (){
    const enemies = [scare, tin, lion];
    return enemies[Math.floor(Math.random() * enemies.length)];
}
function walk() {
    const odds = Math.random();
    if (odds > .5) {
        console.log("you free to go")
    }
    else {
        enemyAttack();
    }
}

function enemyAttack () {
   var enemy = meetEnemy();
   // meetEnemy === null && Math.random() < chanceofNewEnemy;
        console.log(enemy.name, "attacked");
        while (user.alive === true && enemy.hp >= 0) {
            if(userSelect a ===)

        }
        // while enemy is alive and player is alive
}
function inventory(items) {
    if(enemyAttack == scare){
        return items.push(scare.loot);
    }
    if(enemyAttack == tin){
        return items.push(tin.loot);
    }
    if(enemyAttack == lion){
        return items.push(lion.loot); 
    }
}        
function hitPoints(hp){
    console.log(hp);

}
while (user.alive) {
    const userSelect = readlineSync.keyIn("[a]attack,[w]walk,[q]quit,[r]run",{
        limit: "awqr",
    })
    if (userSelect == "w") {
        walk();
    } else if (userSelect == "q") {
        console.log("Your soul is mine!");
       user.alive = false
    }else if (userSelect == "a") {
        console.log("Its on!");
 enemyAttack();
    }else if (userSelect == "r"){
        console.log("Your scared!");
    }
}   

    