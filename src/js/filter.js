const filter = dataUsers => {
    const input = document.querySelector("#filter");

    input.addEventListener("keyup", () => {
        const inputValue = input.value.toLowerCase();

        const filtering = dataUsers.filter(user => {
            if (user.fullname.toLowerCase().indexOf(inputValue) !== -1 ||
                user.email.toLowerCase().indexOf(inputValue) !== -1 ||
                user.address.toLowerCase().indexOf(inputValue) !== -1) {
                    return true;
            } else {
                return false;
            }
        });
        table(filtering);
    });
}
