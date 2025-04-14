class MathTool {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  static add(a, b) {
    return a + b;
  }
  subtract() {
    return this.num1 - this.num2;
  }
}

// tool = new MathTool();
// console.log(tool.add(10, 3));

console.log(MathTool.add(10, 3));
