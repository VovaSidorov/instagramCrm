import getHtmlObject from "../../lib/FactoryHtml";

const button = getHtmlObject("button");

const btnEnter = button.createHtmlElement(
    "btn btn-primary",
    [
        {name:"type",value:"submit"},
        {name:"id",value:"btn"},
    ],
    "Enter"
);

    export default  btnEnter;



