const fs = require('fs');

const timeoutScheduled = Date.now();

const wait = (milliseconds) => {
    const startCallback = Date.now();
    while (Date.now() - startCallback < milliseconds) {}
}

setTimeout(() => {
    const delay = Date.now() - timeoutScheduled;
    console.log(`${delay}ms`);
}, 50);

fs.readFile('test.js', () => {
    wait(100)
});