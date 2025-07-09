//Question - > https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/1692063099/?envType=problem-list-v2&envId=nig7metv

//Solution;

function removeDuplicates(nums: number[]): number {
  let k = 0;
  const seen = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (!seen.has(nums[i])) {
      seen.add(nums[i]);
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}
