function logString(...args) {
    result = (args.join(' ') + ' ' );
    console.log(result);
    return result;
}

logString("Hello", "my", "world!");

module.exports = { logString };