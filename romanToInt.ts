// 1回目
// const VALUEMAP = new Map<string, number>([
//     ["I", 1],
//     ["V", 5],
//     ["X", 10],
//     ["L", 50],
//     ["C", 100],
//     ["D", 500],
//     ["M", 1000]
// ]);

// function romanToInt(s: string): number {
//     // 文字列の分解
//     const romanString = s.split("");
//     let total = 0;

//     for (let i = 0; i < romanString.length; i++) {
//         const current = VALUEMAP.get(romanString[i])!;  // 現在の値
//         const next = VALUEMAP.get(romanString[i + 1]);  // 次の値
        
//         // ここで判断する：
//         // 1. 次の文字がある場合（最後でない場合）
//         //    - 現在の値 < 次の値 なら引き算
//         //    - そうでなければ足し算
//         // 2. 最後の文字の場合は単純に足し算
//         if (i === romanString.length - 1) {
//             total += current
//         } else {
//             current - next < 0 
//                 ? total += current
//                 : total += (next - current)
//         }
//     }
//     return total;

// };

//  極意 => 人間が考えるロジックを1つずつ
//  何ができればいいのか、求めたい達成したい事柄は何か。
// 普通にやったらできるのは確か。コードに落としたらできないのはおかしい。無意識のうちに自身の中でロジックを組んでいるので
// 粘り強くそれを掘り起こす作業をすること

const VALUEMAP = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000]
]);

function romanToInt(s: string): number {
    // 文字列の分解
    const romanString = s.split("");
    let total = 0;

    for (let i = 0; i < romanString.length; i++) {
        const current = VALUEMAP.get(romanString[i])!;  // 現在の値
        const next = VALUEMAP.get(romanString[i + 1]);  // 次の値
        
        if (next && current  < next ) {
            total -= current;
        } else {
            total += current;
        }
    }
    return total;

};

// なるほど、引いてから足すのね。現在のループで合計値を叩き出さないことか。
// 難しいね。
