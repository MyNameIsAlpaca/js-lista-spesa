
let itemList = [];

let list = document.getElementById("listProduct");

let counter = 0;

let itemEl;

let newEl;

let btn = document.getElementById("btn")

let erase = document.getElementById("btn-erase")


btn.addEventListener("click", function(){
    
    newEl = document.getElementById("add").value;

    if (newEl == "") {
        alert("Aggiungi qualcosa")
    } else {

        itemList.push(newEl);
        
        while (counter < itemList.length) {
            counter++;

            itemEl = document.createElement("div");

            list.append(itemEl);
            
            itemEl.innerHTML = itemList[counter - 1];

            itemEl.classList.add("product");
            
            console.log(counter)
            
        }
        
        document.getElementById('add').value='' ;
    }
    

});


erase.addEventListener("click", function() {
    list.innerHTML = '';
});
