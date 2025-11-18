function addition(...nums) {
    return nums.reduce((prev, curr) => prev + curr)
}

function subtruct(num1, num2) {
    return num1 - num2
}
console.log("hello from math");

fly.add = addition; // {} after this {add: addition[function]}