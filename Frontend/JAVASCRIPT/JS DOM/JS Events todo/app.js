let inp = document.querySelector(".add-input");
let btn = document.querySelector(".add-btn");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    if(inp.value != "") {
        let li = document.createElement("li");
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "delete";
        deleteBtn.classList.add("delete");
        li.innerText = inp.value;
        li.append(deleteBtn);
        let ul = document.querySelector(".ul");
        ul.append(li);
        inp.value = "";
    }
});

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});

// for(let deleteBtn of deleteBtns) {
//     deleteBtn.addEventListener("click", function () {
//         this.parentElement.remove()
//     })
// }