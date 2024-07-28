import { createElement, createHeader } from "../../script/layout";
let div=createElement('div','desk');
  for (let i = 0; i < 2; i++) {
    let page=createElement('div','page');
    let header=createHeader();
    page.appendChild(header);
    div.appendChild(page);
  }
document.body.append(div);