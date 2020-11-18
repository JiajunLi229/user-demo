let fetch = require("node-fetch");
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url',
    'https://developer.mozilla.org/zh-CN/docs/learn/JavaScript/%E5%BC%82%E6%AD%A5/%E8%B6%85%E6%97%B6%E5%92%8C%E9%97%B4%E9%9A%94'
];

Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => {
        results.forEach((result, num) => {
            if (result.status === "fulfilled") {
                console.log(`success ${urls[num]}: ${result.value.status} ${result.reason}`);
            }//urls[num]是网址数组的元素,即指定index的url
            if (result.status === "rejected") {
                console.log(`rejected ${urls[num]}: ${result.reason}`);
            }
        });
    });
/*
success https://api.github.com/users/iliakan: 200 undefined
success https://api.github.com/users/remy: 200 undefined
rejected https://no-such-url: FetchError: request to https://no-such-url/ failed, reason: getaddrinfo ENOTFOUND no-such-url
success https://developer.mozilla.org/zh-CN/docs/learn/JavaScript/%E5%BC%82%E6%AD%A5/%E8%B6%85%E6%97%B6%E5%92%8C%E9%97%B4%E9%9A%94: 200 undefined
 */