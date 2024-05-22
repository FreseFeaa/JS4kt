const test = require("node:test");
const assert = require("node:assert");

const { checkObj } = require("./04.js");

test("проверка на  ключ particle с любым значением", () => {
    

    assert.strictEqual(checkObj({id: 1, particle: 10}), true);
    assert.strictEqual(checkObj({id: 1, cat: "no("}), false);
    assert.strictEqual(checkObj({ a:'AAA',b: ' BBB', c: 'CCC'}), false);
});
