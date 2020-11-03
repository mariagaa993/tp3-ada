const editUser = id => {
    openEditModal();
    closeModal();

    const user = dataUsers.find(u => u.id === id);
    document.querySelector("#name").value = user.fullname; 
    document.querySelector("#email").value = user.email; 
    document.querySelector("#address").value = user.address; 
    document.querySelector("#phone").value = user.phone;   
    
    btn.addEventListener("click", async(e) => {
        e.preventDefault();
        formValidation();
        
        try {
            if(valueName !== undefined && valueEmail !== undefined && valueAddress !== undefined && valuePhone !== undefined) {
                const user = {
                    fullname: valueName,
                    email: valueEmail,
                    address: valueAddress,
                    phone: valuePhone
                }
                const res = await axios.put(BASE_URL + id, user)
                alert("User was edited succesfully!")
                window.location.reload(); 
                return res.data;
            }
        }catch(err) {
            alert("ERROR: it can't edit", err);
        }      
    });
}
