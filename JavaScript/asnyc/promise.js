let promise = new Promise(function(resolve, reject) {
    // 当 promise 被构造完成时，自动执行此函数

    // 1 秒后发出工作已经被完成的信号，并带有结果 "done"
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise.then( value => alert("this is success"), error => alert("this is a failure"));