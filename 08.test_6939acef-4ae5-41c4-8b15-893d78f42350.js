const test = require("node:test");
const assert = require("node:assert");

const { Email } = require("./08.js");


// email1.setEmail = ['newEmail', 'gmail', 'com'];
// console.log(email1.email); // 'newEmail@gmail.com'



test("Проверка, геттера и сеттера класса email", () => {
    
    const email1 = new Email('example@mail.com');
    const email2 = new Email('john_doe#example.xyz');
    const email3 = new Email('cat^^@mail.com');
    const email4 = new Email('cat@gmail');
    const email5 = new Email('cat@gmail.ssss');

    assert.deepStrictEqual(email1.isValid, true);
    assert.deepStrictEqual(email2.isValid, false);
    assert.deepStrictEqual(email3.isValid, false);
    assert.deepStrictEqual(email4.isValid, false);
    assert.deepStrictEqual(email5.isValid, false);

    email1.setEmail = ['newEmail', 'gmail', 'com'];
    email2.setEmail = ['cat', 'gmail', 'com'];

    
    assert.deepStrictEqual(email1.email, 'newEmail.gmail.com');
    assert.deepStrictEqual(email2.email, 'cat.gmail.com');


});
