import Div from "./Div";
import Paragraph from "./Paragraph";
import Img from "./Img";
import A from "./A";
import Button from "./Button";
import Nav from "./Nav";
import Li from "./Li";
import Ul from "./Ul";
import Span from "./Span";
import H5 from "./H5";
import Form from "./Form"
import Input from "./Input";
import Small from "./Small";
import Label from "./Label";

export default function (tag) {
    switch (tag) {
        case "a":
            return new A();
        case "button":
            return new Button();
        case "img":
            return new Img();
        case "nav":
            return new Nav();
        case "li":
            return new Li();
        case "p":
            return new Paragraph();
        case "span":
            return new Span();
        case "ul":
            return new Ul();
        case "h5":
            return new H5();
        case "form":
            return new Form();
        case "input":
            return new Input();  
        case "label":
            return new Label();  
        case "small":
            return new Small();      
        default:
            return new Div();
    }
}