//Question - > https://leetcode.com/problems/longest-common-prefix/description/?envType=problem-list-v2&envId=nig7metv

//Solution;
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  let commonPrefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    const currentChar = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== currentChar) {
        return commonPrefix;
      }
    }

    commonPrefix += currentChar;
  }

  return commonPrefix;
}
