//Question - > https://leetcode.com/problems/valid-parentheses/submissions/1690374621/?envType=problem-list-v2&envId=nig7metv

//Solution;

function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let c of s) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== map[c]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}
