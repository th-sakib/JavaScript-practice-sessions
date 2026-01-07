// 1. **Print Numbers from 1 to N**
//
//    * Input: `5`
//    * Output: `1 2 3 4 5`

// getting the input and button reference by using DOM
const maxNumInput = document.getElementById("problem-1");
const problem1Button = document.getElementById("button1");

problem1Button.addEventListener("click", (e) => {
  e.preventDefault();
  const maxNum = Number(maxNumInput.value);

  if (maxNum > 0 && !isNaN(maxNum)) {
    for (let i = 1; i <= maxNumInput.value; i++) {
      console.log(i);
    }
  } else {
    console.log("Please enter a valid number");
  }
});
