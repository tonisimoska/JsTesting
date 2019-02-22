function Divide(a, b = 1) {
    if(a == undefined)
        throw new Error("Ei argumenttia");
    
    let div = Number(a) / Number(b);
    if(div === Infinity)
        throw new Error("Nollalla ei voi jakaa");
    if(Number.isNaN(div))
        throw new Error("Ei lukuja");
    
    return Math.round(div * 100) / 100;
}
module.exports = Divide;