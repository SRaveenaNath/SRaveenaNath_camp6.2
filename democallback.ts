console.log('Welcome')
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
const getData=(): Promise<{data: string[]}> =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({data: ['tina','mina','nina']});
        },5000);

    });
};

//usage with promise
getData().then(result=>{
    console.log(result);
});

//usage with async and await

const fetchdata=async()=>{
    const result = await getData();
    console.log(result);
}
   
//call fetch data
fetchdata();

/*refer notes for explaination*/