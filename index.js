//create three objects holding the customers prescription, price, refills, and discounts.
const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};
// create an array to populate with all cutomers for use later
const customers = [timmy, sarah, rocky];

//create a function that declares a variable
function calTotalCost(customData) {
  /* access the refill and pricePerRefill property 
and multiply them both together (number of refills * price per refill)*/
  let totalCost = customData.refills * customData.pricePerRefill;
  //if a customer has a subscription discount, they get a 25% discount
  if (customData.subscription) {
    totalCost *= 0.75;
  } //if a customer has a coupon, they get a $10 discount
  if (customData.coupon) {
    totalCost -= 10;
  } //return the totalCost after the function is performed
  return totalCost;
}
/* create a loop that declares a variable that represents each element 
in the customers array,*/
for (const customer of customers) {
  /*store the calculated total amount in the variable named 
    totalCost, it calculates the total amount for each customer 
    in the array one by one*/
  const totalCost = calTotalCost(customer);
  //console.log customer's full prescription cost
  console.log(`${customer.prescription} totalCost: $${totalCost}`);
}
