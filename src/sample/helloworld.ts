var hello = 'Hello world';

function say(something: string) {
  console.log(something);
}

function multiply(a: number, b: number) {
  const result = a * b;
  console.log('The multiplication of ' + a + '*' + b + ' equals to : ' + result);
  return result;
}

say(hello);
multiply(1, 2);
multiply(2, 2);
multiply(-10, 10);
//multiply('foo', "bar"); // this is type error
