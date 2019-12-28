console.log("App was load ...");
import render from './lib/renderHtml';
import loginPage from './Components/LoginPage';
import tableOrders from './Components/TableOrders';
import actionBtnLogin from './Actions/LoginPage/actionBtnLogin';

render("app", loginPage);
render("app", tableOrders);

actionBtnLogin();









