import getHtmlObject from "../../lib/FactoryHtml";

const thead = getHtmlObject("thead");
const tr = getHtmlObject("tr");
const th = getHtmlObject("th");
const div = getHtmlObject("div");

const createTr = (el) => {
    return div.createHtmlElement(
        "",
        null,
        el
    );
};


export default () => {
    const nameTable = ["#","name","Email","Password","Role"];
    const thList = nameTable.map(el => {
        return th.createHtmlElement(
            "",
            null,
            [createTr(el)]
        )
    });

   const tHead = tr.createHtmlElement(
        "",
        null,
        thList
    );
    
    return tHead;
   
};