
let input = 'abc',
  output = ['abc', 'a bc', 'ab c', 'a b c'];

// LOGIC:: Always take 1 number from the input, remove the number from the input and apply recursion
const printPermutationWithSpaces = (input, output) => {
  if (!input) {
    console.log(output);
    return;
  }

  let op1 = output + ' ' + input[0],
    op2 = output + input[0];

  input = input.substring(1);

  printPermutationWithSpaces(input, op1);
  printPermutationWithSpaces(input, op2);

}

printPermutationWithSpaces(input.substring(1), input[0]);
