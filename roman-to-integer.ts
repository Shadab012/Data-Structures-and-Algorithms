//Question - > https://leetcode.com/problems/roman-to-integer/description/?envType=problem-list-v2&envId=nig7metv

//Solution;

function romanToInt(s: string): number {
  const romanValues: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = romanValues[s[i]];
    const next = romanValues[s[i + 1]];

    if (next && curr < next) {
      res += next - curr;
      i++;
    } else {
      res += curr;
    }
  }

  return res;
}
