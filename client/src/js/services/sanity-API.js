
const PROJECT_ID = 'p4kn0cp6';
const DATASET = 'production';
const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=`;
const TEMPORARY_TOKEN = '';

export async function fetchAllProductsData(){
    const query = encodeURIComponent(`*[_type == 'product']{nameEN, nameES, acute, category, price, descriptionEN, descriptionES, weight, isTopSeller,_id, "imageUrl": image.asset->url}`);

    try {
        const response = await fetch(`${URL}${query}`);
        return response.json();
    } catch (error) {
        console.log(error)
    }
}

export async function fetchCustomerData(email){
    const query = encodeURIComponent(`*[_type == 'customer'][email == '${email}']`);

    try {
        const response = await fetch(`${URL}${query}`);
        return response.json();
    } catch (error) {
        console.log(error)
    }
}

// 
// Example of usage
// 
// try {
//     const email = 'test@gmail.com'
//     const result = await fetchCustomerData(email);
//     console.log('customer:', result)
//   } catch (error) {
//     console.log(error)
//   }
// 

export async function createCustomer(customerData){
    const query = encodeURIComponent(`*[_type == 'customer'][email == '${email}']`);
    const queryOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TEMPORARY_TOKEN}`
        }
    }
    const body = {
        "mutations": [
            {"create" : {
                    //? uuid();
                    // "_id" : 
                    "_type": "customer",
                    "name": body.name,
                    "email" : body.email,
                    "password": body.password,
                 }
            }
        ]
    }

    try {
        fetch(`${URL}`, queryOptions, body)
    } catch (error) {
        console.log(error)
    }
}   