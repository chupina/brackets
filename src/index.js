module.exports = function check(str, bracketsConfig) {
if (!(str.length%2===0))return false; // check if number of brackets is even as edge case
  
const strArr = str.split(''); // creates an arr from brackets sequence
const bracketsObj = Object.fromEntries(bracketsConfig); // creates an object {openBracket: closBracket} from array of bracket pairs
const stackArr = [];// test arr
// for every open bracket in str add the corresponding closing bracket in testArr and then remove closing brackets when met
    for (let el of strArr) {
        if (stackArr[stackArr.length-1] === el) {
            stackArr.pop(); // if test array contains bracket from str then remove it from test arr
        } else if (bracketsObj[el]) { // for every open bracket add corresponding closed bracket
            stackArr.push(bracketsObj[el]); 
        } else {
            return false;
        }
    }

    return stackArr.length === 0? true:false; // tests passes if final test arr is empty
  
}
