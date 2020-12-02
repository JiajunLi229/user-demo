let group = {
    "title": "Our Group",
    "students": ["John", "Pete", "Alice"],

    showListFunctionDeclarationVersion() {
        this.students.forEach(
            function hello(student, index) {
                this.title = "function declaration";//如果没有 this.title卸载 hello函数里，下一行的this.title会找不到title,给出undefined
                console.log(`title is ${this.title}, name of student is ${student}, and number is ${index+1}`)
            }
        )
    },
    showListArrowFunctionVersion() {
        this.title = "in arrow function";
        this.students.forEach(//箭头函数会找到外部的title,找到最近的一层title属性，若没有这行，则会找到group的our group value
            (student,index) => (console.log(`title is ${this.title}, name of student is ${student}, and number is ${index+1}`))
        )
    },
}

let user = {
    firstName: "John",
    // sayHi() {
    //   alert(`Hello, ${this.firstName}!`);
    // }
    sayHi: () => {
        return console.log(`Hello, ${this.firstName}!`);
    },
    sayHiV2() {
        return console.log(`Hello, ${this.firstName}!`);
    }

};

user.sayHi();
user.sayHiV2();
// group.showListArrowFunctionVersion();
// group.showListFunctionDeclarationVersion();
