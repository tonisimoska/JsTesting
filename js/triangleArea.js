function TriangleArea(a, b) {
    if(a == undefined || b == undefined)
        throw new Error("Muuttuja ei määritelty");
    
    let area = Math.abs(Number(a)) * Math.abs(Number(b)) / 2;

    if(Number.isNaN(area))
        throw new Error("Ei luku");
    return area;
}
module.exports = TriangleArea;