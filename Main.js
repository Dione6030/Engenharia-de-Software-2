console.log("Hello, World!");

function greet(name) {
    return `Hello, ${name}!`;
};

console.log(greet("World"));

function add(a, b) {
    return a + b;
}

console.log(add(5, 3));

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

console.log(factorial(10));