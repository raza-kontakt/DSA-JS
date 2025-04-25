// CHECK IF NUMBER IS PLAINDROME
// Given an integer n, find whether the number is Palindrome or not. A number is a Palindrome if it remains the same when its digits are reversed.

// Examples::
// Input: n = 12321
// Output: Yes
// Explanation: 12321 is a Palindrome number because after reversing its digits, the number becomes 12321 which is the same as the original number.

// Input: n = 1234
// Output: No
// Explanation: 1234 is not a Palindrome number because after reversing its digits, the number becomes 4321 which is different from the original number.

function isPlaindrome(num: number): boolean {
  const input = num.toString();

  for (let index = 0; index <= input.length / 2; index++) {
    const start = input[index];
    const end = input[input.length - 1 - index];

    if (start !== end) return false;
  }

  return true;
}

const testCases = [
  {
    input: 12321,
    expected: true,
  },
  {
    input: 1234,
    expected: false,
  },
  {
    input: 1, // Single digit
    expected: true,
  },
  {
    input: 11, // Two digits
    expected: true,
  },
  {
    input: 121, // Three digits
    expected: true,
  },
  {
    input: 12345, // Five digits
    expected: false,
  },
];

function testIsPlaindrome() {
  testCases.map((item) => {
    const result = isPlaindrome(item.input);

    if (result === item.expected) {
      console.log("✅ Pass: For input " + item.input);
    } else {
      console.log("❌ Fail: For input " + item.input);
    }
  });
}

testIsPlaindrome();
