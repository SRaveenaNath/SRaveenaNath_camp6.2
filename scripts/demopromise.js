"use strict";
//Function that returns a Promise to simulate 
//an asynchronous operation
//eg., fetching data from a server
const fetchDataFromServer = (success) => {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve("Data fetched successfully!");
        }
        else {
            reject("Error: Failed to fetch data!");
        }
    });
};
//Usage
fetchDataFromServer(true) //fetchDataFromServer(false) --> op Error: Failed to fetch data! 
    .then((message) => {
    console.log(message);
})
    .catch((error) => {
    console.log(error);
});
