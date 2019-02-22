const age = require('./age');
    test('Ikä negatiivinen, heittää errorin', () => {
        expect(() => {age(-1)}).toThrow("Negatiivinen ikä tai ikä nolla");
    });
    test('Ikä neljä, palauttaa false', () => {
        expect(age(4)).toBeFalsy;
    });
    test('Ikä 18, palauttaa true', () => {
        expect(age(18)).toBeTruthy;
    });
    test('Ikä "ikä", heittää errorin', () => {
        expect(() => {age("ikä")}).toThrow("Ei luku");
    });
    test('Ei argumenttia', () => {
        expect(() => {age()}).toThrow("Ei argumenttia");
    });