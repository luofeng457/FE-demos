class Stack {
    constructor() {
        this.arr = [];
    }
    push(ctx) {
        this.arr.push(ctx);
    }
    pop() {
        this.arr.pop()
    }
    getStack() {
        return this.arr;
    }
    getLength() {
        return this.arr.length;
    }
    isEmpty() {
        return this.arr.length === 0;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.getStack());
stack.pop();
console.log(stack.isEmpty());
stack.pop();
console.log(stack.isEmpty())

// 括号匹配问题
/**
 * des：leetcode20题：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效
 * @param {string} s 输入字符串
 * @return {boolean}
 */
const isValid = s => {
    const map = {
        "(": -1,
        ")": 1,
        "[": -2,
        "]": 2,
        "{": -3,
        "}": 3,
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] < 0) {
            stack.push(s[i]);
        } else {
            let top = stack.pop();
            if (map[top] + map[s[i]] !== 0) {
                return false;
            }
        }
    }
    if (stack.length > 0) return false;
    return true;
}
