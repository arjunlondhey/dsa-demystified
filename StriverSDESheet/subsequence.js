
let input = 'abc',
  output = ['', 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'];

// LOGIC:: Always take 1 number from the input, remove the number from the input and apply recursion
const printSubsequence = (input, output) => {
  if (!input) {
    console.log(output);
    return;
  }

  let op1 = output,
    op2 = output + input[0];

  input = input.substring(1);

  printSubsequence(input, op1);
  printSubsequence(input, op2);

}

printSubsequence(input, '');
