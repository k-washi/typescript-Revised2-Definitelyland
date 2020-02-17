"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
{
    let str = '文字列';
    let num = 1;
    let bool = true;
    let func = () => { };
    let obj = {};
    console.log(str, num, bool, func(), obj);
}
class Base {
    constructor(str) {
        this.num = 1;
        this.str = str;
    }
    hello() {
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
function hey(word) {
    return `Hey, ${word || 'TypeScript'}`;
}
console.log(hey());
function hello(...args) {
    return `Hello, ${args.join(' & ')}`;
}
console.log(hello('ts', 'node'));
function asyncModoki(callback) {
    callback('TypeScript');
}
asyncModoki(v => console.log('Hello, ${v}'));
function returnByPromise(word) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(word);
        }, 1000);
    });
}
function helloAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('A');
        const word = yield returnByPromise('TypeScript');
        console.log(word);
        console.log('B');
        return `Hello, ${word}`;
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    const hello = yield helloAsync();
    console.log(hello);
}))();
helloAsync().then(hello => console.log(hello));
