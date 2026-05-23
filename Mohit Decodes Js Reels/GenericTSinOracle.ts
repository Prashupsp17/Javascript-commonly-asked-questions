// TS Generics in Oracle


function identity<T>(value: T): T {
    return value;
}

const str = identity<string>("hello world");
const num = identity<number>(42);

console.log("string value:",str);
console.log("number value:",num);