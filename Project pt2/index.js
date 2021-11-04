const readlineSync = require("readline-sync");

const name = readlineSync.question("What is your name? ");{
console.log("Hi" + name + "!");
}



const user = {
    name: name,
    life: 100,
    inventory: []

}

let gameOver = false
while (gameOver === false) {
    walkOn = readlineSync.keyIn("[w]walk, [i]inventory, [p]profile, or [q]quit? ", { limit: "wiqp" })
    if (walkOn === 'w') {
        walking();
    } else if (walkOn === "q") {
        quit();
    } else if (walkOn === "i") {
        console.log(user.inventory)
    } else if (walkOn === "p") {
        console.log(user)
    }
}
// function walk() {
//     const odds = Math.floor(Math.random() * 4);
//     if (odds > .5) {
//         console.log("you free to go")
//     }
function walking() {
    const odds = Math.floor(Math.random() * 4)
    if (odds === 0) {
        fight = true;
        battle();

    } else {
        console.log("Where are you!")
        return;
    }
}

function quit() {
    console.log("your soul is mine!")
    gameOver = true;

}
// function enemyAttack () {
//     let thisEnemy = Enemy();
//     let fighting = true;
//     console.log("you've encountered" + thisEnemy.name);

function battle() {
    let fight = true
    const enemies = enemySelection()

    function enemySelection() {
        const whichEnemy = Math.floor(Math.random() * 3)
        if (whichEnemy === 0) {
            return new Enemy("scarecrow", 50, "brain")
        } else if (whichEnemy === 1) {
            return new Enemy("tinman", 65, "heart")
        } else {
            return new Enemy("lion", 70, "courage")
        }
    }

    function Enemy(name, health, item) {
        this.name = name
        this.health = health
        this.item = item
    }


    console.log("Guess who it is " + enemies.name + " Give me your soul? ")
    while (fight) {
        const fightOrRun = readlineSync.keyIn("[r]run little boy, [a]attack like a man! ", { limit: "ra" });
        if (fightOrRun === "a") {
            let enemyDamage = Math.floor(Math.random() * 10)
            enemies.health = enemies.health - enemyDamage
            console.log("the " + enemies.name + " took " + enemyDamage + " damage and now has " + enemies.health + " health")



            let userDamage = Math.floor(Math.random() * 5)
            user.life = user.life - userDamage
            console.log("you took " + userDamage + " damage from the " + enemies.name + " you now have " + user.life + " health")

            if (enemies.health - enemyDamage <= 0) {
                console.log(name + " finished him! " + enemies.name + " give it back")
                user.inventory.push(enemies.item)
                fight = false
                return;

            }

            if (user.health - userDamage <= 0) {
                console.log("you got lucky " + enemies.name + " I'll be back.")
                gameOver = true;
                return;

            }
        } else if (fightOrRun === "r") {
            console.log("attack like a man")
            let chanceOfEscape = Math.floor(Math.random() * 2)
            if (chanceOfEscape === 0) {
                console.log("and you manage to escape for now")
                fight = false
                return;
            } else if (chanceOfEscape === 1) {
                console.log("but the " + enemies.name + "," + " was too fast. Prepare for battle!")
                fight = true
            }
        }

    }
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

  
        
// const walking = readlineSync.keyIn("enter 'p' to see player status:",{limit:"p"});
// }  const userAlive = walking === ("p") 
//     console.log(user)