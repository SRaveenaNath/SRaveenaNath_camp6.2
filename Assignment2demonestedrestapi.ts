// Step 1: Create interface of the model user

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

interface geo{
    lat: string;
    lng: string;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

// Step 2: Declare WebApi endpoint
const baseApiInterface = 'https://jsonplaceholder.typicode.com/users';

// Step 3: Fetch all Users
const fetchAllUsersInterface = async (url: string): Promise<User[]> => {
    // Step 4: async - await and promise function
    const resolve = await fetch(url);
    const data = await resolve.json();
    return data;
};

// Step 5: Define function
const runAsyncFunctionInterface = async () => {
    // Exception handling
    try {
        // Call rest API
        const users = await fetchAllUsersInterface(baseApiInterface); // Use await to resolve the Promise
        console.log(users); // Log the actual data, not the Promise
    } catch (error) {
        console.log(error);
    }
};

// Step 6: Call function
runAsyncFunctionInterface();
