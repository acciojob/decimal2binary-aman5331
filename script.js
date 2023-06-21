// function threeSum(arr, target) {
// write your code here
  
// }

// module.exports = threeSum;

function decimalToBinary(decimalNumber) {
  let binaryNumber = "";

  while (decimalNumber > 0) {
    binaryNumber = (decimalNumber % 2) + binaryNumber;
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  return binaryNumber;
}
