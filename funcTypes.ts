function add(a, b){return a+b }
function subtract(a, b){return a-b }
function multiply(a, b){return a*b}
function divide(a, b){return a/b}
function wrongAdd(a, b){return (a+b)+''}

type OperatorFunction = (a: number,b: number) => number;

function mathTutor(operationName: string, operationCallback: OperatorFunction) {

  let a = 2;
  let b = 5;

  console.log(`\nLet's learn how to ${operationName}!`);

  const result = operationCallback(a, b);

  console.log(`When we ${operationName} ${a} and ${b}, we get ${result}.`);

  const nextResult = operationCallback(result, 7);

  console.log(`When we ${operationName} ${result} and 7, we get ${nextResult}.`);

  console.log('Now fill out this worksheet...\n\n');
}

mathTutor("subtract",subtract);
mathTutor("add",add);
mathTutor("divide",divide);
mathTutor("multiply",multiply);

mathTutor("wrong add",wrongAdd);