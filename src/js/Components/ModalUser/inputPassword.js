import getHtmlObject from "../../lib/FactoryHtml";

const div = getHtmlObject("div");
const span = getHtmlObject("span");
const input = getHtmlObject("input");

const inputText = input.createHtmlElement(
    "form-control",
    [
        {name:"type",value:"text"},
        {name:"aria-label",value:"Sizing example input"},
        {name:"aria-describedby",value:"inputGroup-sizing-default"},
        {name:"id",value:"editUserPass"},
    ],
    "Password"
);

const spanText = span.createHtmlElement(
    "input-group-text",
    null,
    "Password"
);

const inputGroupPrepend = div.createHtmlElement(
    "input-group-prepend",
    null,
    [spanText]
);

const inputPass = div.createHtmlElement(
    "input-group mb-3",
    null,
    [inputGroupPrepend,inputText]
);

export default inputPass;