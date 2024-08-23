function swap(obj) {
    [obj.a, obj.b] = [obj.b, obj.a];
    return obj;

}

const obj = { a: 1, b: 2 };
console.log(swap(obj));  // Expected output: { a: 2, b: 1 }