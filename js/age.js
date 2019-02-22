function age(a) {
    if(a === undefined) {
        throw new Error("Ei argumenttia");
    }
    let age = Number(a);

    if(Number.isNaN(age))
        throw new Error("Ei luku");
    if(age <= 0)
        throw new Error("Negatiivinen ikä tai ikä nolla");
    return age < 18 ? false : true;
}
module.exports = age;