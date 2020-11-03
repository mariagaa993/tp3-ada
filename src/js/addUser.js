const addUser = () => {
    const buttonAdd = document.querySelector("#add-new-employee");
    buttonAdd.addEventListener("click", () => {
        openAddModal();
        closeModal();
    });
}
