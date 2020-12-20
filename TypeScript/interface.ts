function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}

let rightObj = {size: 10, label: "Size 10 Object"};

let wrongObj = {wrongLabel: "wrongLabel"};

// printLabel(rightObj);
// printLabel(wrongObj);

//------------------------
interface LabeledValue {
    label: string;
}

function printLabelReceiveInterface(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
let myObj2 = {size: 11, profession: "TWER"};

// printLabelReceiveInterface(myObj);
// printLabelReceiveInterface(myObj2);

//-----------------------------
interface SquareConfig {
    profession?: string;
    age?: number;
}

function createSquare(config: SquareConfig): { color: string } {
    let newSquare = { color: "white", area: 100 };// output object 中的key必须 >= 定义的output key
    if (config.profession) {
        newSquare.color = config.profession;
    }
    if (config.age) {
        newSquare.area = config.age * config.age;
    }
    return newSquare;
}

let mySquare = createSquare({ profession: "black" });

console.log(mySquare)

//-----------------------------------
interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (number) => number; // arrow function
    getManagerName(number): string;
}


let jiajun : IEmployee = (empCode: 9, empName: "dick", getSalary: 8, getManagerName())