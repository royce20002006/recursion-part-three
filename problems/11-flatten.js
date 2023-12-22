/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr, num = 0, newArr = []) {
  if (arr.length === 0) {
    return newArr;
  }
  debugger
  if (typeof arr[num] === 'number') {
    newArr.unshift(arr.shift());
  }

  if (Array.isArray(arr[num])) {
    for (let i = num; i < arr[num].length; i++) {
      if (typeof arr[num][i] === 'number') {
        newArr.unshift(arr[num].shift())
        return flatten(arr, num, newArr)
      } else {
        return flatten(arr[num][i], num, newArr)

        }
        
      
    }
  }

  return flatten(arr, num, newArr)

}
debugger
// console.log(flatten([1, 2]))
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
