const test = require("node:test");
const assert = require("node:assert");

const { calculateTotal } = require("./01.js");

test("Проверка суммы всех элементов объекта", () => {
    const obj1 = {
        price1: 100,
        price2: 150,
        price3: 200,
        price4: 100,
        price5: 150
    };
    const expectedResult1 = 700;

    const obj2 = {
        price1: 0,
        price2: 100,
        price3: -100,
        price4: 200,
        price5: -200
    };
    const expectedResult2 = 0;

    const obj3 = {
        price1: 1000,
        price2: -300,
        price3: -500,
        price4: 0,
        price5: -300
    };
    const expectedResult3 = -100;

    assert.strictEqual(calculateTotal(obj1), expectedResult1);
    assert.strictEqual(calculateTotal(obj2), expectedResult2);
    assert.strictEqual(calculateTotal(obj3), expectedResult3);



});
