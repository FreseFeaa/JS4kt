const {  products } = require("./07products.js"); 

function filterProductsByCount(products, minCount) {
    return products.filter(product => product.count > minCount);
}

function findProductByPriceRange(products, minPrice, maxPrice) {
    return products.find(product => product.price >= minPrice && product.price <= maxPrice);
}

function sortProductsByPriceDescending(products) {
    return products.slice().sort((a, b) => b.price - a.price);
}

function calculateTotalCost(products) {
    return products.reduce((acc, product) => acc + product.price * product.count, 0);
}

function transformProducts(products) {
    return products.map(product => ({
        ...product,
        marks_total: product.marks.reduce((acc, mark) => acc + mark, 0)
    }));
}

function sortProductsByTotalMarks(products) {
    return products.sort((a, b) => b.marks_total - a.marks_total);
}

function longStick () {
    console.log("____________________________________________________________________________________________________________________")
    console.log(" ")
}

longStick ()
console.log("1. Отфильтровать товары по условию, если их количество будет больше 10: ")
console.log(filterProductsByCount(products, 10));
longStick ()
console.log("2. Найти значение элемента массива (товара), чья цена находится в диапазоне от 800 до 900 включительно:")
console.log(findProductByPriceRange(products, 800, 900));
longStick ()
console.log("3. Отсортировать данные товаров по цене (по убыванию): ")
console.log(sortProductsByPriceDescending(products));
longStick ()
console.log("4. Посчитать итоговую стоимость всех товаров в массиве: ")
console.log(calculateTotalCost(products));
longStick ()
console.log("5. Преобразовать массив таким образом, чтобы изменить свойство marks и получить итоговую сумму оценок: ")
console.log(transformProducts(products));
longStick ()
console.log("6. Итоговый результат отсортировать по marks_total: ")
console.log(sortProductsByTotalMarks(transformProducts(products)));
