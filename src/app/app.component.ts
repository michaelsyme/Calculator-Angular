import { Component, Inject } from '@angular/core';
import { Equation }      from './equation';

const OPERAND_REGEXP    =   /^[0-9]+[\.]?[0-9]*$/;
const OPERATION_REGEXP  =   /[\+|\-|\*|\/|\^]/;
enum ArgTypes {
  NONE = 0,
  OPERAND = 1,
  OPERATION = 2
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

  title = 'Angular Calculator';

  calculate(args: string) {
    var lastArgType = ArgTypes.NONE;

    var chunks = args.split(' ');

    if(chunks.length < 3) {
      return "Please enter equations in operand operation operand format separated by space.";
    }

    var e = new Equation();

    for(var i in chunks) {
      var arg = chunks[i].trim();

      if(arg.match(OPERAND_REGEXP) !== null) {

        // make sure we don't have an operand followed by an operand
        if(lastArgType === ArgTypes.OPERAND) {
          return "Invalid input pattern. Detected 2 operands together.";
        }
        lastArgType = ArgTypes.OPERAND;

        // assign to either operand1 or operand2
        if(e.getOperand1() === null) {
          e.setOperand1(Number(arg));
        } else {
          e.setOperand2(Number(arg));

          // process and update operand1
          e.process();

          e.setOperand2(null);
        }
      } else if(arg.match(OPERATION_REGEXP) !== null) {
        // make sure we don't have an operation followed by an operation
        if(lastArgType === ArgTypes.OPERATION) {
          return "Invalid input pattern. Detected 2 operations together.";
        }
        lastArgType = ArgTypes.OPERATION;

        // set operation
        e.setOperation(arg);
      } else {
        return "invalid operand or operation detected - " + arg;
      }
    }

    return "Result: " + e.getOperand1();
  }
}
