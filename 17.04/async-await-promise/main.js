// import {BASE_URL} from "./app.js";

import { BASE_URL } from "./app.js";

// const lists = document.querySelector(".lists");
// async function getData(ednpoint){
//     const response = await fetch(`${BASE_URL}/${ednpoint}`);
//     const data = await response.json();
//     drawLists(data);
// }
// console.log(getData("suppliers"));

// function drawLists(array){
//     lists.innerHTML = "";
//     array.forEach((element) => {
//         const listElem = document.createElement("li");
//         listElem.textContent = element.companyName;
//         lists.append(listElem);
//     });
// }
const tBody = document.querySelector(".tbody");

async function getData(ednPoint){
  try{
    const response = await fetch(`${BASE_URL}/${ednPoint}`);
    const data = await response.json();
    drawTable(data);
  }catch(error){}
}

getData("suppliers");

function drawTable(data) {
    tBody.innerHTML = "";
    data.forEach((element) =>{
    const trElem = document.createElement("tr");

    trElem.innerHTML = `            
    <th scope="row">${element.id}</th>
    <td>${element.companyName}</td>
    <td>${element.address?.street}</td>
    <td>${element.address?.phone}</td>
    <td>${element.address.city}, ${element.address.country}</td>
    <td><a class="btn btn-primary" href="./details.html">Details</a></td>
    <td><a class="btn btn-success" href="">Edit</a></td>
    <td><button class="btn btn-danger">Delete</button></td>`;
    tBody.append(trElem);
    })
}