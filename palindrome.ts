// function isPalindrome(x: number): boolean {
//     const StringX = String(x);
//     const reverseStringX = StringX.split('').reverse().join('');

//     return StringX === reverseStringX;

// };

// これの方が簡潔？
function isPalindromw(x: number): boolean {
  return x.toString() === x.toString().split("").reverse().join("")
}

// 一番早い早いやつの解法が意味分からん
