const Calculator = require('./calculator');

describe('Calculator', () => {
	let calc;
	beforeEach(() => {
		calc = new Calculator();
	});

	test('add', () => {
		expect(calc.add(2, 3)).toBe(5);
	});

	test('substact', () => {
		expect(calc.substact(5, 2)).toBe(3);
	});

	test('multiply', () => {
		expect(calc.multiply(3, 4)).toBe(12);
	});

	test('divide', () => {
		expect(calc.divide(10, 2)).toBe(5);
		expect(() => calc.divide(1, 0)).toThrow();
	});

	test('power', () => {
		expect(calc.power(2, 3)).toBe(8);
	});

	test('squareRoot', () => {
		expect(calc.squareRoot(9)).toBe(3);
		expect(() => calc.squareRoot(-1)).toThrow();
	});

	test('logarithm', () => {
		expect(calc.logarithm(100, 10)).toBeCloseTo(2);
		expect(() => calc.logarithm(-1)).toThrow();
		expect(() => calc.logarithm(10, 1)).toThrow();
	});

	test('absolute', () => {
		expect(calc.absolute(-5)).toBe(5);
	});

	test('percentage', () => {
		expect(calc.percentage(25, 100)).toBe(25);
		expect(() => calc.percentage(10, 0)).toThrow();
	});

	test('round', () => {
		expect(calc.round(3.14159, 2)).toBe(3.14);
	});

	test('min', () => {
		expect(calc.min(1, 2, 3)).toBe(1);
		expect(() => calc.min()).toThrow();
	});

	test('max', () => {
		expect(calc.max(1, 2, 3)).toBe(3);
		expect(() => calc.max()).toThrow();
	});

	test('average', () => {
		expect(calc.average(2, 4, 6)).toBe(4);
		expect(() => calc.average()).toThrow();
	});

	test('factorial', () => {
		expect(calc.factorial(5)).toBe(120);
		expect(calc.factorial(0)).toBe(1);
		expect(() => calc.factorial(-1)).toThrow();
	});

	test('fibonacci', () => {
		expect(calc.fibonacci(0)).toBe(0);
		expect(calc.fibonacci(1)).toBe(1);
		expect(calc.fibonacci(7)).toBe(13);
		expect(() => calc.fibonacci(-1)).toThrow();
	});

	test('median', () => {
		expect(calc.median(1, 3, 2)).toBe(2);
		expect(calc.median(1, 2, 3, 4)).toBe(2.5);
		expect(() => calc.median()).toThrow();
	});
});