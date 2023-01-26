/*
* File: app.js
* Author: Tóth Fedor László
* Copyright: 2023, Tóth Fedor László
* Group: Szoft I-2-E
* Date: 2023.01.26
* Github: https://github.com/TothFL/
* Licenc: GNU GPL
*/

const asidaElem = document.querySelector("#aside");
const bsidaElem = document.querySelector("#bside");
const csidaElem = document.querySelector("#cside");
const dsidaElem = document.querySelector("#dside");
const calcButton = document.querySelector("#calcbutton");
const areaElem= document.querySelector("#area");

calcButton.addEventListener('click', ()=>{
    //console.log('működik')
    let aside = Number(asidaElem.value);
    let bside = Number(bsidaElem.value);
    let cside = Number(csidaElem.value);
    let dside = Number(dsidaElem.value);
    let area = calcArea(aside, bside, cside, dside);
    //console.log(area);
    //areaElem.value=areakerek
    let areakerek = parseFloat(area).toFixed(2);
    areaElem.value=areakerek

});

function calcArea(a, b, c, d) {
    let terulet = ((a+c)/(4*(a-c))) * Math.sqrt((a+b-c+d)*(a-b-c+d)*(a+b-c-d)*(-a+b+c+d));
    return terulet;
}

