const form = document["Groceries"]


form.addEventListener("add", function(event){
    event.preventDefault()

    const list = form.list.value
    form.list.value = ""


const h1 = document.createElement("h1")
h1.textContent = list + " "
document.getElementsByTagName("body")[0].append(h1)
})
