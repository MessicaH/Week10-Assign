let id = 0;

document.getElementById("add-player").addEventListener("click", () => {
    let table = document.getElementById("player-list");
    let row = table.insertRow(1);
    row.setAttribute("id", `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById("player-name").value;
    row.insertCell(1).innerHTML = document.getElementById("character-name").value;
/* These are rows that aren't currently useful if Select, Checkbox, or Radio buttons are used */
    row.insertCell(2).innerHTML = document.getElementById("dnd-class").value;
    row.insertCell(3).innerHTML = document.getElementById("dnd-race").value;
    row.insertCell(4).innerHTML = document.getElementById("know-level").value;

    let action = row.insertCell(5);
    action.appendChild(createDeleteButton(id++));
    document.getElementById("new-player").value = "";
    console.log(`Adding row with id: item-${id}`);
});

function createDeleteButton(id) {
    let btn = document.createElement("button");
    btn.className = "btn btn-primary";
    btn.id = id;
    btn.innerHTML = "Delete";
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}