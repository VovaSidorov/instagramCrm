import getHtmlObject from "../../lib/FactoryHtml";

const div = getHtmlObject("div");
const form = getHtmlObject("form");
const label = getHtmlObject("label");
const input = getHtmlObject("input");
const small = getHtmlObject("small");

const emailHelp = small.createHtmlElement(
    "form-text text-muted",
    [
        {name:"id",value:"emailHelp"},
    ],
    "We'll never share your email with anyone else."
);

const invalidFeedback = div.createHtmlElement(
    "invalid-feedback",
    [
        {name:"id",value:"incorrectEmail"},
    ],
    "Неккоректный ввод электронной почты"
);

const inputEmail = input.createHtmlElement(
    "form-control",
    [
        {name:"type",value:"email"},
        {name:"id",value:"email"},
        {name:"placeholder",value:"Enter email"}
    ],
    "Email address"
);

const labelEmail = label.createHtmlElement(
    "form-group",
    [{name:"for",value:"exampleInputEmail1"}],
    "Email address"
);

const GroupEmail = div.createHtmlElement(
    "form-group",
    null,
    [labelEmail, inputEmail,invalidFeedback,emailHelp]
);

    export default  GroupEmail;