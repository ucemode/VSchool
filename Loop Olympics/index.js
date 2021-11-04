const fruit = ["banana", "orange", "apple", "kiwi"]
    for(var i = 0; i < fruit.length; i++) {
        console.log(fruit[i])
    }

// for (var i = 0; i < 10; i++){
//     var numbers = [i]
//     console.log(numbers.push(i))
   

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
]
  for(var i = 0; i < peopleArray.length; i++){
  console.log(peopleArray[i].name)
  }
  for(var i = 0; i < peopleArray.length; i ++){
      console.log(peopleArray[i].occupation)
  }

  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations