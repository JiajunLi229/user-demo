console.log(1);

setTimeout(() => {// H1
    console.log(2);//
    Promise.resolve().then(() => {
        console.log(3)//W2
    });
});

new Promise((resolve, reject) => {
    console.log(4)
    resolve(5)//W1
}).then((data) => {
    console.log(data);
})

setTimeout(() => {//H2
    console.log(6);
})

console.log(7);
//1 4 7 5 2 3 6