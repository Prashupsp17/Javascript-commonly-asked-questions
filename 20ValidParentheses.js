// 20 Valid Parentheses Leetcode

function isValid(s) {
    // Map to store matching pairs
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    // Initialize an empty stack
    const stack = [];

    // Iterate through each character in the string
    for (let i=0;i<s.length;i++) {
        let char = s[i];
        // If the character is an opening bracket, push it onto the stack
        if (bracketMap[char]) {
            stack.push(char);
        } else {
            // If the stack is empty or the top of the stack doesn't match the current closing bracket
            if (stack.length === 0 || bracketMap[stack.pop()] !== char) {
                return false;
            }
        }
    }

    // If the stack is empty, all brackets are properly closed
    return stack.length === 0;
}

// Example usage:
console.log(isValid("()"));       // true
// console.log(isValid("()[]{}"));   // true
// console.log(isValid("(]"));       // false
// console.log(isValid("([)]"));     // false
// console.log(isValid("{[]}"));     // true