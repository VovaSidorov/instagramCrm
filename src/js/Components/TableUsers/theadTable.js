import getHtmlObject from "../../lib/FactoryHtml";

const thead = getHtmlObject("thead");
const tr = getHtmlObject("tr");
const th = getHtmlObject("th");

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

    {/* <div class="container ">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Role</th>
        </tr>
      </thead>
      
    </table>
  </div> */}