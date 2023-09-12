//Don't use var and all of these are wrong but to understand

var customerName = "bob";
const leastFavoriteCustomer = "Will";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Bobby";
}
