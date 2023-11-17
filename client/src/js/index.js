import '../styles/main.scss'

import { fetchAllProductsData, fetchCustomerData } from "./services/sanity-API";

try {
  const data = await fetchAllProductsData();
  console.log(data.result);
} catch (error) {
  console.log(error)
}

try {
  const email = 'test@gmail.com'
  const result = await fetchCustomerData(email);
  console.log('customer:', result)
} catch (error) {
  
}