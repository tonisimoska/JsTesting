function ItemCost(a, alv = 0) {

    if(a === undefined)
        throw new Error("Ei argumenttia");
    a = Number(a);
    alv = Number(alv) / 100;
    if(Number.isNaN(a) || Number.isNaN(alv)) {
        throw new Error("Ei luku");
    }

    if(a < 100)
        return a + (a * alv);
    else if(a >= 100 && a <= 200) {
        a = a - (a * 0.05);
        return a + (a * alv);
    }
    else if(a >= 201 && a < 500) {
        a = a - (a * 0.1);
        return a + (a * alv);
    }
    else {
        a = a - (a * 0.15);
        return a + (a * alv);
    }
}
module.exports = ItemCost;