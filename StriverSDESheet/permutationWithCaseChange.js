
let _ = require('lodash'),
  input = 'abc',
  output = ['CBA', 'cBA', 'CbA', 'cbA', 'CBa', 'cBa', 'Cba', 'cba'];

// LOGIC:: Always take 1 number from the input, remove the number from the input and apply recursion
const permutationWithCaseChange = (input, output) => {
  if (!input) {
    console.log(output);
    return;
  }

  let firstIndex = input[0];

  input = input.substring(1);

  let op1 = firstIndex.toUpperCase() + output,
    op2 = firstIndex + output;

  permutationWithCaseChange(input, op1);
  permutationWithCaseChange(input, op2);

}

permutationWithCaseChange(input, '');
