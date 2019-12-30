import header from '../../Components/Header';
import tableUsers from '../../Components/TableUsers';
import render from '../../lib/renderHtml';

export default () => {
    document.getElementById("modalCloseX")
        .addEventListener('click', function(event){
            event.preventDefault();
            document.getElementById("app").innerHTML = "";
            render("app", header);
            render("app", tableUsers);
        });

    document.getElementById("modalClose")
        .addEventListener('click', function(event){
            event.preventDefault();
            document.getElementById("app").innerHTML = "";
            render("app", header);
            render("app", tableUsers);
        });
}