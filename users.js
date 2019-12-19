

// let item = localStorage.length;

//  if (item == 0){
//   document.location.href = 'index.html';
//  } 

var li, a, h1, tr,th, td,button,modalClose;
var navigation = document.getElementById("navigation");
var users = document.getElementById("users");
var orders = document.getElementById("orders");
var names = [
               {"name":"Users","href":"users.html"},
               {"name":"Orders","href":"orders.html"},
               {"name":"Create user","href":"newUser.html"},
               {"name":"Create order","href":"newOrder.html"},
               {"name":"Order page","href":"orderPage.html"},
               {"name":"Users page","href":"userPage.html"},
               {"name":"Exit","href":"index.html"}
             ];

let database = [
              {id:1, login:"Andrey",email:"andrey@gmail.com",pass:"22Andrey",role:"Admin"},
              {id:2, login:"Sergey",email:"sergey@gmail.com",pass:"Sergey33",role:"Manager"},
              {id:3, login:"anton",email:"anton@gmail.com",pass:"24Anton789",role:"Executor"},
              {id:4, login:"Leva",email:"leva@gmail.com",pass:"Privet",role:"Executor"}
            ];    
            
let ordersBase = [
              {id:1, accountname:"velo4659",orderDescription:"Букет из 51 розы",
              price:150.66,orderStatus:"New",orderPrice:"Paid"},
              {id:2, accountname:"zloyAndrey",orderDescription:"Футболка L мужская черная",
              price:206.34,orderStatus:"New",orderPrice:"Paid"},
              {id:3, accountname:"PAcel465798",orderDescription:"Тормозные колодки",
              price:65.30,orderStatus:"New",orderPrice:"Paid"},
              {id:4, accountname:"Alisa",orderDescription:"Куртка зимняя",
              price:2720,orderStatus:"New",orderPrice:"Paid"},
              {id:5, accountname:"reoma46588",orderDescription:"покрышки",
              price:785,orderStatus:"New",orderPrice:"Paid"}      
            ];            
             
if (document.location.href.indexOf('users') != -1){
 for (var i=0;i<database.length;i++){
tr = document.createElement('tr');
th = document.createElement('th');
tdEmail = document.createElement('td');
tdPass = document.createElement('td');
tdLogin = document.createElement('td');
tdRole = document.createElement('td');
button = document.createElement("button");
button.id = database[i].id;
button.classList.add("btn");
button.classList.add("btn-primary");
th.innerHTML = database[i].id;
tr.appendChild(th)

tdEmail.innerHTML = database[i].email;
tdPass.innerHTML = database[i].pass;
tdLogin.innerHTML = database[i].login;
tdRole.innerHTML = database[i].role;
button.innerHTML = "edit";

tr.appendChild(tdEmail);
tr.appendChild(tdPass);
tr.appendChild(tdLogin);
tr.appendChild(tdRole);
tr.appendChild(button);
users.appendChild(tr);

button.addEventListener('click', function(event){
  event.preventDefault();
  let target = event.target.id;
  let modal = document.getElementById('modal');
  let editUsermail, editUserPass, editUserName, editUserRole;
  editUsermail = document.getElementById("editUsermail");
  editUserPass = document.getElementById("editUserPass");
  editUserName = document.getElementById("editUserName");
  editUserRole = document.getElementById("editUserRole");

  editUsermail.value = database[target-1].email;
  editUserPass.value = database[target-1].pass;
  editUserName.value = database[target-1].login;
  editUserRole.value = database[target-1].role;
  modal.style.display = 'block';
  document.body.style.overflow='hidden';
   });

  modalClose = document.getElementById('modalClose');

  modalClose.addEventListener('click', function(event){
  event.preventDefault();

  modal.style.display = 'none';
  document.body.style.overflow='';
  });



 }
}

if (document.location.href.indexOf('orders') != -1){

  for (var i=0;i<ordersBase.length;i++){
 tr = document.createElement('tr');
 th = document.createElement('th');
 tdAccountName = document.createElement('td');
 tdOrderDescription = document.createElement('td');
 tdPrice = document.createElement('td');
 tdOrderStatus = document.createElement('td');
 tdOrderPrice = document.createElement('td');
 
 th.innerHTML = ordersBase[i].id;
 tr.appendChild(th)
 
 tdAccountName.innerHTML = ordersBase[i].accountname;
 tdOrderDescription.innerHTML = ordersBase[i].orderDescription;
 tdPrice.innerHTML = ordersBase[i].price;
 tdOrderStatus.innerHTML = ordersBase[i].orderStatus;
 tdOrderPrice.innerHTML = ordersBase[i].orderPrice;
 
 tr.appendChild(tdAccountName);
 tr.appendChild(tdOrderDescription);
 tr.appendChild(tdPrice);
 tr.appendChild(tdOrderStatus);
 tr.appendChild(tdOrderPrice);
 orders.appendChild(tr);
  }
 }



for (var i=0;i<names.length;i++){
  li = document.createElement('li');
  a = document.createElement('a');
  a.innerHTML = names[i].name;
  a.setAttribute("class","nav-link");
a.setAttribute("href", names[i].href);
li.setAttribute("class","nav-item")
li.appendChild(a);
navigation.appendChild(li);


if (document.location.href.indexOf(names[i].href) != -1){
  h1 = document.getElementById("h1");
  h1.innerHTML = names[i].name;
  document.getElementsByClassName("nav-item")[i].setAttribute("class","active");
};
}

let btnExit = document.querySelectorAll('.nav-link')[names.length-1];

btnExit.addEventListener('click', function(event){
event.preventDefault();
document.location.href = 'index.html';
localStorage.clear();

 });


//  Createuser page
if (document.location.href.indexOf('newUser') != -1){
let newUsermail, newUserPass, newUserName, newUserRole, btnCreateNewUser;

btnCreateNewUser = document.getElementById('btnCreateNewUser');

btnCreateNewUser.addEventListener('click', function(event){
event.preventDefault();

newUsermail = document.getElementById("createUserMail").value;
newUserPass = document.getElementById("createUserPass").value;
newUserName = document.getElementById("createUserName").value;
newUserRole = document.getElementById("createUserRole");
let newUserRoleVal = newUserRole.options[newUserRole.selectedIndex].value;

  console.log(newUsermail);
  console.log(newUserPass);
  console.log(newUserName);
  console.log(newUserRoleVal);
  database.push({id:5, login:newUserName,email:newUsermail,pass:newUserPass,role:newUserRoleVal});
  console.log(database);


});
}





