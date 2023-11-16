
const PROJECT_ID = 'p4kn0cp6';
const DATASET = 'production';
const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=`;

export async function fetchAllProductsData(){
    const query = encodeURIComponent(`*[_type == 'product']{name, acute, category, price, description, weight, _id, "imageUrl": image.asset->url}`);

    try {
        const response = await fetch(`${URL}${query}`);
        return response.json();
    } catch (error) {
        console.log(error)
    }
}
