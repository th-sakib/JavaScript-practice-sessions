const person = {
  name: "Sakib",
  age: 20,
  isStudent: true,
  favProgrammingLang: "JavaScript",
};

// console.log(person);

let test = "testing let";
// let test = "re-declare" // can't re-declare
test = "re-assign"; // can re-assign

const testConst = "testing const";
// testConst = "re-assign"; // constant variables can't be re-assigned

const obj = {
  prop: "testing",
  numProp: 12,
};

const copyObj = obj;
copyObj.newProp = true;

console.log("copy object", copyObj);
console.log("actual object", obj);

const arr = [1, 2, 3];
const copyArr = arr;

copyArr.push(4);

console.log("copy array", copyArr);
console.log("actual array", arr);

// notice: even though we change the copyArr and copyObj it still changing actual object and array
