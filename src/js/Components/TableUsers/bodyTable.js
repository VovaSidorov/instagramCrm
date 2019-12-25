import getHtmlObject from "../../lib/FactoryHtml";

const tbody = getHtmlObject("tbody");
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
    [{name:"scope",value:"row"}],
    '1'
);

const thName = th.createHtmlElement(
    "",
    null,
    'Vova'
);

const thEmail = th.createHtmlElement(
    "",
    null,
    'Vova@gmail.com'
);

const thPass = th.createHtmlElement(
    "",
    null,
    'Pass1324654word'
);

const thRole = th.createHtmlElement(
    "",
    null,
    'Admin'
);

const trBody = tr.createHtmlElement(
    "",
    null,
    [thNum,thName,thEmail,thPass,thRole]
);

const bodyTable = tbody.createHtmlElement(
    "",
    null,
    [trBody]
);
    export default  bodyTable;

//     <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Larry</td>
//       <td>the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>