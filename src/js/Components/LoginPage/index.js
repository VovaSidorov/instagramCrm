import getHtmlObject from "../../lib/FactoryHtml";


export default function LoginPage() {
    const div =getHtmlObject('div');

    return div.createHtmlElement("container",
        null,
        []);
}

