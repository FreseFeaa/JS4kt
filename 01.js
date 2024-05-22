function calculateTotal(obj) {
    return Object.values(obj).reduce((ad, curr) => ad + curr, 0);
}

let obj = {
    price1: 100,
    price2: 150,
    price3: 200,
    price4: 100,
    price5: 150
};

let totalSum = calculateTotal(obj);
console.log(totalSum);

module.exports = { calculateTotal };