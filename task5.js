const box = document.getElementById("colorBox")

box.addEventListener("mouseover", function(){
    box.style.backgroundColor = "hotpink";
})

box.addEventListener("mouseout", function(){
    box.style.backgroundColor = "cornflowerblue";
})