let fetch = require("node-fetch");
/*
重写下面这个来自 Promise 链 一章的示例代码，使用 async/await 而不是 .then/catch：

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

loadJson('no-such-user.json')
  .catch(alert); // Error: 404
 */

async function loadJson(url) {
    try{
        let UrlResponse = await fetch(url);
        if (UrlResponse.status === 200) {
            return UrlResponse.json();
        }
        console.log(UrlResponse.status);
    }catch(err){
        console.log("hello")
    }//如果 fetch 无法建立一个 HTTP 请求，例如网络问题，亦或是请求的网址不存在，那么 promise 就会 reject。异常的 HTTP 状态，例如 404 或 500，不会导致出现 error。
}

loadJson('https://github.com/fdsafdsfdsfads').catch(console.log);