const addUser = () => {
	const buttonAdd = document.querySelector("#add-new-employee");
	buttonAdd.addEventListener("click", () => {
		openAddModal();
		closeModal();
			                
		btn.addEventListener("click", async(e) => {
			e.preventDefault();
			formValidation();
				            
			if(valueName !== undefined && valueEmail !== undefined && valueAddress !== undefined && valuePhone !== undefined) {
				const addUser = {
					fullname: valueName,
					email: valueEmail,
					address: valueAddress,
					phone: valuePhone
				}
				const res = await axios.post(BASE_URL, addUser);
				alert("User has been adding successfully!");
				window.location.reload();
			}
		});
	});
}  
