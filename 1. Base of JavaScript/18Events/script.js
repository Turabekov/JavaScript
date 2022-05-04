const btns = document.querySelectorAll("button"),
    overlay = document.querySelector(".overlay");

// !old format dont use this
// btn.onclick = function () {
//     alert("Click");
// };

// btn.onclick = function () {
//     alert("Second Click");
// };

// ! always use this format
let i = 0;
const deleteElement = (event) => {
    console.log(event.currentTarget);
    console.log(event.type);

    // i++;
    // if (i == 1) {
    //     btn.removeEventListener("click", deleteElement);
    // }
    // event.target.remove();

    // console.log("Hover");

    // alert("Click");
};

// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

btns.forEach((item) => {
    item.addEventListener("click", deleteElement);
});

// btn.addEventListener("click", () => {
//     alert("Second Click");
// });

const link = document.querySelector("a");

link.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(e.target);
});
