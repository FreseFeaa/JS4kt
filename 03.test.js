const test = require("node:test");
const assert = require("node:assert");

const { logString } = require("./03.js");

test("Из мелких строчек в одну", () => {
    

    assert.strictEqual(logString("Hello", "my", "world!"), "Hello my world! ");
    assert.strictEqual(logString("Алексей", ",", "вы" , "лучший!"), "Алексей , вы лучший! ");
    assert.strictEqual(logString(1, "не", 2), "1 не 2 ");
});
