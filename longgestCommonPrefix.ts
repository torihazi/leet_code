// function longestCommonPrefix(strs: string[]): string {
//     let commonPrefix = "";
//     for (let i = 0; i < strs[0].length; i++) {
//         let isCommon = false;
        
//         for (let j = 1; j < strs.length; j++) {
//             if (strs[0][i] === strs[j][i]){
//                 isCommon = true;
//             } else {
//                 isCommon = false;
//                 break;
//             }
//         }

//         if (isCommon) {
//             commonPrefix = commonPrefix + strs[0][i]
//         }
//     }
//     return commonPrefix;
  
// };

// これでいいのか？
// 計算量としてはえぐいと思うんだけど。

// ダメでした。1度でも違ったら以降チェックしない仕組みが必要。

// function longestCommonPrefix(strs: string[]): string {
//     if (strs.length === 0) return "";
//     if (strs.length === 1) return strs[0];

//     let commonPrefix = "";
//     for (let i = 0; i < strs[0].length; i++) {
//         let isCommon = false;
        
//         for (let j = 1; j < strs.length; j++) {
//             if (strs[0][i] === strs[j][i]){
//                 isCommon = true;
//             } else {
//                 isCommon = false;
//                 break;
//             }
//         }

//         if (isCommon) {
//             commonPrefix = commonPrefix + strs[0][i]
//         } else {
//             break;
//         }
//     }
//     return commonPrefix;
  
// };

// もっと早いのはこれらしい
// function longestCommonPrefix(strs: string[]): string {
//     let sorted = strs.sort((a,b) => a < b? -1:1)

//     let output = []
//     let firstword = sorted[0]
//     let lastword = sorted[sorted.length -1]
//     for (var i = 0; i < firstword.length; i++) {
//         if (firstword[i] == lastword[i] ){
//             output.push(firstword[i])
//         }else{       
//             break
//         }
//    }


//     return output.join("")
// };
