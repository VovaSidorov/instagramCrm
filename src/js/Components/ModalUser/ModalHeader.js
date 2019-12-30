import getHtmlObject from "../../lib/FactoryHtml";
import actionModalClose from "../../Actions/TableUsers/actionModalClose";

const div = getHtmlObject("div");
const h5 = getHtmlObject("h5");
const button = getHtmlObject("button");
const span = getHtmlObject("span");


const ariaHidden = span.createHtmlElement(
    "",
    [
        {name:"aria-hidden",value:"true"}
    ],
    "&times;"
);

const btnClose = button.createHtmlElement(
    "close",
    [
        {name:"data-dismiss",value:"modal"},
        {name:"aria-label",value:"Close"},
        {name:"id",value:"modalCloseX"},
    ],
    [ariaHidden]
);

const modalTitle = h5.createHtmlElement(
    "modal-title",
    null,
    "Edit"
);

const ModalHeader = div.createHtmlElement(
    "modal-header",
    null,
    [modalTitle,btnClose]
);

export default ModalHeader;
