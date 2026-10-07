// 配列を受け取り、要素の合計値を返す
function sum(arr) {
    let total = 0;
    for (const num of arr) {
        total += num;
    }
    return total;
}

// Node.js（テスト）から読み込めるようにする
if (typeof module !== 'undefined') {
    module.exports = sum;
}
