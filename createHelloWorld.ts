// Typescript 練習？mondai やる意味あるか不明
function createHelloWorld() {
    
    return function(...args): string {
        return "Hello World";
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
