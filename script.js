let database = [
  {id:1, login:"Andrey",email:"andrey@gmail.com"},
  {id:2, login:"Sergey",email:"sergey@gmail.com"},
  {id:3, login:"anton",email:"anton@gmail.com"},
  {id:4, login:"Leva",email:"leva@gmail.com"}
]

 let getInfo =  document.getElementById("btn"),
     registration = document.getElementById("more"),
     overlay = document.getElementById('modal'),
     close = document.getElementById('closeModal');

  getInfo.addEventListener('click', function(event){
  event.preventDefault();
  checkingInputFields();

 });

 function checkingInputFields() {
  var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var regPass = /^([A-Za-z0-9_\-\.]){6,}/;
  var email = document.getElementById("email").value;
  var pass=document.getElementById("password").value;
  if(regEmail.test(email) == false || regPass.test(pass) == false) {
     alert('Некорректный ввод данных');
     return false;
  }
  else {
    console.log(email,pass);
  }
 
 }

 function checkingItemsInDataBase() {


 }





