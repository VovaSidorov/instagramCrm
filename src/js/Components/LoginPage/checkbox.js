import getHtmlObject from "../../lib/FactoryHtml";

const div = getHtmlObject("div");
const form = getHtmlObject("form");
const label = getHtmlObject("label");
const input = getHtmlObject("input");
const small = getHtmlObject("small");

const inputCheckBox = input.createHtmlElement(
    "form-check-input",
    [
        {name:"type",value:"checkbox"},
        {name:"id",value:"exampleCheck1"},
    ],
    "Email address"
);

const labelCheckBox = label.createHtmlElement(
    "form-check-label",
    [{name:"for",value:"exampleCheck1"}],
    "Check me out"
);

const CheckBox = div.createHtmlElement(
    "form-group form-check",
    null,
    [inputCheckBox, labelCheckBox]
);

    export default  CheckBox;
