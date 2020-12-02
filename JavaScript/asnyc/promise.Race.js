// Promise.race = ([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("second")), 2)),
// ]).then(console.log).catch(console.log);

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("second")), 2)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log);//抛出whoops错误