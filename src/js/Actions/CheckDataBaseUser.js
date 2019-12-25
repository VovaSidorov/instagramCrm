import render from '../lib/renderHtml';
import header from '../Components/Header';


export default (formDataResults,users) => {
    console.log(formDataResults);
    console.log(users);
    let remEmail, remPass,
        incorrectPerson = document.getElementById("incorrectPerson");

    users.forEach(element =>{
        if (formDataResults.email == element.email){
            remEmail = element.id;
            console.log()
        }
    });

    users.forEach(element =>{
        if (formDataResults.pass == element.pass){
            remPass = element.id;
        }
    });

    if (remEmail == remPass && remEmail!=undefined && remPass !=undefined){
        // document.getElementById("app").innerHTML = "";
        // console.log("есть а базе");
        // return render("app", header);
        // console.log("есть а базе");
        return true;
    }
    else{
        // console.log("нет в базе");
        return false
    }

}