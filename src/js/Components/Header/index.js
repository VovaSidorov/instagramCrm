import getHtmlObject from "../../lib/FactoryHtml";
import navbarBrand from "./navbarBrand";
import navbarCollapse from "./navbarCollapse";
import navbarToggler from "./navbarToggler";


    const nav = getHtmlObject('nav');

    const header = nav.createHtmlElement("navbar navbar-expand-lg navbar-dark bg-dark",
        null,
        [navbarBrand,navbarToggler,navbarCollapse]);

        export default header; 
