// Write a function that takes an array of numbers and returns the largest (without using Math.max())

// largest([3, 5, 2, 8, 1]) // => 8
const numbers = [3, 5, 2, 8, 1];

const largestNumber = (values) => {
    let highest = 0;
    for (let i=0; i<values.length; i+=1) {
        if(values[i] > highest) {
            highest = values[i];
        }
    } return highest;
}   

console.log(largestNumber(numbers))





// Write a function that takes an array of words and a character and returns each word that has that character present.

// lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]

let strings = ["#3", "$$$", "C%4!", "Hey!", "!"]
    function charFind(strings, char){
        const final = []
    return char.includes("!")
}
    console.log(charFind(strings, "!"))