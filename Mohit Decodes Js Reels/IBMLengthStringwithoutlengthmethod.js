// IBM Length String without lengt hmethod

function lengthOfString(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        count++;
    }
    return count;
}
console.log(lengthOfString("javascript"));

function lengthOfStringOne(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            count++;
        }

    }
    return count;
}
console.log(lengthOfStringOne("hello world"));
