import getHtmlObject from "../../lib/FactoryHtml";

const div = getHtmlObject("div");
const button = getHtmlObject("button");



const btnSave = button.createHtmlElement(
    "btn btn-primary",
    [
        {name:"type",value:"button"}
    ],
    "Save changes"
);

const btnClose = button.createHtmlElement(
    "btn btn-secondary",
    [
        {name:"type",value:"button"},
        {name:"data-dismiss",value:"modal"},
    ],
    "Close"
);

const ModalFooter = div.createHtmlElement(
    "modal-footer",
    null,
    [btnClose,btnSave]
);

export default ModalFooter;