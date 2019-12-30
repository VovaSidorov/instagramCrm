import getHtmlObject from "../../lib/FactoryHtml";
import editEmail from "../../Components/ModalUser/inputEmail";
import editPass from "../../Components/ModalUser/inputPassword";
import editName from "../../Components/ModalUser/inputName";
import editRole from "../../Components/ModalUser/inputRole";

const div = getHtmlObject("div");

const ModalBody = div.createHtmlElement(
    "modal-body",
    null,
    [editEmail,editPass,editName,editRole]
);

export default ModalBody;