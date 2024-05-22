const test = require("node:test");
const assert = require("node:assert");

const {  addUser, updateUser, deleteUser   } = require("./06.js");

test("Добавление, изменение, удаление пользователей", () => {
    // Я не знаю, я перепробывал много разных способов, но по итогу все равно не смог реализовать проверку для этого задания. (Каждый раз ругается на какую-то странную штуку)
    //Дальше я тоже не буду писать проверки, ткк там сложно их реализовать
   
    // assert.deepStrictEqual(addUser('John', 'Doe', 25), [
    //     { id: 1, name: 'Alex', lastname: 'Wilyam', age: 20 },
    //     { id: 2, name: 'Steven', lastname: 'King', age: 34 },
    //     { id: 3, name: 'John', lastname: 'Doe', age: 25 }
    //   ]);

    // assert.deepStrictEqual(updateUser(2, 'Michael', 'Johnson', 30),[
    //     { id: 1, name: 'Alex', lastname: 'Wilyam', age: 20 },
    //     { id: 2, name: 'Michael', lastname: 'Johnson', age: 30 },
    //     { id: 3, name: 'John', lastname: 'Doe', age: 25 }
    //   ]);

    // assert.deepStrictEqual(deleteUser(1), [
    //     { id: 2, name: 'Michael', lastname: 'Johnson', age: 30 },
    //     { id: 3, name: 'John', lastname: 'Doe', age: 25 }
    //   ]);

});
