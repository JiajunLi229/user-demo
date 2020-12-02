let fetch = require("node-fetch");
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => reject(new Error("shit"))),
    new Promise(resolve => setTimeout(() => resolve(3), 1000))
]).then(console.log);
//当所有给定的 promise 都被 settled 时，新的 promise 才会 resolve，并且其结果数组将成为新的 promise 的结果。
// 1,2,3 当上面这些 promise 准备好时：每个 promise 都贡献了数组中的一个元素
//请注意，结果数组中元素的顺序与其在源 promise 中的顺序相同。即使第一个 promise 花费了最长的时间才 resolve，但它仍是结果数组中的第一个。


let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

// 将每个 url 映射（map）到 fetch 的 promise 中
let requests = urls.map(url => fetch(url));

// Promise.all 等待所有任务都 resolved
Promise.all(requests)
    .then(responses => responses.forEach(
        response => console.log(`${Object.keys(response)}+${response.size}+${response.timeout}`)
    ));
