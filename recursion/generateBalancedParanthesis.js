
let input = 3,
  output = ['{{{}}}', '{}{}{}', '{{}}{}', '{}{{}}'];

let result = new Set();
// LOGIC:: Always take 1 number from the input, remove the number from the input and apply recursion
const generateBalancedParenthesis = (output, open, close) => {
  if (open === 0 && close === 0) {
    result.add(output);
    return;
  }

  if (open > 0) {
    output += '{';
    open -= 1;

    generateBalancedParenthesis(output, open, close);
  }

  if (close === open) {
    return;
  }

  if (close > 0) {
    output += '}';
    close -= 1;
  }

  generateBalancedParenthesis(output, open, close);
}

const generateBalancedParenthesisApproachTwo = (open, close, output) => {

  if (open === 0 && close === 0) {
    console.log(output);
    return;
  }

  if (open > 0) {
    output += '{';
    open = open - 1;
    generateBalancedParenthesisApproachTwo(open, close, output);
    open = open + 1;
    output = output.substring(0, output.length - 1);
  }

  if (close === open) return;

  if (close > 0) {
    output += '}';
    close = close - 1;
    generateBalancedParenthesisApproachTwo(open, close, output);
    close = close + 1;
    output = output.substring(0, output.length - 1);
  }
}

generateBalancedParenthesis('', input, input);

console.log(result);
