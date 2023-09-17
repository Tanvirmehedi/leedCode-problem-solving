/** @format */

const isPalindrome = function (x) {
  const xStr = x.toString();

  let left = 0;
  let right = xStr.length - 1;
  for (left; left < right; left++, right--) {
    if (xStr[left] !== xStr[right]) {
      return false;
    }
  }
  return true;
};

export default isPalindrome;

// const isPalindrome = function (x) {
//   const xStr = x.toString();

//   let left = 0;
//   let right = xStr.length - 1;

//   while (left < right) {
//     if (xStr[left] !== xStr[right]) {
//       return false;
//     }

//     left++;
//     right--;
//   }

//   return true;
// };
