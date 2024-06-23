// add function
export function add(a, b) {
    console.log('a + b===', a + b);
    return a + b;
}

// add by bit-operation
export function addByBit(a, b) {
    if (b === 0) return a;
    let c = a ^ b,
        d = (a & b) << 1;

    return addByBit(c, d);
}