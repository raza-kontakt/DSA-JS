"use strict";
// Problem:Write a function to flatten a multi-dimensional array into a single-level array. Provide both recursive and iterative solutions
// The problem involves transforming an array that contains nested arrays of various levels into a single-level array.
// For example, given an input like [[1, 2, [3]], 4], the expected output would be [1, 2, 3, 4].
// This challenge must be addressed in two distinct manners:Recursive Approach: This method leverages the concept of recursion, where a function calls itself.
// When the function encounters an element that is an array, it calls itself with this nested array, accumulating all the elements into a single,
// flattened array. This approach elegantly navigates through the layers of nested arrays, extracting and combining elements into one cohesive structure.
// Iterative Approach: Differing from recursion, the iterative solution utilizes a stack to manage and process the elements.
// This method iteratively examines each element, and when an array is encountered, its elements are added to the stack to be processed.
// This continues until all elements are flattened into a single array, ensuring efficient handling without the overhead of recursive function calls.
// Example:Let's illustrate the problem and solutions with a concrete example.Input: [[1, 2, [3, [4, 5]]], 6]
// Recursive Output: [1, 2, 3, 4, 5, 6]Iterative Output: [1, 2, 3, 4, 5, 6]This task not only tests your understanding of array
// manipulation but also evaluates your ability to implement solutions using different programming paradigms. Whether you opt for the elegance
// of recursion or the control of iteration, mastering this challenge will sharpen your problem-solving skills and prepare you for frontend interviews.
// As you embark on solving this problem, consider the implications of each approach, including the ease of implementation, efficiency, and potential
// limitations such as stack overflow in recursion for deeply nested arrays. Good luck!Test Cases:should verify the result is an arrayit('should verify
// the result is an array', (done) => {
Object.defineProperty(exports, "__esModule", { value: true });
//     const result = flattenArray([1, [2, 3]]);
//     expect(Array.isArray(result)).to.be.true;
//     done();
// });
// should handle arrays with negative numbersit('should handle arrays with negative numbers', (done) => {
//     const input = [1, -2, [3, -4, [-5]]];
//     const expected = [1, -2, 3, -4, -5];
//     const result = flattenArray(input);
//     expect(result).to.deep.equal(expected);
//     done();
// });
// should handle arrays with Infinity and -Infinityit('should handle arrays with Infinity and -Infinity', (done) => {
//     const input = [1, Infinity, [-Infinity, [2]]];
//     const expected = [1, Infinity, -Infinity, 2];
//     const result = flattenArray(input);
//     expect(result).to.deep.equal(expected);
//     done();
// });
var flattenArray = function (arr) {
    var flatArr = [];
    var flatten = function (subArr) {
        for (var i = 0; i < subArr.length; i++) {
            var element = subArr[i];
            if (!Array.isArray(element)) {
                flatArr.push(element);
            }
            else {
                flatten(element);
            }
        }
    };
    flatten(arr);
    return flatArr;
};
// Test Cases
var testCases = [
    {
        input: [1, -2, [3, -4, [-5]]],
        expected: [1, -2, 3, -4, -5],
        description: "Handles negative numbers",
    },
    {
        input: [1, [2, 3]],
        expected: [1, 2, 3],
        description: "Simple case",
    },
    {
        input: [1, [2, [3, [4, 5]], 6]],
        expected: [1, 2, 3, 4, 5, 6],
        description: "Deeply nested array",
    },
    {
        input: [1, Infinity, [-Infinity, [2]]],
        expected: [1, Infinity, -Infinity, 2],
        description: "Handles Infinity",
    },
    {
        input: [],
        expected: [],
        description: "Empty array",
    },
    {
        input: [
            [1, 2],
            [3, 4],
            [5, [6, 7]],
        ],
        expected: [1, 2, 3, 4, 5, 6, 7],
        description: "Array of arrays",
    },
];
testCases.forEach(function (testCase, index) {
    var result = flattenArray(testCase.input);
    var passed = JSON.stringify(result) === JSON.stringify(testCase.expected); // deep comparison
    console.log("Test Case ".concat(index + 1, " - ").concat(testCase.description, ": ").concat(passed ? "Passed" : "Failed"));
    if (!passed) {
        console.log("  Input:    ".concat(JSON.stringify(testCase.input)));
        console.log("  Expected: ".concat(JSON.stringify(testCase.expected)));
        console.log("  Actual:   ".concat(JSON.stringify(result)));
    }
});
