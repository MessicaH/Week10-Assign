let id = 0;

document.getElementById("add-task").addEventListener("click", () => {
    let createdDate = new Date();
    let table = document.getElementById("todo-list");
    let row = table.insertRow(1);
    row.setAttribute("id", `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById("new-task").value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth()+1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById("new-start-date").value;
    row.insertCell(3).innerHTML = document.getElementById("new-end-date").value;
    
    let action = row.insertCell(4);
    action.appendChild(createDeleteButton(id++));
    document.getElementById("new-task").value = "";
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