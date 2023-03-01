
let itemList = [];

let list = document.getElementById("lista");

let counter = -1;

let itemEl;

let newEl;

let btn = document.getElementById("btn")

btn.addEventListener("click", function(){

    newEl = document.getElementById("add").value;

    console.log(newEl)

    itemList.push(newEl);
    
    while (counter < itemList.length - 1) {
    
        counter++;
    
        itemEl = document.createElement("div");
    
        itemEl.innerHTML = itemList[counter];
    
        list.append(itemEl);
    
        itemEl.classList.add("product");
    }

});

