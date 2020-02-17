{
  let str = '文字列';
  let num = 1;
  let bool = true;
  let func = () => {};
  let obj = {};

  console.log(str, num, bool, func(), obj);
}

class Base {
  num = 1;
  str: string;

  regExpOptional?: RegExp;

  constructor(str: string) {
    this.str = str;
  }

  hello(): string {
    return `Hello, ${this.str}`;
  }
  get regExp() {
    if (!this.regExpOptional) {
      return new RegExp('test');
    }
    return this.regExpOptional;
  }
}

const base = new Base('world');
console.log(base);
console.log(base.hello());

function hey(word?: string) {
  return `Hey, ${word || 'TypeScript'}`;
}

console.log(hey());

function hello(...args: string[]) {
  return `Hello, ${args.join(' & ')}`;
}

console.log(hello('ts', 'node'));

function asyncModoki(callback: (v: string) => void) {
  callback('TypeScript');
}

asyncModoki(v => console.log('Hello, ${v}'));

function returnByPromise(word: string) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(word);
    }, 1000);
  });
}

async function helloAsync(): Promise<string> {
  console.log('A');
  const word = await returnByPromise('TypeScript');
  console.log(word);
  console.log('B');
  return `Hello, ${word}`;
}

(async () => {
  const hello = await helloAsync();
  console.log(hello);
})();

helloAsync().then(hello => console.log(hello));

export {};
