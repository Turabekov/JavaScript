// console.log(document.body); // ! tag body
// console.log(document.head); // ! tag head
// console.log(document.documentElement); // ! tag html

// console.log(document.body.childNodes); // ? we canget all child nodes

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector("#current").parentNode.parentNode); // * first we get <div class="first"> then <div class="wrapper">
// console.log(document.querySelector("#current").parentElement);

// console.log(document.querySelector("[data-current='3']").nextSibling);
// console.log(document.querySelector("[data-current='3']").previousSibling);
// console.log(document.querySelector("[data-current='3']").nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == "#text" || node.nodeName == "#comment") {
        continue;
    }

    console.log(node);
}
