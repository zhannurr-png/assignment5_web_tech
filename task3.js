const block = document.getElementById("myBlock")
const colorButton = document.getElementById("colorButton")
const fontButton = document.getElementById("fontButton")

colorButton.addEventListener("click", function(){
    block.style.backgroundColor = "lightblue";
})

fontButton.addEventListener("click", function(){
    block.style.fontSize = "24px";
})