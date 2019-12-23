console.log("App was load ...");
import render from './lib/renderHtml';
import header from './Components/Header/';
import loginPage from './Components/LoginPage';

import validationForm from "./Actions/validationForm";
import checkDataBaseUser from "./Actions/CheckDataBaseUser";

import users from "./users"


// localStorage.getItem(name)==null ? render("app", loginPage) : render("app", header);
render("app", loginPage);

const elem = document.getElementById("btn");

elem.addEventListener('click', function(event){
    event.preventDefault();
    let incorrectEmail = document.getElementById("incorrectEmail"),
    incorrectPass = document.getElementById("incorrectPass"),
        b;
    incorrectEmail.style.display = "";
    incorrectPass.style.display = "";

    let formDataResults = validationForm(users);
    if (formDataResults!=undefined) {
        b = checkDataBaseUser(formDataResults, users);
    }
    if (b==true){

        render("app", header);
    }
});









