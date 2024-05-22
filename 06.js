let users = [
    {id: 1, name: 'Alex', lastname: 'Wilyam', age: 20},
    {id: 2, name: 'Steven', lastname: 'King', age: 34} 
];

function addUser(name, lastname, age) {
    const id = users.length + 1;
    users.push({id, name, lastname, age});
}

function updateUser(id, name, lastname, age) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users[userIndex] = {id, name, lastname, age};
    }
}

function deleteUser(id) {
    users = users.filter(user => user.id !== id);
}


addUser('John', 'Doe', 25);   // Добавление нового пользователя
console.log(users);

updateUser(2, 'Michael', 'Johnson', 30);   // Изменение данных о пользователе
console.log(users);

deleteUser(1);    // Удаление пользователя
console.log(users);

module.exports = { addUser, updateUser, deleteUser  };
