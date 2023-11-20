
const PROJECT_ID = 'p4kn0cp6';
const DATASET = 'production';
const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=`;
const TEMPORARY_TOKEN = '';

import {createClient} from '@sanity/client';

// documentation
// https://www.npmjs.com/package/@sanity/client

export const client = createClient({
    projectId: 'p4kn0cp6',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })

export async function fetchAllProductsData(){
    const products = await client.fetch('*[_type == "product"]{nameEN, nameES, isSpicy, category, price, descriptionEN, descriptionES, customUrl, weight, isTopSeller,_id,  "imageUrl": image.asset->url}')
    return products
}

export async function fetchProductByURL(url){
    const product = await client.fetch(`*[_type == 'product' && customUrl == '${url}']{nameEN, nameES, isSpicy, category, price, descriptionEN, descriptionES, customUrl, weight, isTopSeller,_id, "imageUrl": image.asset->url}`)
    return product
}

//* example of usage:
async function getProductInfoByUrl(url){
	try {
		const data = await fetchProductByURL(url);
		console.log('data about the product by URL: ', data)
	} catch (error) {
		console.log(error);
	}
}

getProductInfoByUrl("set-philadelphia")



export async function fetchProductDataById(id){
    const product = await client.fetch(`*[_type == 'product' && _id == '${id}']{nameEN, nameES, isSpicy, category, price, descriptionEN, descriptionES, customUrl, weight, isTopSeller,_id, "imageUrl": image.asset->url}`);
    return product
}

//* example of usage:
async function getProductInfo(id){
	
	try {
		const data = await fetchProductDataById(id);
		console.log('data about the product: ', data)
	} catch (error) {
		console.log(error);
	}
}

getProductInfo('1d87c793-3b02-4332-bcc7-f990edb39fe4')
//* end of example


export async function fetchCustomerData(email){
    const query = encodeURIComponent(`*[_type == 'customer'][email == '${email}']`);

    try {
        const response = await fetch(`${URL}${query}`);
        return response.json();
    } catch (error) {
        console.log(error)
    }
}



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