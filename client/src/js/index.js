import { fetchAllProductsData } from "./services/sanity-API";

try {
  const data = await fetchAllProductsData();
  console.log(data.result);
} catch (error) {
  console.log(error)
}