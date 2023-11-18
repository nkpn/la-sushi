import { fetchAllProductsData, fetchCustomerData } from "./services/sanity-API";
try {
  var data = await fetchAllProductsData();
  console.log(data.result);
} catch (error) {
  console.log(error);
}
try {
  var email = 'test@gmail.com';
  var result = await fetchCustomerData(email);
  console.log('customer:', result);
} catch (error) {}