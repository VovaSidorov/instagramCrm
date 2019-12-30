import validationForm from "./validationForm";
import checkDataBaseUser from "./CheckDataBaseUser";
import header from '../../Components/Header';
import tableUsers from '../../Components/TableUsers';
import render from '../../lib/renderHtml';
import actionBtnUser from '../../Actions/TableUsers/actionBtnUser';
import actionBtnOrders from '../../Actions/TableOrders/actionBtnOrders';

import users from "../../users"
import actionAddNewUser from "../TableUsers/actionAddNewUser";
import actionModalClose from "../TableUsers/actionModalClose";

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
        document.getElementById("app").innerHTML = "";
        render("app", header);
        render("app", tableUsers);
        actionBtnUser();
        actionBtnOrders();
        actionAddNewUser();
    }
    if (b==false){
        console.log("нет в базе");
    }
});
}