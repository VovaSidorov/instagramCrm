window.addEventListener("DOMContentLoaded", function (event) {

let item = localStorage.length;

 if (item == 0){
  document.location.href = 'index.html';
 }

var li, a, h1;
var navigation = document.getElementById("navigation");
var names = [
               {"name":"Users","href":"users.html"},
               {"name":"Orders","href":"orders.html"},
               {"name":"Create user","href":"newUser.html"},
               {"name":"Create order","href":"newOrder.html"},
               {"name":"Order page","href":"orderPage.html"},
               {"name":"Users page","href":"userPage.html"},
               {"name":"Exit","href":"index.html"},
             ];
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

});