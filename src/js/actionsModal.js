const form = document.querySelector("#form");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const close = document.querySelector("#close-button");
const btn = document.querySelector("#btn-action");

const openEditModal = () => {
    overlay.style.display = "inline";
    modal.style.display = "inline";
    document.querySelector(".form-title").innerText = "Edit User"
    btn.innerText = "Edit"
};

const openAddModal = () => {
    overlay.style.display = "inline";
    modal.style.display = "inline";
    document.querySelector(".form-title").innerText = "Add User"
    btn.innerText = "Add"
    form.reset();
};

const closeModal = () => {
    close.addEventListener("click", () => {
        overlay.style.display = "none";
        modal.style.display = "none";
    });
}

const removeErrors = (errorName, errorEmail, errorAddress, errorPhone) => {
    close.addEventListener("click", () => {
        // back to normal border
        document.querySelector("#name").style.border = "1px solid rgba(0,0,0,.250)";
        document.querySelector("#email").style.border = "1px solid rgba(0,0,0,.250)";
        document.querySelector("#address").style.border = "1px solid rgba(0,0,0,.250)";
        document.querySelector("#phone").style.border = "1px solid rgba(0,0,0,.250)";

        // hidden error messages
        errorName.style.display = "none";
        errorEmail.style.display = "none";
        errorAddress.style.display = "none";
        errorPhone.style.display = "none";
        overlay.style.display = "none";
        modal.style.display = "none";
    });
}
