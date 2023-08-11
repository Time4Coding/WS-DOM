// get of elements 
const userName = document.getElementById("userName");
const email = document.getElementById("Email");
const password = document.getElementById("password");
const phoneNumber = document.getElementById("number");
let emailValidation = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
let passValidation =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
let phoneNumValidation = /^(0|[1-9][0-9]*){8,}$/;


//*********************user name must be at least 5 characters****************

userName.addEventListener("change", function () {
  if (userName.value.length < 5) {
    alert("The userName must be at least 5 characters");
    userName.classList.add("is-invalid");
    userName.focus();
  } else {
    userName.classList.remove("is-invalid");
  }
});
//--------------------------------------------------------------------------
//*******************E-mail must be a valid one *****************************

email.addEventListener("change", function () {
    //if(!email.value.includes('@')) ------ for testing if contain @ symbole 
  if (!emailValidation.test(email.value)) {
    alert("email not valid");
    email.classList.add("is-invalid");
    email.focus();
  } else {
    email.classList.remove("is-invalid");
  }
});
//-------------------------------------------------------------------------------

//**********************Password must be at least 8 characters and respect the condition of security*******

password.addEventListener("change", function () {
  if (!passValidation.test(password.value)) {
    alert(
      "password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters"
    );
    password.classList.add("is-invalid");
    password.focus();
  } else {
    password.classList.remove("is-invalid");
  }
});
//---------------------------------------------------------------------------------
//***********************Phone Number must be a valid one***************************

phoneNumber.addEventListener("change", function () {
  if (!phoneNumValidation.test(phoneNumber.value)) {
    alert(
      "the phone number should contain only number and should contain 8 digits"
    );
    phoneNumber.classList.add("is-invalid");
    phoneNumber.focus();
  } else {
    phoneNumber.classList.remove("is-invalid");
  }
});
//----------------------------------------------------------------------------------