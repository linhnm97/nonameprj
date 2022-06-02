let password = document.querySelector("#password1");

let email = document.querySelector("#email1");

let eyeclick = document.querySelector("#data-password");


let submit = document.querySelector("#btn1");

let warning = document.querySelector(".alert");
let warnsign = document.querySelector("#warn-sign");
let input = document.querySelectorAll("input");
let strong = document.querySelector(".alert>strong");
console.log(strong);

let x = JSON.parse(localStorage.getItem("user"));

console.log(warning);
function login() {
  for(i=0; i < x.length; i++) {
    let a = x[i].email;
    let b = x[i].password;
    if (email.value != a || password.value != b) {
      password.parentElement.style.border = "1px solid red";
      email.parentElement.style.border = "1px solid red";
      warnsign.innerHTML = "Kiểm tra lại mật khẩu, email";
      warning.style.display = "block";
  } else {
    warning.style.backgroundColor ="green";
    warnsign.innerHTML = "Đăng nhập thành công";
    warning.style.display = "block";
    strong.innerHTML="Success!";
    password.parentElement.style.border = "none"; 
    window.location.href="./index.html";
  }
}}

btn1.addEventListener("click", validate);


function validate () {
  if (password.value.length < 8) {
  password.parentElement.style.border = "1px solid red";
  warnsign.innerHTML = "Wrong Password";
  warning.style.display = "block";
} else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) ) {
  email.parentElement.style.border = "1px solid red";
  warnsign.innerHTML = "Wrong Email";
  warning.style.display = "block";
} else {
  login();
} }

eyeclick.onclick = () => {
  const icon = eyeclick.children[0];
  icon.classList.toggle("fa-eye-slash");
  if (password.type === "password") {
    password.type = "text";
    password.style.marginRight = "5px";
  } else if (password.type === "text") {
    password.type = "password";
  } 
}
