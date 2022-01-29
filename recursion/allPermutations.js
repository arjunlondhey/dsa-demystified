
let input = [1, 2, 3],
  output = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]];

// LOGIC:: Always take 1 number from the input, remove the number from the input and apply recursion
const printPermutationsApproachOne = (input, output) => {
  if (!input.size) {
    console.log(output);
    return;
  }


  for (let i = 0; i < input.length; i++) {
    output.push(input[i]);

    input = input.delete(i);
    printPermutations(input, output);
  }
}

const printPermutationsApproachTwo = (input, output, visited, ans) => {
  if (output.length === input.length) {

    if (!ans[output]) {
      console.log(output);
    }

    ans[output] = true
    return;
  }


  for (let i = 0; i < input.length; i++) {
    if (visited[input[i]] === true) continue;
    output.push(input[i]);
    visited[input[i]] = true;
    printPermutationsApproachTwo(input, output, visited, ans);
    let back = output.pop();
    visited[back] = false;
  }
}

const solve = (input) => {
  let set = {};

  for (let i = 0; i < input.length; i++) {
    set[input[i]] = input[i];
  }

  //  printPermutationsApproachOne(set, output);
  printPermutationsApproachTwo(input, [], {}, {});

}

solve(input);