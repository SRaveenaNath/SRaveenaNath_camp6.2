"use strict";
//Step 1: Create interface of the model user
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Step 2: Declare WebApi end point
const baseApi = 'https://reqres.in/api/user';
//Step3: Fetch all Users
const fetAllUsers = (url) => __awaiter(void 0, void 0, void 0, function* () {
    //Step 4: async - await and promise function
    const resolve = yield fetch(url);
    const { data } = yield resolve.json();
    return data;
});
//Step 5: Define function
const runAsyncFunction = () => __awaiter(void 0, void 0, void 0, function* () {
    //Exception handling
    try {
        //call rest api
        const users = yield fetAllUsers(baseApi);
        console.log(users);
    }
    catch (error) {
        console.log(error);
    }
});
//Step 6: Call function
runAsyncFunction();
