const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe("sum test cases", () => { 
  test("can add two small positive numbers", () => {
    const expected = 5;
    const actual = sum(2, 3);
    expect(actual).toBe(expected);
  });
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    const expected = 5000;
    const actual = sum(1000,4000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    const expected = -12;
    const actual = sum (-2, -10);
    expect(actual).toBe(expected);
    
  });

  test('can add zero', () => {
    const expected = 1000;
    const actual = sum (1000, 0);
    expect(actual).toBe(expected);
    
  });

});

test('subtract', () => {
  const expected = 99;
  const actual = sum (100, -1);
  expect(actual).toBe(expected);

});

test('multiply', () => {
  const expected = 100;
  const actual = multiply (50, 2);
  expect(actual).toBe(expected);

});

test('divide', () => {
  const expected = 25;
  const actual = divide (100, 4);
  expect(actual).toBe(expected);

});

describe('modulus', () => {
  const expected = 0;
  const actual = modulus (10, 2)
  expect(actual).toBe(expected);

});

describe('even', () => {
  test('see if even is true', () => {
    const expected = true;
    const actual = even(20);
    expect(actual).toBe(expected);
});

describe('odd', () => {
  test('to see if odd is true', () => {
    const expected = true;
    const actual = odd(37);
    expect(actual).toBe(expected);
});

});
test('see if odd is true', () => {
  const expected = false;
  const actual = odd(36);
  expect(actual).toBe(expected);
});

});
