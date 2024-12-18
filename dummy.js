var createHelloWorld = function() {
    return function(...args) {
        while(0 <= args.length <= 10) {
            return "Hello World";
        }
    }
};