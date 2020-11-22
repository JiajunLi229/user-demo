let fetch = require("node-fetch");
async function error() {
    let response = await fetch('http://no-such-url');//throw a new Error
    // return response;
}
error().catch(console.log);

async function caughtError() {
    try{
        let response = await fetch('http://no-such-url');
    } catch(err) {
        console.log(`try..catch find ${err.message}`);//try..catch find request to http://no-such-url/ failed, reason: getaddrinfo ENOTFOUND no-such-url
    }
}
caughtError().catch(" error caught by catch");//没抓到

