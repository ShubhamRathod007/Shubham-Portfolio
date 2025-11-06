function concatAndRun(a, b, callback) {
    const result = a + b;
    if (typeof callback === 'function') {
        callback(result);
    }
}

// Example usage:
concatAndRun('Hello, ', 'world!', function(output) {
    console.log(output); // Output: Hello, world!
});