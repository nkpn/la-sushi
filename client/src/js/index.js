import '../styles/main.scss'
import { fetchAllProductsData, fetchCustomerData } from "./services/sanity-API";

import homepage from './pages/homepage';

// TODO Logic to show
// if Home page
// if (window.location.href == '/'){
  homepage();
// }


try {
  const email = 'test@gmail.com'
  const result = await fetchCustomerData(email);
  console.log('customer:', result)
} catch (error) {
  
}