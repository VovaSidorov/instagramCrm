import getHtmlObject from "../../lib/FactoryHtml";

const thead = getHtmlObject("thead");
const tr = getHtmlObject("tr");
const th = getHtmlObject("th");

const nameTable = ["#","name","Email","Password","Role"]


// const trList = nameTable.map(el => tr.createHtmlElement(
//     "",
//     null,
//     el
// ));

// const cardProductList = ul.createHtmlElement(
//     "card-items-list list-unstyled",
//     null,
//     liList
// );
// render("modal-content-section", cardProductList);

const thNum = th.createHtmlElement(
    "",
    null,
    '#'
);

const thName = th.createHtmlElement(
    "",
    null,
    'name'
);

const thEmail = th.createHtmlElement(
    "",
    null,
    'Email'
);

const thPass = th.createHtmlElement(
    "",
    null,
    'Password'
);

const thRole = th.createHtmlElement(
    "",
    null,
    'Role'
);

const trHead = tr.createHtmlElement(
    "",
    null,
    [thNum,thName,thEmail,thPass,thRole]
);

const theadTable = thead.createHtmlElement(
    "",
    null,
    [trHead]
);
    export default  theadTable;
