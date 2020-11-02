const selectOrSelectedCheckbox = checkbox => {
    if(checkbox.checked === false) {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }
}
