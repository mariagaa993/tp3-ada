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
            
            const checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            const edit = document.createElement("button");
            edit.type = "button";
            edit.innerText = "Edit"
            const eliminar = document.createElement("button");
            eliminar.type = "button";
            eliminar.innerText = "Delete";
            
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

const buscarUsuarios = () => {
    const buscador = document.querySelector("#buscador");
    buscador.addEventListener("click", () => {
        const filtro = document.querySelector("#filtro").value.toLowerCase();
        if(filtro.length < 3) return;
        const resultados = datos.filter(item => {
            if(
                item.nombre.toLowerCase().indexOf(filtro) > -1 ||
                String(item.nivel).indexOf(filtro) > -1
            ) {
                return true;
            }
            return false;
        });
        const resultador = document.querySelector("#tabla");
        let text = ``;
        for(let res of resultados) {
            text += `${res.nombre} - nivel ${res.nivel}
            `;
        }
        resultador.value = text;
    });
}

const load = () => {
    cargarUsuarios();
    buscarUsuarios();

}