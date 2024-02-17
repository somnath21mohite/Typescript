function addnum(a: number, b?: number) {

    if (typeof b !== 'undefined') {
        return a+b;
    }
   
}

console.log(addnum(1));