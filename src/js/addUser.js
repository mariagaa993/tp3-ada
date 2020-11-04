const addUser = () => {
    const buttonAdd = document.querySelector("#add-new-employee");
    buttonAdd.addEventListener("click", async(e) => {
        openAddModal();   
        closeModal();

        const user = dataUsers.find(u => u.id === id);
        document.querySelector("#name").value = user.fullname; 
        document.querySelector("#email").value = user.email; 
        document.querySelector("#address").value = user.address; 
        document.querySelector("#phone").value = user.phone;   

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
                    const res = await axios.post(BASE_URL + id, user)
                    alert("User was added succesyarn sfully!")
                    return res.data;
                }
            }catch(err) {
                alert("ERROR: it can't add it", err);
            }  
    });
}
