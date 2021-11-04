var num = 4
function outer(num){
function inner(){
    var num = 2
}
inner();
console.log(num)
}