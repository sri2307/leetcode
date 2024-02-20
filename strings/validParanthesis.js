// 20. Valid Parentheses

// Easy

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


const isValid = (string) => {
    if(string.length<=1) return false
    const map = new Map([
      ["{", "}"],
      ["(", ")"],
      ["[", "]"],
    ]);
    const stack = [];
  
    for (const char of string) {
      if (map.has(char)) {
        //if opening parens is in map then push close parens to stack
        stack.push(map.get(char)); 
      } else if (stack.length > 0 && stack[stack.length - 1] === char) {
        //if top element of stack is matching with the current paren then pop the element from the stack
        stack.pop();
      } else {
        return false;
      }
    }
  
    return stack.length === 0;
};
