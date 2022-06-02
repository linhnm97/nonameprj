let dropmenu = document.querySelector(".dropdown-content");
let user = JSON.parse(localStorage.getItem("user"));
let flag = true;
if (user ==""){
  () => {
    return false;
  }
} else {
dropmenu.innerHTML = 
`<a> Hi, ${user[0].lastname}</a> 
  <a onclick= "logout()"> Log Out </a>`
}

function logout(){
  dropmenu.innerHTML = 
  `<a href="./signup.html">Sign Up</a>
  <a href="./login.html">Log In</a>`
}