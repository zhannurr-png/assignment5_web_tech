const paragraph = document.getElementById("myParagraph");
const button = document.getElementById("changeButton");

button.addEventListener("click", function() {
    paragraph.textContent = "The text has been changed";
});