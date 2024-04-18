import { addNewData } from "./services.js";
const form = document.querySelector("form")
const input = document.querySelectorAll(".form-control")
form.addEventListener("submit",function(e){
   e.preventDefault();
   const supplier = {
    companyName: input[0].value,
    address:{
        street: input[1].value,
        phone: input[2].value,
        city: input[3].value,
        country: input[4].value,
        
    }
   };
   addNewData(supplier)
})

