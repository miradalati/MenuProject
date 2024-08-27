const express = require('express')
const cors = require('cors')
const xlsx = require('xlsx')

let wb=xlsx.readFile("C:/Users/mirad/OneDrive - University of Saint Joseph/Coding/Projects/Project1/menu.xlsx");

let appetizers = wb.Sheets['Appetizers'];
let data_appetizers = xlsx.utils.sheet_to_json(appetizers);

let burgers = wb.Sheets['Burgers'];
let data_burgers = xlsx.utils.sheet_to_json(burgers);

let pizzas = wb.Sheets['Pizzas'];
let data_pizzas = xlsx.utils.sheet_to_json(pizzas);

let pasta = wb.Sheets['Pasta'];
let data_pasta = xlsx.utils.sheet_to_json(pasta);

let salads = wb.Sheets['Salads'];
let data_salads = xlsx.utils.sheet_to_json(salads);

let main = wb.Sheets['Main Courses'];
let data_main = xlsx.utils.sheet_to_json(main);

let desserts = wb.Sheets['desserts'];
let data_desserts = xlsx.utils.sheet_to_json(desserts);

let drinks = wb.Sheets['drinks'];
let data_drinks = xlsx.utils.sheet_to_json(drinks);

data_appetizers.forEach(platter => {
    let app = document.createElement("div");
    app.innerHTML = platter.name;
});
