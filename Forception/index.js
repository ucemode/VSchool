var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"



function forception(people, alphabet){
    const lists = []
    for(var i = 0; i < people.length; i++){
        lists.push(people[i])
    for(var i = 0; i < alphabet.length; i++){
        lists.push(alphabet[i])
    } 
}
return lists
}

console.log(forception(people, alphabet))