// Check if data is something

const isDataSometing = <T>(data: T): boolean => {
  if (data === null || data === undefined) return false;
  if (typeof data === "string" && data.length > 0) return true;
  if (typeof data === "number" && data > 0) return true;
  if (typeof data === "function") return true;
  if (Array.isArray(data)) return !!data.length;
  if (typeof data === "object") return !!Object.keys(data as object).length;

  return false;
};

const testCases = [
  { input: "", expected: false },
  { input: "Hello", expected: true },

  { input: 0, expected: false },
  { input: 42, expected: true },
  { input: -5, expected: false },

  { input: function () {}, expected: true },
  { input: () => {}, expected: true },

  { input: [], expected: false },
  { input: [1, 2, 3], expected: true },

  { input: {}, expected: false },
  { input: { key: "value" }, expected: true },

  { input: null, expected: false },
  { input: undefined, expected: false },

  { input: true, expected: false },
  { input: false, expected: false },

  { input: Number(0), expected: false },
  { input: Number(10), expected: true },

  { input: NaN, expected: false },
  { input: Infinity, expected: true },
  { input: -Infinity, expected: false },
];

function testIsSomething() {
  testCases.map((item) => {
    const result = isDataSometing(item.input);

    if (result === item.expected) {
      console.log("✅ Pass: For input " + JSON.stringify(item.input));
    } else {
      console.log("❌ Fail: For input " + JSON.stringify(item.input));
    }
  });
}

testIsSomething();

export {};
