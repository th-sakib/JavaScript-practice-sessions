/**
 * 
 * @question
 * 
 * ## 1. Draw the Execution Context Diagram of the follwoing code and share as explained below:
 * 
- Create the GEC and FEC with CP and EP flow
- Create the Stack and Heap Flow
- Create the Stack Diagram
- Create a Readme file with all the above diagram and share on Discord.


 */

const message = "I can do it";

function sum(a, b) {
  const result = a + b;
  return result;
}

function mul(a, b) {
  const result = a * b;
  return result;
}
function calc(a, b) {
  return (sum(a, b) + mul(a, b)) / 2;
}

function getResult(a, b) {
  return calc(a, b);
}

getResult(8, 5);
/**
 *
 *GEC:
    CP:
        message: creates memory binding (but exist in TDZ)
        sum: func() in memory
        mul: func() in memory
        calc: func() in memory
        getResult: func() in memory


    EP:
        message: I can do it (initialized)
        getResult(): execute

    FEC(for getResult):
        CP:
            a: 8
            b: 5
        EP:
            calc(): execute
            FEC(for calc):
                CP:
                    a: 8
                    b: 5
                EP:
                    sum: execute
                    FEC(for sum):
                        CP:
                            a: 8
                            b: 5
                            result: in TDZ
                        EP:
                            result: 13  
                            return to the calc EP
                    mul: execute
                    FEC(for mul)
                        CP: 
                            a: 8
                            b: 5
                            result: in TDZ
                        EP: 
                            result: 40
                            return to the calc EP
                    return to the getResult EP with value ((13 + 40) / 2 which evalutes into 26.5)
        return to the GEC
    Finally it finishes parsing the code
 */
