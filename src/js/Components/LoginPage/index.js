import getHtmlObject from "../../lib/FactoryHtml";
import GroupEmail from "./email";
import GroupPassword from "./password";
import CheckBox from "./checkbox";
import btnEnter from "./buttons";

import './style.scss';

const div = getHtmlObject("div");
const form = getHtmlObject("form");

const formSection = form.createHtmlElement(
    "top-cover",
    null,
    [GroupEmail, GroupPassword,CheckBox, btnEnter]
);

const col = div.createHtmlElement(
    "col-4 align-middle",
    null,
    [formSection]
);

const row = div.createHtmlElement(
    "row justify-content-center centrBlock",
    null,
    [col]
);

const loginPage = div.createHtmlElement(
    "container",
    null,
    [row]
);

export default loginPage; 

{/* <div class="container ">
<div class="row justify-content-center centrBlock">
  <div class="col-4 align-middle">
    <form class="top-cover"> 
  
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
      <button type="submit" class="btn btn-primary" id="btn">Enter</button>
      <button type="submit" class="btn btn-primary" id="more">Registration</button>
    </form>
  </div>
</div>
</div> */}