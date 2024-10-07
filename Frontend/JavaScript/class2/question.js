//question 1
let foodPrice = 500;
let drinkPrice = 120;
let tips = ((foodPrice + drinkPrice) * 10) / 100;
console.log("the waiter tips amount  is:", tips);
let totalBill = foodPrice + drinkPrice + tips;
console.log("the total bill is:", totalBill);
//question 2
let originalPrice = 570;
let discount = (originalPrice * 30) / 100; //30% of original price
console.log("the discount amount is:", discount);
let finalPrice = originalPrice - discount;
console.log("the final price is after dicount:", finalPrice);
//question 3
let productPrice = 7899;
let salesTaxRate = (productPrice * 8) / 100;
console.log("the sales tax 8% that is:", salesTaxRate);
let totalPrice = productPrice + salesTaxRate;
console.log(
  "after adding sales tax the total price of product is:",
  totalPrice
);
