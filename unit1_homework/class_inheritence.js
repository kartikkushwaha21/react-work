class Box {
    constructor(length, breadth, height) {
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }

    showDimensions() {
        console.log(`${this.length}, ${this.breadth}, ${this.height}`);
    }
}

const b1 = new Box(5, 4, 7);
b1.showDimensions();