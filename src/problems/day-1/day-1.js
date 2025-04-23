/**
 * Problem: Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */
function twoSum(nums, target) {
    var numMap = new Map();
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    return [];
}
function testTwoSum() {
    var testCases = [
        {
            input: { nums: [2, 7, 11, 15], target: 9 },
            expected: [0, 1]
        },
        {
            input: { nums: [3, 2, 4], target: 6 },
            expected: [1, 2]
        },
        {
            input: { nums: [3, 3], target: 6 },
            expected: [0, 1]
        }
    ];
    testCases.forEach(function (testCase, index) {
        var result = twoSum(testCase.input.nums, testCase.input.target);
        var passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
        console.log("Test case ".concat(index + 1, ": ").concat(passed ? 'PASSED' : 'FAILED'));
        if (!passed) {
            console.log("Expected: ".concat(testCase.expected));
            console.log("Got: ".concat(result));
        }
    });
}
// Run tests
testTwoSum();
