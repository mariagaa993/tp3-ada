let valueName;
let valueEmail;
let valueAddress;
let valuePhone;

const formValidation = () => {
    // error messages
    const errorName = document.querySelector("#errorName");
    const errorEmail = document.querySelector("#errorEmail");
    const errorAddress = document.querySelector("#errorAddress");
    const errorPhone = document.querySelector("#errorPhone");

    const inputName = document.querySelector("#name").value;
    const inputEmail = document.querySelector("#email").value;
    const inputAddress = document.querySelector("#address").value;
    const inputPhone = document.querySelector("#phone").value;
      
    // validate name
    if(inputName === "" || inputName.length > 50) {
        document.querySelector("#name").style.border = "1px solid red";
        errorName.style.display = "block";
    } else {
        valueName = inputName;
        document.querySelector("#name").style.border = "1px solid rgba(0,0,0,.250)";
        errorName.style.display = "none";
    };
        
    // validate email
    if(inputEmail === "" || !(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(inputEmail)))  {
        document.querySelector("#email").style.border = "1px solid red";
        errorEmail.style.display = "block";
    } else {
        valueEmail = inputEmail;
        document.querySelector("#email").style.border = "1px solid rgba(0,0,0,.250)";
        errorEmail.style.display = "none";
    };
        
    // validate address
    if(inputAddress === "" || inputAddress.length > 60) {
        document.querySelector("#address").style.border = "1px solid red";
        errorAddress.style.display = "block";
    } else {
        valueAddress = inputAddress;
        document.querySelector("#address").style.border = "1px solid rgba(0,0,0,.250)";
        errorAddress.style.display = "none";
    };
       
    // validate phone
    if(inputPhone === "" || !(/^[0-9\-\s]{7,17}$/.test(inputPhone))) {
        document.querySelector("#phone").style.border = "1px solid red";
        errorPhone.style.display = "block";
    } else {
        valuePhone = inputPhone;
        document.querySelector("#phone").style.border = "1px solid rgba(0,0,0,.250)";
        errorPhone.style.display = "none";
    };
    
    removeErrors(errorName, errorEmail, errorAddress, errorPhone);
}
