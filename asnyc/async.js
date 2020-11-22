async function resolve() {
    return 'hello';
}
resolve().then(result => console.log(result));//hello

async function reject() {
    return new Error('error');
}
reject().then(result => console.log(result));//Error: error