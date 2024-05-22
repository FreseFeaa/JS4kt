const test = require("node:test");
const assert = require("node:assert");

const { objectsToArray } = require("./02.js");

test("Из массива с обьектами в массив массивов", () => {
    let array1 = [ 
        {id: 1, name: 'apple'}, 
        {id: 2, name: 'watermelon'}, 
        {id: 3, name: 'qiwi'}, 
        {id: 4, name: 'lemon'} 
    ];
    result1 =[ [ 1, 'apple' ], [ 2, 'watermelon' ], [ 3, 'qiwi' ], [ 4, 'lemon' ] ]
    let array2 = [ 
        {name: 'apple'}, 
        {id: 2}, 
        {id: 3, name: 'qiwi'}
    ];
    result2 = [ [ 'apple' ], [ 2 ], [ 3, 'qiwi' ] ]
    assert.deepStrictEqual (objectsToArray(array1), result1);
    assert.deepStrictEqual (objectsToArray(array2), result2);




});
