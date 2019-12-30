import getHtmlObject from "../../lib/FactoryHtml";

const div = getHtmlObject("div");
const label = getHtmlObject("label");
const select = getHtmlObject("select");
const option = getHtmlObject("option");

const optionAdmin = option.createHtmlElement(
    "",
    [{name:"value",value:"Admin"}],
    "Admin"
);

const optionMenager= option.createHtmlElement(
    "",
    [{name:"value",value:"Menager"}],
    "Menager"
);

const optionExecutor = option.createHtmlElement(
    "",
    [{name:"value",value:"Executor"}],
    "Executor"
);

const selectRole = select.createHtmlElement(
    "custom-select",
    [{name:"id",value:"editUserRole"}],
    [optionAdmin,optionMenager,optionExecutor]
);

const labelInput = label.createHtmlElement(
    "input-group-text",
    [{name:"for",value:"inputGroupSelect01"}],
    "Role"
);

const inputGroupPrepend = div.createHtmlElement(
    "input-group-prepend",
    null,
    [labelInput]
);

const inputRole = div.createHtmlElement(
    "input-group mb-3",
    null,
    [inputGroupPrepend,selectRole]
);

export default inputRole;