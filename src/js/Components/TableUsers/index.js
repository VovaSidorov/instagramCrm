import getHtmlObject from "../../lib/FactoryHtml";
import theadTable from "./theadTable";
import bodyTable from "./bodyTable";

import users from "../../users";
// import './style.scss';

const div = getHtmlObject("div");
const table = getHtmlObject("table");

const tableUser = table.createHtmlElement(
    "table table-striped",
    null,
    [theadTable(),bodyTable(users)]
);

const tableDiv = div.createHtmlElement(
    "container",
    null,
    [tableUser]
);

export default tableDiv;


