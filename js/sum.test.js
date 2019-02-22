const sum = require('./sum');

    test('suorittaa yhteenlaskun 1 + 2, tulos 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('syötteet numeromaisia merkkojonoja', () => {
        expect(sum("1", "2")).toBe(3);
    });
    test('syötteet ei numeromaisia merkkijonoja', () => {
        expect(() => {sum("Minna", "jukka")}).toThrow("Ei lukuja");
    });
    test('Vain yksi argumentti syötetty"', () => {
        expect(sum(1)).toBe(1);
    });
    test('Kumpaakaan argumenttia ei syötetty"', () => {
        expect(() => {sum()}).toThrow("Ei argumentteja");
    });
