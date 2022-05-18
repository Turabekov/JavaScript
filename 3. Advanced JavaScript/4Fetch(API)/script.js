// API - Application Programming Interface
// DOM API
// ! Fetch API
// * Get request
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json()) // ? json() : JSON => object
    .then((json) => console.log(json));

// * POST request
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ name: "Alex" }),
    headers: {
        "Content-type": "application/json",
    },
})
    .then((response) => response.json()) // ? json() : JSON => object
    .then((json) => console.log(json));
