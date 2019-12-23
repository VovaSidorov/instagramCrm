console.log("App was load ...");
import render from './lib/renderHtml';
import header from './Components/Header/';
import loginPage from './Components/LoginPage';

import validationForm from "./actions/validationForm";


localStorage.getItem(name)==null ? render("app", loginPage) : render("app", header);

var elem = document.getElementById("btn");

elem.addEventListener('click', function(event){
    event.preventDefault();
    let incorrectEmail = document.getElementById("incorrectEmail"),
    incorrectPass = document.getElementById("incorrectPass");
incorrectEmail.style.display = "";
incorrectPass.style.display = "";
    validationForm();
});












