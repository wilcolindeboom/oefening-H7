function smallestCommonMultiple(a,b)
{
    return  (a*b)/greatestCommonDivider(a,b);

}


function greatestCommonDivider(a,b) {

    if (a < 0) a = -a;
    if (b < 0) b = -b;
    if (b > a) {const temp = a; a = b; b = temp;}
    while (true) {
        a %= b;
        if (a === 0) return b;
        b %= a;
        if (b === 0) return a;
    }
}


module.exports = {

    smallestCommonMultiple: smallestCommonMultiple

}

