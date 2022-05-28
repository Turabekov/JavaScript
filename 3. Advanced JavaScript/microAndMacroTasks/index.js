setTimeout(() => console.log("timeout")); // => macrotasks

Promise.resolve().then(() => console.log("promise")); // => microtasks

queueMicrotask(() => console.log("wow"));

Promise.resolve().then(() => console.log("promise_2")); // => microtasks

console.log("code");

// () => {}
// microtasks: then/catch/finally/await
// render
// () => {}
// microtasks: then/catch/finally/await
// render
// () => {}
