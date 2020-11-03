// Funciones exportar al archivo .test.js ----------
/*const functions = {};
module.exports = functions;*/

//sabado 10/10

const cargarUsuarios = async() => {
    try {
        const users = await axios.get("https://5f7c70d600bd74001690ac5e.mockapi.io/users")
        const dataUsers = users.data;
        const tbody = document.querySelector("#tbody");
        dataUsers.map(user => {
            const tr = document.createElement("tr");
            const tdCheckBox = document.createElement("td");
            const tdFullName = document.createElement("td");
            const tdEMail = document.createElement("td");
            const tdAddress = document.createElement("td");
            const tdPhone = document.createElement("td");
            const tdActions = document.createElement("td");
            tdFullName.innerText = user.fullname;
            tdEMail.innerText = user.email;
            tdAddress.innerText = user.address;
            tdPhone.innerText = user.phone;   
            tr.setAttribute("id", user.id)
            const checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            const edit = document.createElement("button");
            edit.type = "button";
            edit.innerText = "Edit"
            const eliminar = document.createElement("button");
            eliminar.type = "button";
            eliminar.innerText = "Delete";
            
            eliminar.addEventListener('click', () => eliminarUsuario(user));

            tdActions.appendChild(edit);
            tdActions.appendChild(eliminar);
            tdCheckBox.appendChild(checkBox);
            tr.appendChild(tdCheckBox);
            tr.appendChild(tdFullName);
            tr.appendChild(tdEMail);
            tr.appendChild(tdAddress);
            tr.appendChild(tdPhone);  
            tr.appendChild(tdActions);  
                
            tbody.appendChild(tr);
        })          
    }
    catch(err) {
        console.log("ERROR", err);
    }      
};

const eliminarUsuario = (user) => {
    const eliminarConfirmado = async () => {
        try{
            await axios.delete(`https://5f7c70d600bd74001690ac5e.mockapi.io/users/${user.id}`)
            const row = document.getElementById(user.id);
            row.remove();
            closeModal();
        } catch(err){
            console.error(err);
        }
    }

    const closeModal = () => {
        modal.parentNode.classList.add("closed");
        titulo.remove();
        btnConfirmar.remove();
        btnCancelar.remove();
    }

    const modal = document.querySelector(".modal-delete");
    const titulo = document.createElement("h2");
    const btnConfirmar = document.createElement("button");
    const btnCancelar = document.createElement("button");
    modal.parentNode.classList.remove("closed");
    
    titulo.innerText = `¿Está segurx que desea eliminar a ${user.fullname} de la lista?`;
    btnConfirmar.innerText = "Eliminar";
    btnConfirmar.classList.add("btn-delete")
    btnCancelar.innerText = "Cancelar";
    btnCancelar.classList.add("btn-cancelar")

    modal.appendChild(titulo);
    modal.appendChild(btnConfirmar);
    modal.appendChild(btnCancelar);
    btnConfirmar.addEventListener('click', eliminarConfirmado)
    btnCancelar.addEventListener('click', closeModal)
}

const load = () => {
    cargarUsuarios();

}