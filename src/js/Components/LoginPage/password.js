import getHtmlObject from "../../lib/FactoryHtml";

const div = getHtmlObject("div");
const form = getHtmlObject("form");
const label = getHtmlObject("label");
const input = getHtmlObject("input");
const small = getHtmlObject("small");


const invalidFeedback1 = div.createHtmlElement(
    "invalid-feedback",
    [
        {name:"id",value:"incorrectPass"},
    ],
    "Неверный логин или пароль. Повторите попытку еще раз"
);

const invalidFeedback = div.createHtmlElement(
    "invalid-feedback",
    [
        {name:"id",value:"incorrectPass"},
    ],
    "Неккоректный ввод пароля"
);

const inputEmail = input.createHtmlElement(
    "form-control",
    [
        {name:"type",value:"password"},
        {name:"id",value:"password"},
        {name:"placeholder",value:"Password"}
    ],
    "Email address"
);

const labelEmail = label.createHtmlElement(
    "form-group",
    [{name:"for",value:"exampleInputPassword1"}],
    "Email address"
);

const GroupPassword = div.createHtmlElement(
    "form-group",
    null,
    [labelEmail, inputEmail, invalidFeedback, invalidFeedback1]
);

    export default  GroupPassword;

   