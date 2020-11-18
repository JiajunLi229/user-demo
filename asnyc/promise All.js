Promise.all([
    new Promise(resolve => setTimeout(() => resolve(console.log(1)), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(console.log(2)), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(console.log(3)), 1000))  // 3
]).then(); // 1,2,3 当上面这些 promise 准备好时：每个 promise 都贡献了数组中的一个元素