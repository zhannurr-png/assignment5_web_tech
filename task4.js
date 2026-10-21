const list = document.getElementById("myList")
const createButton = document.getElementById("createButton")
const removeButton = document.getElementById("removeButton")

let itemCount = list.children.length;

createButton.addEventListener("click", function(){
    itemCount++;

    const newItem = document.createElement("li");
    newItem.textContent = "Item " + itemCount;

    list.appendChild(newItem);
});

removeButton.addEventListener("click", function(){
    if(list.lastElementChild){
        list.removeChild(list.lastElementChild);
        itemCount--;
    };
});