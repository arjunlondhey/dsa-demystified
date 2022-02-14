
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


const printSubsequenceApproachTwo = (input, i, output) => {
  if (i >= input.length) {
    console.log(output);
    return;
  }

  output.push(input[i]);
  printSubsequenceApproachTwo(input, i + 1, output);
  output.pop();
  printSubsequenceApproachTwo(input, i + 1, output);
}

//printSubsequence(input, '');
printSubsequenceApproachTwo(input, 0, '');
