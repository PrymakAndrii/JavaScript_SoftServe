//OOP
//Geometry Primitives
class GeometricPrimitive {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.isVisible = false;
  }

  show() {
    this.isVisible = true;
    console.log(
      `${this.constructor.name} відображено у точці (${this.x}, ${this.y})`,
    );
  }

  hide() {
    this.isVisible = false;
    console.log(`${this.constructor.name} приховано`);
  }

  move(newX, newY) {
    console.log(
      `${this.constructor.name} переміщено з (${this.x}, ${this.y}) у (${newX}, ${newY})`,
    );

    this.x = newX;
    this.y = newY;
  }
}

class Circle extends GeometricPrimitive {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  show() {
    super.show();
    console.log(`Радіус кола: ${this.radius}`);
  }
}

class Rectangle extends GeometricPrimitive {
  constructor(x, y, width, height) {
    super(x, y);
    this.width = width;
    this.height = height;
  }

  show() {
    super.show();
    console.log(`Розміри прямокутника: ${this.width} x ${this.height}`);
  }
}

class Triangle extends GeometricPrimitive {
  constructor(x, y, sideA, sideB, sideC) {
    super(x, y);
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  show() {
    super.show();
    console.log(
      `Сторони трикутника: ${this.sideA}, ${this.sideB}, ${this.sideC}`,
    );
  }
}

// Створення об'єктів
const circle = new Circle(10, 20, 15);
const rectangle = new Rectangle(5, 5, 40, 20);
const triangle = new Triangle(0, 0, 10, 12, 15);

// Робота з колом
circle.show();
circle.move(30, 40);
circle.hide();

console.log("----------------");

// Робота з прямокутником
rectangle.show();
rectangle.move(15, 25);

console.log("----------------");

// Робота з трикутником
triangle.show();
triangle.move(50, 60);
triangle.hide();
