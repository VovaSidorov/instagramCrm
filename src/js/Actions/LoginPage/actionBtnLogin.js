import validationForm from "./validationForm";
import checkDataBaseUser from "./CheckDataBaseUser";
import header from '../../Components/Header';
import tableUsers from '../../Components/TableUsers';
import render from '../../lib/renderHtml';
import actionBtnUser from '../../Actions/TableUsers/actionBtnUser';

import users from "../../users"

export default () => {
document.getElementById("btn")
.addEventListener('click', function(event){
    event.preventDefault();
    let incorrectEmail = document.getElementById("incorrectEmail"),
    incorrectPass = document.getElementById("incorrectPass"),
        b;
    incorrectEmail.style.display = "";
    incorrectPass.style.display = "";

    let formDataResults = validationForm();
    if (formDataResults!=undefined) {
        b = checkDataBaseUser(formDataResults, users);
    }
    if (b==true){
        console.log("Есть в базе");
        document.getElementById("app").innerHTML = "";
        render("app", header);
        render("app", tableUsers);
        actionBtnUser();``
    }
    if (b==false){
        console.log("нет в базе");
    }
});
}