const fs = require('fs')


setTimeout(() => console.log(1),1000);

setImmediate(() => {
    console.log(2)
})

fs.readFile('test', () => {
    console.log(3)
})

process.nextTick(() => {
    console.log(4)
})

console.log(5)