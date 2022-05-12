"use strict";

class Rectangle {
    // * argumants
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.width * this.height;
    }
}

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(long.calcArea());
// console.log(square.calcArea());

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, "hello", "red");

div.showMyProps();
console.log(div.calcArea());

// ! Principes OOP
// * 1. Concepsions
// * 2. Inheritance
