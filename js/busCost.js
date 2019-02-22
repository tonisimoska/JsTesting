function cost(a) {
    if(a == undefined)
        throw new Error("Ei argumenttia");
    a = Number(a);
    if(Number.isNaN(a))
        throw new Error("Ei luku");
    if(a <= 7) {
        return 0;
    }
    else if(a < 16) {
        return 1;
    }
    else if((a >= 16 && a <= 25) || a > 65) {
        return 1.5;
    }
    else {
        return 3;
    }
}
module.exports = cost;