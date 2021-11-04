
const readlineSync = require("readline-sync");

const name = readlineSync.question("what is your name?"); 
    console.log("hi" + name + "!");


const user = {
    name: "",
    life: 100,
    inventory: []
}    
//var enemy = null;
const chanceofNewEnemy = .30;


const enemies = [
   {name: "Scarecrow",
    loot: "brain",
    ap: 30,
    hp: 20
},

 {  name: "Tin",
    loot: "heart",
    ap: 40,
    hp: 30
},
{ 
    name: "Lion",
    loot: "courage",
    // ap: 50,...user.alive.valueOf...0  /////m                 
    hp: 40
}];
class Enemy {
    constructor(name, loot, health){
        this.name = name,
        this.loot = loot,
        this.health = health
    }
}

function walk() {
    const odds = Math.floor(Math.random() * 4);
    if (odds > .5) {
        console.log("you free to go")
    }


function meetEnemy (){
    // const enemies = ["scarecrow", "tin", "lion"];
    const enemies = Math.floor(Math.random() * enemies.length)
        if (Enemy === 0){
            return new Enemy("scarecrow", 20, "brain")
          }else if (Enemy === 1){
              return new Enemy("Tin", 15, "heart")
          }else{
              return new Enemy("lion", 25, "courage")
          }
    }
}   
// function fight() {
//         const opponent = enemies.splice(Math.floor(Math.random() * enemies.length), 1)
//         console.log("opponent", opponent)
//         let target = new Enemy(opponent[0].name, opponent[0]);
//         console.log("target", target) 
//     }
//         enemyAttack()

function enemyAttack () {
    let thisEnemy = Enemy();
    let fighting = true;
    console.log("you've encountered" + thisEnemy.name);

    while(fighting){
        const fight = readlineSync.keyInSelect(fightOpts,"attack or Run!");

    }
    startGame();
    while(game){}
    meetEnemy === null && Math.random() < chanceofNewEnemy;
    const userSelect = readlineSync.keyIn("[a]attack,[r]run",{limit: "ar"})   
    console.log(Enemy.name, "attacked");
         while (user === true && Enemy.hp >= 0) {
             if(userSelect [a] === "a"){
                 let enemyDamage = Math.floor(Math.random())
                 enemies.health = enemies.health - enemyDamage
                 console.log(enemies.name + "takes" + enemyDamage + "damage and now has" + enemies.hp)
             }

while (user.alive) {
    const userSelect = readlineSync.keyIn("[w]walk,[i]inventory,[q]quit",{
        limit: "wiq",
    })
    if (userSelect == "w") {
        if (Math.random() <= chanceofNewEnemy) {
            console.log('you run into a ' + meetEnemy())
            // const userSelect = readlineSync.keyIn("[a]attack,[r]run",{limit: "ar"})


        } else {
            console.log('youre free to go')
        }
        console.log("Keep going");
    } else if (userSelect == "q") {
        console.log("Your soul is mine!");
       user.alive = false
    } else {

    }
    //else if (userSelect == "a") {
   //     console.log("Its on!");
   //     meetEnemy(userSelect)
   //     eneymyattack()
   // }else if (userSelect == "r"){
   //     console.log("Your scared!");
   // }    



        // }
        // while enemy is alive and player is alive
// }
// function walk() {
//         const odds = Math.random();
//         if (odds > .5) {
//             console.log("you free to go")
//         }



// function inventory(items) {
//     if(enemyAttack == scare){
//         return items.push(scare.loot);
//     }
//     if(enemyAttack == tin){
//         return items.push(tin.loot);
//     }
//     if(enemyAttack == lion){
//         return items.push(lion.loot); 
//     }
// }        
// function hitPoints(hp){
//     console.log(hp);

}}

}   
        
// const walking = readlineSync.keyIn("enter 'p' to see player status:",{limit:"p"});
// }  const userAlive = walking === ("p") 
//     console.log(user)
    
