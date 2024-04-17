// const eggs = [];


// function g() {
// return new  Promise(function(res,rej){
//     if(eggs.length===0){
//         return  rej({
//             mail : "failed"
//         })
//     }
//     else{
//         return res({
//             data : eggs,
//             mail : "succes"
//         })
//     }
// })
// }
    

    

    
// function gPromise(callbackFn){
//     callbackFn().then((rej) =>{
//         console.log(rej);
//     }).catch((res) =>{
//         console.log(res);
//     })
// }
// //  async
// async function gAsync(callbackFn){
//     const res = await callbackFn();
//     console.log(`result from ASYNC: ` ,res);
// }
// gAsync(g)
// gPromise(g);
 export  const BASE_URL = "https://northwind.vercel.app/api";