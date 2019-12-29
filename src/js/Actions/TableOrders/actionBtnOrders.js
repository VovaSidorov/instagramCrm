import header from '../../Components/Header';
import tableOrders from '../../Components/TableOrders';
import render from '../../lib/renderHtml';


export default () => {
document.getElementById("pageOrders")
.addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById("app").innerHTML = "";
    render("app", header);
    render("app", tableOrders);
    console.log("table orders");
});
}