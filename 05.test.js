const test = require("node:test");
const assert = require("node:assert");

const { generateArray } = require("./05.js");

test("Проверка, есть ли в массиве обьект, если да , то берет значения ключей", () => {
    

    assert.deepStrictEqual(generateArray([[1], {id: 40}, [100], [300], {part: 10}]), [ [ 1 ], [ 40 ], [ 100 ], [ 300 ], [ 10 ] ]);
    assert.deepStrictEqual(generateArray([[1], {a: "40"}, [100], [300], {b: 'b'}]), [ [ 1 ], [ '40' ], [ 100 ], [ 300 ], [ 'b' ] ]);
    assert.deepStrictEqual(generateArray([[1], {win: 'NO', lose: 'YES', result: 100}, [100], [300]]), [ [ 1 ], [ 'NO', 'YES', 100 ], [ 100 ], [ 300 ] ]);

});
