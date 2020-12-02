
let obj = {};
obj.name = "dick";

function hello(thing) {
    console.log(this + " says hello " + thing);
}

hello.call("Yehuda", "world");

hello.call(obj.name, "world");