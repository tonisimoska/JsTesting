const Divide = require('./divide');

test('Jakolasku, 4 / 2', () => {
    expect(Divide(4, 2)).toBe(2);
});
test('Jakolasku, "4" / "2"', () => {
    expect(Divide("4", "2")).toBe(2);
});
test('Jakolasku, 4', () => {
    expect(Divide("4")).toBe(4);
});
test('Jakolasku, 4, 0', () => {
    expect(() => {Divide(4, 0)}).toThrow("Nollalla ei voi jakaa");
});
test('Jakolasku, Minna ja kalle', () => {
    expect(() => {Divide("Minna", "Kalle")}).toThrow("Ei lukuja");
});

test('Jakolasku ilman argumenttia', () => {
    expect(() => {Divide()}).toThrow("Ei argumenttia");
});