/**
 * Problem: Valid Parentheses
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * 
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 * 
 * Example 1:
 * Input: s = "()"
 * Output: true
 * Explanation: Simple pair of parentheses.
 * 
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 * Explanation: Each opening bracket is closed by its corresponding closing bracket.
 * 
 * Example 3:
 * Input: s = "(]"
 * Output: false
 * Explanation: The closing bracket ')' is expected, but ']' is found instead.
 * 
 * Constraints:
 * - 1 <= s.length <= 10^4
 * - s consists of parentheses only '()[]{}'
 */

function isValid(s: string): boolean {
    // TODO: Implement your solution here
    return false;
}

// Test cases
function testIsValid() {
    const testCases = [
        {
            input: "()",
            expected: true
        },
        {
            input: "()[]{}",
            expected: true
        },
        {
            input: "(]",
            expected: false
        },
        {
            input: "([)]",
            expected: false
        },
        {
            input: "{[]}",
            expected: true
        },
        {
            input: "",
            expected: true
        },
        {
            input: "(((",
            expected: false
        }
    ];

    testCases.forEach((testCase, index) => {
        const result = isValid(testCase.input);
        const passed = result === testCase.expected;
        console.log(`Test case ${index + 1}: ${passed ? '✅ PASSED' : '❌ FAILED'}`);
        if (!passed) {
            console.log(`Input: "${testCase.input}"`);
            console.log(`Expected: ${testCase.expected}`);
            console.log(`Got: ${result}`);
        }
    });
}

// Run tests
testIsValid();
