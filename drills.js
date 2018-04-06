const Stack = require('./stack');
const Queue = require('./queue');

const main = () => {
  let stack = new Stack();

  stack.push('Kirk');
  console.log(stack);
}

main();
