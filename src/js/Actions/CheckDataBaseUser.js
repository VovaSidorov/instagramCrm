
export default (formDataResults,users) => {
    console.log(formDataResults.email);
    console.log(users);
    let remEmail, remPass,
        incorrectPerson = document.getElementById("incorrectPerson");

    users.forEach(element =>{
        if (formDataResults.email == element.email){
            remEmail = element.id;
        }
    });

    users.forEach(element =>{
        if (formDataResults.pass == element.pass){
            remPass = element.id;
        }
    });

    if (remEmail == remPass && remEmail!=undefined && remPass !=undefined){
        return true;
        // localStorage.setItem(email,pass);
        // document.location.href = 'userPage.html';
    }
    else{
        return false
    }

}