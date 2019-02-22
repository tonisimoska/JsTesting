const cost = require("./buscost");

    test('Ikä 7', () => {
        expect(cost(7)).toBe(0);
    });
    test('Ikä 15', () => {
        expect(cost(15)).toBe(1);
    });
    test('Ikä 16', () => {
        expect(cost(16)).toBe(1.5);
    });
    test('Ikä 26', () => {
        expect(cost(26)).toBe(3);
    });
    test('Ikä 68', () => {
        expect(cost(68)).toBe(1.5);
    });
    test('Ikä "25"', () => {
        expect(cost("25")).toBe(1.5);
    });
    test('Ikä, Ei argumenttia', () => {
        expect(() => {cost()}).toThrow("Ei argumenttia");
    });
    test('Ikä "Minna"', () => {
        expect(() => {cost("Minna")}).toThrow("Ei luku");
    });