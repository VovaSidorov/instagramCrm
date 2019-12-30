console.log("App was load ...");
import render from './lib/renderHtml';
import loginPage from './Components/LoginPage';
import ModalUser from './Components/ModalUser';
import actionBtnLogin from './Actions/LoginPage/actionBtnLogin';


render("app", loginPage);
// render("app", ModalUser);

actionBtnLogin();










