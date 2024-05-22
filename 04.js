function checkObj(obj) {
    return obj.hasOwnProperty('particle');
}

console.log(checkObj({id: 1, particle: 10}));
console.log(checkObj({id: 2, name: "tag"}));


module.exports = { checkObj };