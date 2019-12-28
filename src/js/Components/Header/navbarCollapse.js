import getHtmlObject from "../../lib/FactoryHtml";

import './style.scss';

const a = getHtmlObject('a');
const ul = getHtmlObject('ul');
const li = getHtmlObject('li');
const div = getHtmlObject('div');

const navLinks = [
    {name: "Users", attr: [{name: "id", value: "pageUsers"}]},
    {name: "Orders", attr: [{name: "href", value: "/"},{name: "id", value: "pageOrders"}]},
    {name: "Create user", attr: [{name: "href", value: "/"},{name: "id", value: "pageCrUser"}]},
    {name: "Create order", attr: [{name: "href", value: "/"},{name: "id", value: "pageCrOrder"}]},
    {name: "Order page", attr: [{name: "href", value: "/"},{name: "id", value: "OrderPage"}]},
    {name: "Users page", attr: [{name: "href", value: "/"},{name: "id", value: "Userpage"}]},
    {name: "Exit", attr: [{name: "href", value: "/"},{name: "id", value: "Exit"}]},
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