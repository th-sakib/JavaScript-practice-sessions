// 2. **Print Numbers from N to 1 without changing the loop condition of above question**
//
//    * Input: `5`
//    * Output: `5 4 3 2 1`
//    * ✨ *Thinking creatively and manipulating logic within the loop*

const maxNumInput = document.getElementById("problem-1");
const problem1Button = document.getElementById("button1");

problem1Button.addEventListener("click", (e) => {
  e.preventDefault();
  const maxNum = Number(maxNumInput.value);

  if (maxNum > 0 && !isNaN(maxNum)) {
    for (let i = 1; i <= maxNum; i++) {
      console.log(maxNum + 1 - i);
    }
  } else {
    console.log("Please enter a valid number");
  }
});
