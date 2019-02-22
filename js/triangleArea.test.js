const TriangleArea = require("./triangleArea");

test('Kolmion pinta-ala, 2, 5', () => {
    expect(TriangleArea(2, 5)).toBe(5);
});
test('Kolmion pinta-ala, "2", "5"', () => {
    expect(TriangleArea("2", "5")).toBe(5);
});
test('Kolmion pinta-ala, -2, -5', () => {
    expect(TriangleArea(-2, -5)).toBe(5);
});
test('Kolmion pinta-ala, "minna", "kalle"', () => {
    expect(() => {TriangleArea("minna", "kalle")}).toThrow("Ei luku");
});
test('Kolmion pinta-ala, 2', () => {
    expect(() => {TriangleArea(2)}).toThrow("Muuttuja ei määritelty");
});