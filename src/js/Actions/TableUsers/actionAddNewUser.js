import modalUser from '../../Components/ModalUser';
import render from '../../lib/renderHtml';
import actionModalClose from "./actionModalClose";


export default () => {
    document.getElementById("addNewUser")
        .addEventListener('click', function(event){
            event.preventDefault();
            render("app", modalUser);
            actionModalClose();
            console.log("modalUser");
        });
}

