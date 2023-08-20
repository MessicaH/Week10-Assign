/* Finding Elements in DOM */

let button1 = document.getElementById("my-button");
console.log(button1);

let buttonsByClassName = document.getElementsByClassName ("my-class");
console.log(buttonsByClassName);

let buttons = document.getElementsByTagName("button");
console.log(buttons);

/*CSS Selector Elements in DOM*/

let buttonsByCSSSelector1 = document.querySelectorAll("button.my-class");
console.log(buttonsByCSSSelector1);

let buttonsByCSSSelector2 = document.querySelectorAll(".my-class");
console.log(buttonsByCSSSelector2);

/* Interacting with DOM */

document.getElementById("content").innerHTML = "A paragraph line of text was here.";

let button2 = document.getElementById("change-text");
let content = document.getElementById("content");

button2.addEventListener("click", () => {
    if (content.innerHTML == "This is a line of text.") {
        content.innerHTML = "A paragraph line of text was here.";
    } else {
        content.innerHTML = "This is a line of text."
    }
});

document.getElementById("remove-button").addEventListener("click", () => {
    let idToRemove = document.getElementById("remove-text").value;
    let elementToRemove = document.getElementById(idToRemove);
    elementToRemove.parentNode.removeChild(elementToRemove);
  /*  content.parentNode.removeChild(content); */
  document.getElementById("remove-text").value = "";
});

let id = 0;

document.getElementById("add-button").addEventListener("click", () => {
    let parent = document.getElementById("paragraphs");
    let newElement = document.createElement("p");
    newElement.innerHTML = document.getElementById("new-text").value;
    newElement.setAttribute("id", id++);
    parent.appendChild(newElement);
    document.getElementById("new-text").value = "";
});