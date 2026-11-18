var container = document.createElement("div")
container.className = "main"

// container.style.display = "flex"
// container.style.justifyContent = "space-between"
// container.style.gap = "10px"
container.style.textAlign = "center"


document.body.appendChild(container)


function newElement(userName, userAge, imgSrc){

    // declare elments
    let card = document.createElement("div")
    let h1 = document.createElement("h1")
    let h2 = document.createElement("h2")
    let img = document.createElement("img")

    // add classes
    card.className = "card"

    // declar content
    let h1Content = document.createTextNode(userName)
    let h2Content = document.createTextNode(`${userAge} years old`)
    img.src = imgSrc

    // append elemnts to card
    card.appendChild(h1)
    card.appendChild(h2)
    card.appendChild(img)

    // append content to elements
    h1.appendChild(h1Content)
    h2.appendChild(h2Content)

    // style all elements
    card.style.width = "200px"
    // card.style.height = "300px"
    card.style.padding = "10px"
    card.style.margin = "2px"
    card.style.display = "inline-block"
    card.style.backgroundColor = "#20f5"

    h1.style.fontSize = "32px"

    h2.style.fontSize = "32px"

    img.style.width = "100%"
    img.style.maxHeight = "150px"


    // add all to html website
    container.appendChild(card)

}

for(let i = 0; i < 1; i++){
    newElement("Mostafa", 16, "images/1.jpg")
}