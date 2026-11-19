// Qno 1 • Task: Calculate the final price of an item based on a
// purchaseAmount:
// • $100 or more: 20% discount
// • $50 to $99.99: 10% discount
// • Under $50: No discount
const Amount = 1200;
let discount = 0;
if (Amount >= 100){
 discount = 0.2;
}
else if (Amount >= 50){
 discount = 0.1;
}
const finalPrice = Amount * (1 - discount);
console.log(finalPrice);





