import getHtmlObject from "../../lib/FactoryHtml";

const button = getHtmlObject("button");

const btnNewUser= button.createHtmlElement(
    "btn btn-primary",
    [{name:"type",value:"button"},{name:"id",value:"addNewUser"}],
    "AddNewUser"
);

export default btnNewUser;