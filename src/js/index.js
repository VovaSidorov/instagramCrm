console.log("App was load ...");
import render from './lib/renderHtml';
import loginPage from './Components/LoginPage';
import tableUsers from './Components/TableUsers';
import actionBtnLogin from './Actions/LoginPage/actionBtnLogin';

render("app", loginPage);
render("app", tableUsers);
actionBtnLogin();









