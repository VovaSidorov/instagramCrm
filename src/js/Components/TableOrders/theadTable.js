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
    const nameTable = [
        {title:"#"},
        {title:"Instagram username"},
        {title:"Description"},
        {title:"Price"},
        {title:"Order staus"},
        {title:"Payment State"},
    ];
  
    const thList = nameTable.map((el,i) => {

        return th.createHtmlElement(
            "",
            null,
            [createTr(nameTable[i].title)]
        )
    });

   const tHead = tr.createHtmlElement(
        "",
        null,
        thList
    );
    
    return tHead;
   
};