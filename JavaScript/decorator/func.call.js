let field = {
    a: 6,
    b: 6,
    c: 6
}

function sum() {
    return this.a + this.b + this.c;
}

console.log(sum.call(field));//18 