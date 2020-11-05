const deleteUser = (user, e) => {
    openDeleteModal(user);
    closeDeleteModal();

    const btnDelete = document.querySelector("#btn-delete");
    btnDelete.addEventListener("click", async() => {
        try {
            await axios.delete(BASE_URL + user.id);
            const removeUser = e.target.parentElement.parentElement.parentElement;
            removeUser.remove();
            alert("User was remove succesfully!");
            window.location.reload();
        }catch(err) {
            alert("ERROR: it can't remove", err);
        }
    });
}
