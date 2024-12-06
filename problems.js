// Questions

/* 2626. Array Reduce Transformation
Easy
Companies
Hint
Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.

 

Example 1:

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
Example 2:

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
Output: 130
Explanation:
initially, the value is init=100.
(100) + nums[0] * nums[0] = 101
(101) + nums[1] * nums[1] = 105
(105) + nums[2] * nums[2] = 114
(114) + nums[3] * nums[3] = 130
The final answer is 130.
Example 3:

Input: 
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
Output: 25
Explanation: For empty arrays, the answer is always init.

*/
// var reduce = function (nums, fn, init) {
//   let result = init;
//   if (nums.length === 0) {
//     return init;
//   }
//   for (let i = 0; i < nums.length; i++) {
//     const current = nums[i];
//     result = fn(result, current);
//   }
//   return result;
// };
// const fn = (a, b) => a + b;
// reduce([1, 2, 4, 5], fn, 0);
// Question
/*
2629. Function Composition
Easy
Companies
Hint
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

 

Example 1:

Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
Example 2:

Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
Example 3:

Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function
 

Constraints:

-1000 <= x <= 1000
0 <= functions.length <= 1000
all functions accept and return a single integer
*/
// var compose = function (functions) {
//   return function (x) {
//     return functions.reduceRight((acc, fn) => fn(acc), x);
//   };
// };

// // Example usage
// const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
// console.log(fn(4));

// console.log(compose(fn(4)));
/*
2634. Filter Elements from Array
Attempted
Easy
Companies
Hint
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

 

Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
Example 2:

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
Example 3:

Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out
 

Constraints:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109
*/

// const greaterThanTen = (x) => x > 10;
// var filter = function (arr, fn) {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// };
// const result = filter([1, 3, 20, 30, 22], greaterThanTen);
// console.log(result);

/*


Code
Testcase
Test Result
Test Result
2625. Flatten Deeply Nested Array
Medium
Companies
Hint
Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.

 

Example 1:

Input
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 0
Output
[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

Explanation
Passing a depth of n=0 will always result in the original array. This is because the smallest possible depth of a subarray (0) is not less than n=0. Thus, no subarray should be flattened. 
Example 2:

Input
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 1
Output
[1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

Explanation
The subarrays starting with 4, 7, and 13 are all flattened. This is because their depth of 0 is less than 1. However [9, 10, 11] remains unflattened because its depth is 1.
Example 3:

Input
arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 2
Output
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

Explanation
The maximum depth of any subarray is 1. Thus, all of them are flattened.
 

Constraints:

0 <= count of numbers in arr <= 105
0 <= count of subarrays in arr <= 105
maxDepth <= 1000
-1000 <= each number <= 1000
0 <= n <= 1000
Seen this question in a real interview before?
1/5
Yes
No
Accepted
50.9K
Submissions
80K
Acceptance Rate
63.7%
Companies
Hint 1
Hint 2
Similar Questions
Discussion (23)

Choose a type

*/
// var flat = function (arr, n) {
//   // Notes return original array if n = 1.
//   // if its below or equal to 0 we return array subdivided.
//   // n = depth (1) is the firsted nested array
//   // n = 2 is nested 1 more deep than 1
//   // so whatever n = (?) we flatten those array out
//   if (n === 1) {
//     return arr;
//   }
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (Array.isArray(element) && n > 0) {
//       result = result.concat(flat(element, ...n));
//     } else {
//       result.push(element);
//     }
//   }
//   return result;
// };
// console.log(
//   flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
// );
/*
2631. Group By
Medium
Companies
Hint
Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Please solve it without lodash's _.groupBy function.

 

Example 1:

Input: 
array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
], 
fn = function (item) { 
  return item.id; 
}
Output: 
{ 
  "1": [{"id": "1"}, {"id": "1"}],   
  "2": [{"id": "2"}] 
}
Explanation:
Output is from array.groupBy(fn).
The selector function gets the "id" out of each item in the array.
There are two objects with an "id" of 1. Both of those objects are put in the first array.
There is one object with an "id" of 2. That object is put in the second array.
Example 2:

Input: 
array = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9]
]
fn = function (list) { 
  return String(list[0]); 
}
Output: 
{ 
  "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] 
}
Explanation:
The array can be of any type. In this case, the selector function defines the key as being the first element in the array. 
All the arrays have 1 as their first element so they are grouped together.
{
  "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
}
Example 3:

Input: 
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
fn = function (n) { 
  return String(n > 5);
}
Output:
{
  "true": [6, 7, 8, 9, 10],
  "false": [1, 2, 3, 4, 5]
}
Explanation:
The selector function splits the array by whether each number is greater than 5.
 */

// Array.prototype.groupBy = function (fn) {};

/*
2667. Create Hello World Function
Easy
Companies
Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
 

Constraints:

0 <= args.length <= 10
*/
// var createHelloWorld = function () {
//   return function (...args) {
//     return "Hello World";
//   };
// };

// createHelloWorld()("Hi");
/*
2620. Counter
Solved
Easy
Companies
Hint
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
Example 2:

Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.
 

Constraints:

-1000 <= n <= 1000
0 <= calls.length <= 1000
calls[i] === "call"

*/
// var createCounter = function (n) {
//   return function () {
//     return n++;
//   };
// };
// const counter = createCounter(10);
// console.log(counter()); // Output: 10
// console.log(counter()); // Output: 11
// console.log(counter()); // Output: 12
// console.log(counter());

/*

2704. To Be Or Not To Be
Easy
Companies
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
Example 2:

Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
Example 3:

Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.

*/
// var expect = function (val) {
//   return {
//     toBe: function (otherValue) {
//       if (otherValue === val) {
//         return "true";
//       } else {
//         return "Not Equal";
//       }
//     },
//     notToBe: function (otherValue) {
//       if (otherValue !== val) {
//         return "Equal";
//       } else {
//         return "true";
//       }
//     },
//   };
// };
// try {
//   console.log(expect(5).toBe(5));
//   console.log(expect(5).notToBe(10));
//   console.log(expect(5).toBe(10));
// } catch (error) {
//   console.error(error.message);
// }

/*
2665. Counter II
Easy
Companies
Hint
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 

Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
Example 2:

Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
 

Constraints:

-1000 <= init <= 1000
0 <= calls.length <= 1000
calls[i] is one of "increment", "decrement" and "reset"

*/
// Input is arrays
/*
var createCounter = function (init) {
  let currentValue = init;

  return {
    increment: function () {
      currentValue += 1;
      return currentValue;
    },
    decrement: function () {
      currentValue -= 1;
      return currentValue;
    },
    reset: function () {
      currentValue = init;
      return currentValue;
    },
  };
};

let calls = ["increment", "decrement", "reset"];
const counter = createCounter(5);

const result = calls.map((call) => counter[call]());

console.log(result);

*/

/*

2635. Apply Transform Over Each Element in Array
Easy
Companies
Hint
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

 

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.
 

Constraints:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109
fn returns a number

*/
