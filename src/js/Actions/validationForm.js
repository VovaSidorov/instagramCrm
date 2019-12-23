import users from "../users";

export default () => {

let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
regPass = /^([A-Za-z0-9_\-\.]){6,}/,
email = document.getElementById("email").value,
pass=document.getElementById("password").value,
incorrectEmail = document.getElementById("incorrectEmail"),
incorrectPass = document.getElementById("incorrectPass");

console.log(regEmail.test(email));
console.log(regPass.test(pass));

if (regPass.test(pass) == true && regEmail.test(email) == true){
  let obj = {email:email,pass:pass};
     return obj;
}
if(regEmail.test(email) == false){
  incorrectEmail.style.display = "block";
}
if(regPass.test(pass) == false){
  incorrectPass.style.display = "block";
}

}











