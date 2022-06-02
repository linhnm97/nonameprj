console.log("hello World");
let password = document.querySelector("#password1");

let email = document.querySelector("#email1");

let firstname = document.querySelector("#firstname");

let lastname = document.querySelector("#lastname");

let submit = document.querySelector("#btn1");

let eyeclick = document.querySelector("#data-password");

let warning = document.querySelector(".alert");
let warnsign = document.querySelector("#warn-sign");
let input = document.querySelectorAll("input");
let arr = [];

btn1.addEventListener("click", validate);



function validate() {
  let person = new Object();
  let flag = false;
  if (
    firstname.value == "" ||
    lastname.value == "" ||
    email.value == "" ||
    password.value == ""
  ) {
    warnsign.innerHTML = "Đề nghị điền đầy đủ thông tin";
    warning.style.display = "block";
    for (let i in input) {
      let x = document.querySelectorAll("input");
      if (x[i].value == "") {
        x[i].parentElement.style.border = "1px solid red";
      }
    }
    return false;
  } else {
    if (
      !/^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g.test(removeAscent(firstname.value))
    ) {
      firstname.parentElement.style.border = "1px solid red";
      warnsign.innerHTML = "Wrong Firstname";
      warning.style.display = "block";
      return false;
    } else {
      firstname.parentElement.style.border = "none";
      person.firstname = firstname.value;
      flag = true;
      // localStorage.setItem("firstname", firstname.value);
    }

    if (
      !/^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g.test(removeAscent(lastname.value))
    ) {
      lastname.parentElement.style.border = "1px solid red";
      warnsign.innerHTML = "Wrong Lastname";
      warning.style.display = "block";
      return;
    } else {
      lastname.parentElement.style.border = "none";
      person.lastname = lastname.value;
      flag = true;
      // localStorage.setItem("lastname", lastname.value);
    }

    if (password.value.length < 8) {
      password.parentElement.style.border = "1px solid red";
      warnsign.innerHTML = "Mật khẩu phải từ 8 ký tự trở lên";
      warning.style.display = "block";
      return;
    } else {
      password.parentElement.style.border = "none";
      person.password = password.value;
      flag = true;
      // localStorage.setItem("password", password.value);
      
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      email.parentElement.style.border = "1px solid red";
      warnsign.innerHTML = "Wrong Email";
      warning.style.display = "block";
      return;
    } else {
      email.parentElement.style.border = "none";
      person.email = email.value;
      flag = true;
      // localStorage.setItem("email", email.value);
    }
  }
  arr.push(person);
  console.log(arr);
  localStorage.setItem("user", JSON.stringify(arr));
  window.location.href="./homepage.html";
};

console.log(localStorage.getItem("user"));
function removeAscent(str) {
  if (str === null || str === undefined) return str;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  return str;
}

eyeclick.onclick = () => {
  const icon = eyeclick.children[0];
  icon.classList.toggle("fa-eye-slash");
  password.style.marginRight = "5px";
  if (password.type === "password") {
    password.type = "text";
  } else if (password.type === "text") {
    password.type = "password";
  }

};
