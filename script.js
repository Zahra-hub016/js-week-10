// Week 10 - Functions for Tip and Delivery Fee


// 1. Calculate the tip
// bill = total bill amount
// percent = tip percentage
function calculateTip(bill, percent) {
    let tip = (bill * percent) / 100;

    return tip;
}


// 2. Calculate the delivery fee
// total = total order amount
// city = delivery city
function getDeliveryFee(total, city) {

    if (city === "Kabul") {
        return 50;
    } else if (city === "Herat") {
        return 70;
    } else if (city === "Mazar") {
        return 60;
    } else {
        return 80;
    }
}


// 3. Call calculateTip() three times

let tip1 = calculateTip(100, 10);
let tip2 = calculateTip(250, 15);
let tip3 = calculateTip(500, 20);

console.log("Tip 1:", tip1);
console.log("Tip 2:", tip2);
console.log("Tip 3:", tip3);


// 4. Call getDeliveryFee() three times

let delivery1 = getDeliveryFee(500, "Kabul");
let delivery2 = getDeliveryFee(300, "Herat");
let delivery3 = getDeliveryFee(700, "Mazar");

console.log("Delivery 1:", delivery1);
console.log("Delivery 2:", delivery2);
console.log("Delivery 3:", delivery3);