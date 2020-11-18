let promise = new Promise((resolve, reject) => {
    console.log(1)
    resolve()
})
promise.then(() => console.log(3));
console.log(2);