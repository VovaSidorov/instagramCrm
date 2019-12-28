import getHtmlObject from "../../lib/FactoryHtml";


const tbody = getHtmlObject("tbody");
const tr = getHtmlObject("tr");
const th = getHtmlObject("th");
const div = getHtmlObject("div");
const td = getHtmlObject("td");

const createTr = ({id,login,email,pass,role}) => {
 console.log(id);
    const divId = th.createHtmlElement(
        "",
        [{name:"scope",value:"row"}],
        id.toString()
    );
    const divName = td.createHtmlElement(
        "",
        null,
        login
    );
    const divEmail = td.createHtmlElement(
        "",
        null,
        email
    );
    const divPass = td.createHtmlElement(
        "",
        null,
        pass
    );
    const divRole = td.createHtmlElement(
        "",
        null,
        role
    );

    return tr.createHtmlElement(
        "",
        null,
        [divId,divName,divEmail,divPass,divRole]
    );
};

export default (users) => {
    const thList = users.map((el,i) => {
        return createTr(users[i])
    });

   const tbody1 = tbody.createHtmlElement(
        "",
        null,
        thList
    );
    
    return tbody1;
   
};