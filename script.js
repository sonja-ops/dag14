// Green Square
const squareGreenHide = document.querySelector("#squareGreenHide")

const squareGreenButon = document.querySelector("#squareGreenButon")

console.log(squareGreenHide, squareGreenButon)

squareGreenButon.addEventListener("click", function() {
    console.log("Buton is cliked!")

    squareGreenHide.classList.toggle("hidden")
})

// Red Square
const squareRedShowText = document.querySelector("#squareRedShowText")
const squareRedButon = document.querySelector("#squareRedButon")
console.log(squareRedButon, squareRedShowText)


squareRedButon.addEventListener("click",function() {
    console.log("Buton is cliked")
} )
const squareRedText = document.createElement("p")
console.log(squareRedText)

squareRedText.textContent = "jeg er tekst i en rød boks"

squareRedText.classList.add("hiden")

squareRedShowText.appendChild(squareRedText)

squareRedButon.addEventListener("click", function() {
    console.log("Buton is cliked")
    squareRedText.classList.toggle("hidden")
})

//Blue Square
const squareBlueShowImg = document.querySelector("#squareBlueShowImg")
const squareBlueButon = document.querySelector("#squareBlueButon")
console.log(squareBlueShowImg, squareBlueButon)

const squareBlueImg = document.createElement("img")
squareBlueImg.src = "hamburger.png"
squareBlueImg.alt = "hamburger icon"

squareBlueImg.classList.add("hamburgerIcon")
squareBlueImg.classList.add("hiden")

squareBlueShowImg.appendChild(squareBlueImg)

squareBlueButon.addEventListener("click", function() {
    console.log("Buton is kliked")
    squareBlueImg.classList.toggle("hidden")
})

