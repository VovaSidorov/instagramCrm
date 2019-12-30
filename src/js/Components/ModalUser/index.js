import getHtmlObject from "../../lib/FactoryHtml";
import modalHeader from "../../Components/ModalUser/ModalHeader";
import modalBody from "../../Components/ModalUser/ModalBody";
import modalFooter from "../../Components/ModalUser/modalFooter";

import './style.scss';

const div = getHtmlObject("div");



const modalContent = div.createHtmlElement(
    "modal-content",
    null,
    [modalHeader,modalBody,modalFooter]
);

const modalDialog = div.createHtmlElement(
    "modal-dialog",
    [ {name:"role",value:"document"}],
    [modalContent]
);

const ModalWindowUser = div.createHtmlElement(
    "modal modalShow",
    [
        {name:"tabindex",value:"-1"},
        {name:"role",value:"dialog"},
        {name:"id",value:"modalUserAdd"},
    ],
    [modalDialog]
);

export default ModalWindowUser;