//creating a parent class "shape"

class Shape {
    constructor(shapeColor, text, textColor){
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
}

class Circle extends Shape {
    constructor(shapeColor, text, textColor){
        super(shapeColor, text, textColor);
    }
}