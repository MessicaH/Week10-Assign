/* The individual item for each Member in a group */
class Member {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}

/* The group of Members on a team */

class Team {
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.members = [];
    }

/* The ability to add a new member(s) to a team's roster (table) */
    addMember(member) {
        this.members.push(member)
    }

/* The ability to remove member(s) from a team's roster (table) */
    deleteMember(member) {
        let index = this.members.indexOf(member);
        this.members.splice(index, 1);
    }
}

let teams = [];
let teamID = 0;

onclick("new-team", () => {
    teams.push(new Team(teamID++, getValue("new-team-name")));
    drawDOM();
})

/* Top-down referral to previous use of "onClick(new-team)" function */
function onclick(id, action) {
    let element = document.getElementById(id);
    element.addEventListener("click", action);
    return element;
}

/* Top-down referral to previous use of "getValue" function */
function getValue(id) {
    return document.getElementById(id).value;
}

/* Top-down referral to previous use of "drawDOM" function */
function drawDOM() {
    let teamDiv = document.getElementById("teams");
    clearElement(teamDiv); /* Clears out the teamDiv */

    for (team of teams) {
        let table = createTeamTable(team); /* Creates a table for each team */
        let title = document.createElement("h2");
        title.innerHTML = team.name;
        title.appendChild(createDeleteTeamButton(team)); /* Creates a Delete button for each table (team) */
        teamDiv.appendChild(title);
        teamDiv.appendChild(table);

        for (member of team.members) {
            createMemberRow(team, table, member)
        } /* Adds all members to each team */
    }
}

/* Top-down referral to previous use of "createMemberRow" function - 2nd "for" above */
function createMemberRow (team, table, member) {
    let row = table.insertRow(2);
    row.insertCell(0).innerHTML = member.name;
    row.insertCell(1).innerHTML = member.position;
    let actions = row.insertCell(2);
    actions.appendChild(createDeleteRowButton(team, member));
}

/* Top-down referral to previous use of "createDeleteRowButton" function */
function createDeleteRowButton(team, member) {
    let btn = document.createElement("button");
    btn.className = "btn btn-primary";
    btn.innerHTML = "Delete";
    btn.onclick = () => {
        let index = team.members.indexof(member);
        team.members.splice(index, 1); /* Item removed from array for team members */
        drawDOM();
    };
    return btn; /* Adds or attaches to appended Child element i.e. adds button when new thing added */
}

function createDeleteTeamButton (team) {
    let btn = document.createElement("button");
    btn.className = "btn btn-primary";
    btn.innerHTML = "Delete Team";
    btn.onclick = () => {
        let index = teams.indexOf(team);
        teams.splice(index, 1);
        drawDOM();
    };
    return btn;
}

function createNewMemberButton(team) {
    let btn = document.createElement("button");
    btn.className = "btn btn-primary";
    btn.innerHTML = "Create";
    btn.onclick = () => {
        team.members. push(new Member(getValue(`name-input-${team.id}`), getValue(`position-input-${team.id}`)));
        drawDOM();  
    };
    return btn;
}

function createTeamTable(team) {
    let table = document.createElement("table");
    table.setAttribute("class", "table table-dark table-striped");
    
    let row = table.insertRow(0);
    let nameColumn = document.createElement("th");
    let positionColumn = document.createElement("th");
    
    nameColumn.innerHTML = "Name";
    positionColumn.innerHTML = "Position";
    row.appendChild(nameColumn);
    row.appendChild(positionColumn);

    let formRow = table.insertRow(1);
    let nameTh = document.createElement("th");
    let positionTh = document.createElement("th");
    let createTh = document.createElement("th");

    let nameInput = document.createElement("input");
    nameInput.setAttribute("id", `name-input-${team.id}`);
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("class", "form-control");

    let positionInput = document.createElement("input");
    positionInput.setAttribute("id", `position-input-${team.id}`);
    positionInput.setAttribute("type", "text");
    positionInput.setAttribute("class", "form-control");

    let newMemberButton = createNewMemberButton(team); /* Added above long code section for flow */
    nameTh.appendChild(nameInput);
    positionTh.appendChild(positionInput);
    createTh.appendChild(newMemberButton);
    /* Appends inputs to the cells */
    formRow.appendChild(nameTh);
    formRow.appendChild(positionTh);
    formRow.appendChild(createTh);
    /* Append cells to rows */
    return table;
}

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    };
}