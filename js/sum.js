function sum(a, b = 0) {
    if(a === undefined) 
        throw new Error("Ei argumentteja");
    let sum = Number(a) + Number(b);
    if(Number.isNaN(sum)) {
        throw new Error("Ei lukuja");
    }
    return sum;
}
module.exports = sum;