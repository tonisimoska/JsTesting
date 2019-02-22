const ItemCost = require("./ItemCost");

test('Hinta on 50, alv 24%', () => {
    expect(ItemCost(50, 24)).toBe(62);
});
test('Hinta on 100, alv 10%', () => {
    expect(ItemCost(100, 10)).toBe(104.5);
});
test('Hinta on "100", alv "10"%', () => {
    expect(ItemCost("100", "10")).toBe(104.5);
});
test('Hinta on 300', () => {
    expect(ItemCost(300)).toBe(270);
});
test('Hinta on 500', () => {
    expect(ItemCost(500)).toBe(425);
});

test('Hintaa ei ole annettu', () => {
    expect(() => {ItemCost()}).toThrow("Ei argumenttia");
});
test('Hintaa "minna" ja alv "kalle"', () => {
    expect(() => {ItemCost("minna", "kalle")}).toThrow("Ei luku");
});
