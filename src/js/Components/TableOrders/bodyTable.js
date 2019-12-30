import getHtmlObject from "../../lib/FactoryHtml";


const tbody = getHtmlObject("tbody");
const tr = getHtmlObject("tr");
const th = getHtmlObject("th");
const div = getHtmlObject("div");
const td = getHtmlObject("td");

const createTr = ({id,accountname,orderDescription,price,orderStatus,orderPrice}) => {
    const trId = th.createHtmlElement(
        "",
        [{name:"scope",value:"row"}],
        id.toString()
    );
    const trAccountname = td.createHtmlElement(
        "",
        null,
        accountname
    );
    const trOrderDescription = td.createHtmlElement(
        "",
        null,
        orderDescription
    );
    const trPrice = td.createHtmlElement(
        "",
        null,
        price.toString()
    );
    const trOrderStatus = td.createHtmlElement(
        "",
        null,
        orderStatus
    );
    const trOrderPrice = td.createHtmlElement(
        "",
        null,
        orderPrice.toString()
    );

    return tr.createHtmlElement(
        "",
        null,
        [trId,trAccountname,trOrderDescription,trPrice,trOrderStatus,trOrderPrice]
    );
};

export default (orders) => {
    const thList = orders.map((el,i) => {
        return createTr(orders[i])
    });

   const tbody1 = tbody.createHtmlElement(
        "",
        null,
        thList
    );
    
    return tbody1;
   
};