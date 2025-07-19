/**
 * decimal number system
  5642

  2 x 10 ^ 0 = 2
  4 x 10 ^ 1 = 40
  6 x 10 ^ 2 = 600
  5 x 10 ^ 3 = 5000

 */

// task - 1 
const digitList1 = [2, 4, 5, 6]; // make decimal number suing this numbers and in reverse order
const digitList2 = [7, 3, 2];

// const reversedDecimalNum =
//     (digitList1[digitList1.length - 1] * 1000) +
//     (digitList1[digitList1.length - 2] * 100) +
//     (digitList1[digitList1.length - 3] * 10) +
//     (digitList1[digitList1.length - 4] * 1);

// const reversedDecimalNum2 = 2 * 100 + 3 * 10 + 7 * 1;

// === automating the process of making decimal number ===
const decimalNumberMakerFromArrayReverseOrder = (arr) => {
    let result = 0;
    for (let i = 1; i <= arr.length; i++) {
        result = result + (arr[arr.length - i] * Math.pow(10, arr.length - i))
        // ====== returns the face value ===== this returns the place value=========
    }
    return result
}
// === automating the process of making decimal number | with reducer method ===
const decimalNumberMakerFromArrayReverseOrderUsingReduce = (arr) => {
    return arr.reduce((acc, cur, index) => acc + cur * Math.pow(10 * index));
}

const result = decimalNumberMakerFromArrayReverseOrder(digitList1); // [2,4,5,6]
const result2 = decimalNumberMakerFromArrayReverseOrder([2, 4, 5, 6]); // [2,4,5,6]
console.log(result);
console.log(result2);
