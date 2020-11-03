// Funciones exportar al archivo .test.js ----------
/*const functions = {};
module.exports = functions;*/

const BASE_URL = "https://5f7c70d600bd74001690ac5e.mockapi.io/users/";

let dataUsers = [];

const table = user => {
    const tbody = document.querySelector("#tbody");
    const tr = document.createElement("tr");
    const tdCheckbox = document.createElement("td");
    const tdFullName = document.createElement("td");
    const tdEmail = document.createElement("td");
    const tdAddress = document.createElement("td");
    const tdPhone = document.createElement("td");
    const tdActions = document.createElement("td");
    tdFullName.innerText = user.fullname;
    tdEmail.innerText = user.email;
    tdAddress.innerText = user.address;
    tdPhone.innerText = user.phone; 

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "prueba";

    const edit = document.createElement("button");
    edit.type = "button";
    edit.id = "edit-button"
    edit.addEventListener('click', () => editUser(user.id));
    edit.innerHTML= `<i class="material-icons" title="Edit">&#xE254;</i>`;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.id = "remove-button"
    remove.innerHTML = `<i class="material-icons" title="Delete">&#xE872;</i>`;

    tdActions.appendChild(edit);
    tdActions.appendChild(remove);
    tdCheckbox.appendChild(checkbox);
    tr.appendChild(tdCheckbox);
    tr.appendChild(tdFullName);
    tr.appendChild(tdEmail);-
    tr.appendChild(tdAddress);
    tr.appendChild(tdPhone);  
    tr.appendChild(tdActions);                 
    tbody.appendChild(tr);   
    
    const parentCheckbox = document.querySelector("#checkbox");
    parentCheckbox.addEventListener('click', () => selectOrSelectedCheckbox(checkbox));
};

const load = () => {
    getUsers();
    addUser();
};

const getUsers = async() => {
    try {
        const users = await axios.get(BASE_URL);
        dataUsers = users.data;
        dataUsers.map(user => table(user));
    } catch(err) {
        alert("ERROR: it can't get users", err);
    }
}
