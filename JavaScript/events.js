var after = document.getElementById("after")
var before = document.getElementById("before")
var inside = document.getElementById("inside")
var content = document.getElementById("content")
var container = document.getElementById("container")
var dollar = document.getElementById("dollar")
var pound = document.getElementById("pound")
var namein = document.getElementById("namein")
var passin = document.getElementById("passin")
var emailin = document.getElementById("emailin")
container.style.height = "250px"
container.style.backgroundColor = "yellow"

after.addEventListener("click", ()=>{
    container.after(content)
})

before.addEventListener("click", ()=>{
    container.before(content)
})

inside.addEventListener("click", ()=>{
    container.append(content)
})

dollar.addEventListener("keyup", ()=>{
    pound.value = dollar.value * 49
    if(pound.value == 0 || dollar.value == 0){
        pound.value = ""
        dollar.value = ""
    }
})

pound.addEventListener("keyup", ()=>{
    dollar.value = pound.value / 49 
    if(pound.value == 0 || dollar.value == 0){
        pound.value = ""
        dollar.value = ""
    }    
})

emailin.addEventListener("invalid", ()=>{
    document.title = "hello"
    emailin.value = "hello"
})