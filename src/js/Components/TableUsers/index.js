import getHtmlObject from "../../lib/FactoryHtml";
import theadTable from "./theadTable";
import bodyTable from "./bodyTable";


// import './style.scss';

const div = getHtmlObject("div");
const table = getHtmlObject("table");

const tableUser = table.createHtmlElement(
    "table table-striped",
    null,
    [theadTable,bodyTable]
);

const tableDiv = div.createHtmlElement(
    "container",
    null,
    [tableUser]
);

export default tableDiv;

{/* <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
      </tr>
     
    </tbody> */}


