const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const firstnameError = document.querySelector('#firstname-error')
const lastnameError = document.querySelector('#lastname-error')
const passwordError = document.querySelector('#password-error')
const emailError = document.querySelector('#email-error')
const eye = document.querySelector('eye');
const eyeOff =document.querySelector('eye-off')
const togglePassword = document.querySelector(".toggle-password")
// const error_display = document.querySelector('.error')
console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    firstnameError.style.display = 'block'
    

    
  } else {
    firstName.classList.remove('error');
    firstnameError.style.display = 'none'
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    lastnameError.style.display = 'block'
  } else {
    lastName.classList.remove('error');
    lastnameError.style.display = 'none'

  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    emailError.style.display = 'block';
  } else {
    email.classList.remove('error');
    emailError.style.display = 'none';
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    passwordError.style.display = 'block'
  } else {
    password.classList.remove('error');
    passwordError.style.display = 'none'
  }

});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
  
}
togglePassword.addEventListener("click", ()=>{
  if (password.type === "password"){
    password.type = "text";
    // eyeOff.style.display ='block'
    eye.style.display ='none'
  }else{
    password.type = "password";
  //  eye.style.display ='block'
   eyeOff.style.display ='none'
  }
})