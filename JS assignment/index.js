let colors = ["blue", 'red', 'yellow', 'green', 'orange']

let myDiv = document.getElementById("primary");

myDiv.addEventListener("mouseover", function(e){
    console.log(e)
    e.target.style.backgroundColor = "blue"
})
    console.log(myDiv)

myDiv.addEventListener("mousedown", function(e){
    console.log(e)
    e.target.style.backgroundColor = "red"
})

myDiv.addEventListener("dblclick", function(e){
    console.log(e)
    e.target.style.backgroundColor = "green"
})

myDiv.addEventListener("wheel", function(e){
    console.log(e)
    e.target.style.backgroundColor = "orange"
})
