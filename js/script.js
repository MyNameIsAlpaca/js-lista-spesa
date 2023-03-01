
let itemList = ["latte", "uova", "bacon", "PlayStation 5"];

let list = document.getElementById("lista");

let counter = -1;

let itemEl;


while (counter < itemList.length - 1) {

    counter++;

    itemEl = document.createElement("div");

    itemEl.innerHTML = itemList[counter];

    list.append(itemEl);

    itemEl.classList.add("product");
}


console.log(itemEl);   