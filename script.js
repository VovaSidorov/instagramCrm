let database = [
  {id:1, login:"Andrey",email:"andrey@gmail.com",pass:"22Andrey"},
  {id:2, login:"Sergey",email:"sergey@gmail.com",pass:"Sergey33"},
  {id:3, login:"anton",email:"anton@gmail.com",pass:"24Anton789"},
  {id:4, login:"Leva",email:"leva@gmail.com",pass:"Privet"}
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
  let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
      regPass = /^([A-Za-z0-9_\-\.]){6,}/,
      email = document.getElementById("email").value,
      pass=document.getElementById("password").value,
      incorrectEmail = document.getElementById("incorrectEmail"),
      incorrectPass = document.getElementById("incorrectPass"),
      incorrectPerson = document.getElementById("incorrectPerson");

      incorrectPerson.style.display = "";
      incorrectEmail.style.display = "";
      incorrectPass.style.display = "";

      console.log(regEmail.test(email));
      console.log(regPass.test(pass));

      if(regEmail.test(email) == false){
        incorrectEmail.style.display = "block";
      }
      if(regPass.test(pass) == false){
        incorrectPass.style.display = "block";
      }

      // if (regEmail.test(email) == true){
      //   incorrectEmail.style.display = "";
      // }
      // if (regPass.test(pass) == true){
      //   incorrectPass.style.display = "";
      // }
      if (regPass.test(pass) == true && regPass.test(pass) == true){
        checkingItemsInDataBase();
      }
 }

 function checkingItemsInDataBase() {
  let remEmail, 
      remPass,
      email = document.getElementById("email").value,
      pass=document.getElementById("password").value;
      incorrectPerson = document.getElementById("incorrectPerson");

      database.forEach(element =>{
        if (email == element.email){
          remEmail = element.id;
        }
       });

       database.forEach(element =>{
        if (pass == element.pass){
          remPass = element.id;
        }
       });

      if (remEmail == remPass && remEmail!=undefined && remPass !=undefined){
        console.log("Есть такой в базе");
      }
      else{
        incorrectPerson.style.display = "block";
      }
 }





