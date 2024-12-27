"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log('Welcome');
//for reference
/*const getData=()=>{
    setTimeout(()=>{
        return {data: ['tina','mina','nina']}
    },1000)
};

const getDataTest=()=>
    console.log("No wait");

//Output
const result=getData()
console.log(result);*/
//Promise return type-string array of data if resolved
const getData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: ['tina', 'mina', 'nina'] });
        }, 5000);
    });
};
//usage with promise
getData().then(result => {
    console.log(result);
});
//usage with async and await
const fetchdata = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getData();
    console.log(result);
});
//call fetch data
fetchdata();
/*refer notes for explaination*/ 
