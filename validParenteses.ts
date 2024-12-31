function isValid(s: string): boolean {
    const bracketsMap = new Map([
        ["(", ")"],
        ["{", "}"],
        ["[", "]"]
    ]);

    const array = s.split('');
    const stack: string[] = [];

    if (array.length === 1) return false;

    for (let i = 0; i < array.length; i++) {
        // 開き括弧である場合
        if (bracketsMap.has(array[i])) {
            stack.push(array[i]);
        } else {
            // 閉じ括弧である場合
            if (array[i] !== bracketsMap.get(stack[stack.length - 1])) {
                return false;
            } else {
                stack.pop();
            }
        }
    }

    return stack.length === 0;
}
