export class Equation {
  operand1: number;
  operand2: number;
  operation: string;
  constructor() {
      this.operand1 = null;
      this.operand2 = null;
      this.operation = null;
    }
    getOperand1() {
      return this.operand1;
    }
    getOperand2() {
      return this.operand2;
    }
    setOperand1(op: number) {
      this.operand1 = op;
    }
    setOperand2(op: number) {
      this.operand2 = op;
    }
    getOperation() {
      return this.operation;
    }
    setOperation(op: string) {
      this.operation = op;
    }
    process() {
      switch(this.operation) {
        case "+":
          this.operand1 = this.operand1 + this.operand2;
          break;
        case "-":
          this.operand1 = this.operand1 - this.operand2;
          break;
        case "*":
          this.operand1 = this.operand1 * this.operand2;
          break;
        case "/":
          this.operand1 = this.operand1 / this.operand2;
          break;
        case "^":
          this.operand1 = Math.pow(this.operand1, this.operand2);
          break;
      }
    }
}
