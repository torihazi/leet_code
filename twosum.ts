// 1回目
// function twoSum(nums: number[], target: number): number[] {
//     for (let i = 0; i < nums.length; i++) {
//         for(let j = 0; j < nums.length; j++) {
//             if (i !== j && target === nums[i] + nums[j]) {
//                 return [i, j]
//             }
//         }
//     }
//     return []
// };

//  j = i+1から始めて良い => 0,1も1,0も同じ組み合わせであるから。
// O(n^2)であるのでよろしくない

// 2回目
// function twoSum(nums: number[], target: number): number[] {
//     for (let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if (i !== j && target === nums[i] + nums[j]) {
//                 return [i, j]
//             }
//         }
//     }
//     return []
// };

// Map使うらしい
function twoSum(nums: number[]m target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i ++ ){
    const complement = target - nums[i];
    if (map.get(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i)
  }
  return []
}
      

      

