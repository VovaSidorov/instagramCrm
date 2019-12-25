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
import Table from "./Table";
import Thead from "./Thead";
import Tr from "./Tr";
import Th from "./Th";
import Tbody from "./Tbody";

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
        case "table":
            return new Table();
        case "thead":
            return new Thead();
        case "th":
            return new Th();
        case "tr":
            return new Tr();
        case "tbody":
                return new Tbody();                
        default:
            return new Div();
    }
}