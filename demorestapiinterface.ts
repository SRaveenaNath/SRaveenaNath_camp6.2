//Step 1: Create interface of the model user

interface User{
    id: number,
    name: string,
    year: number,
    color: string,
    pantone_value: string

}

//Step 2: Declare WebApi end point

const baseApi='https://reqres.in/api/user';

//Step3: Fetch all Users
const fetAllUsers=async(url: string): Promise<User[]>=>{
    //Step 4: async - await and promise function
    const resolve=await fetch(url);
    const {data}=await resolve.json();
    return data;
}

//Step 5: Define function
const runAsyncFunction = async()=>{
    //Exception handling
    try{
        //call rest api
        const users = await fetAllUsers(baseApi);
        console.log(users);
    }
    catch(error){
        console.log(error);
    }
}

//Step 6: Call function
runAsyncFunction();