import getHtmlObject from "../../lib/FactoryHtml";

import './style.scss';

const a = getHtmlObject('a');
const ul = getHtmlObject('ul');
const li = getHtmlObject('li');
const div = getHtmlObject('div');

const navLinks = [
    {name: "Users", attr: [{name: "href", value: "/"}]},
    {name: "Orders", attr: [{name: "href", value: "/"}]},
    {name: "Create user", attr: [{name: "href", value: "/"}]},
    {name: "Create order", attr: [{name: "href", value: "/"}]},
    {name: "Order page", attr: [{name: "href", value: "/"}]},
    {name: "Users page", attr: [{name: "href", value: "/"}]},
    {name: "Exit", attr: [{name: "href", value: "/"}]},
];

const navItems = navLinks.map((el) =>
    li.createHtmlElement(
        "nav-item",
        null,
        [
            a.createHtmlElement(
                "nav-link",
                el.attr,
                el.name == "Cart"?createCartText(el.name):el.name
            )
        ]
    )
);

const navbarNav = ul.createHtmlElement("navbar-nav",null,navItems);
const navbarCollapse = div.createHtmlElement(
    "collapse navbar-collapse justify-content-end",
    [{name:"id", value:"navbarSupportedContent"}],
    [navbarNav]
);

export default navbarCollapse;