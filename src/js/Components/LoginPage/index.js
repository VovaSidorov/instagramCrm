import getHtmlObject from "../../lib/FactoryHtml";
import GroupEmail from "./email";
import GroupPassword from "./password";
import CheckBox from "./checkbox";
import btnEnter from "./buttons";

import './style.scss';

const div = getHtmlObject("div");
const form = getHtmlObject("form");

const formSection = form.createHtmlElement(
    "top-cover",
    null,
    [GroupEmail, GroupPassword,CheckBox, btnEnter]
);

const col = div.createHtmlElement(
    "col-4 align-middle",
    null,
    [formSection]
);

const row = div.createHtmlElement(
    "row justify-content-center centrBlock",
    null,
    [col]
);

const loginPage = div.createHtmlElement(
    "container",
    null,
    [row]
);

export default loginPage;
