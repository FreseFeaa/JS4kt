function objectsToArray(array) {
    return array.map(obj => Object.values(obj));
}

let array = [ 
    {id: 1, name: 'apple'}, 
    {id: 2, name: 'watermelon'}, 
    {id: 3, name: 'qiwi'}, 
    {id: 4, name: 'lemon'} 
];

let result = objectsToArray(array);
console.log(result);


module.exports = { objectsToArray };