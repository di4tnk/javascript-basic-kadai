const test = require('node:test');
const assert = require('node:assert');
const sum = require('./sum.js');

test('数値の配列の合計を返す', () => {
    assert.strictEqual(sum([1, 2, 3, 4, 5]), 15);
});

test('負の数を含む配列の合計を返す', () => {
    assert.strictEqual(sum([10, -3, -7]), 0);
});

test('要素が1つの配列はその値を返す', () => {
    assert.strictEqual(sum([42]), 42);
});

test('空配列の場合は0を返す', () => {
    assert.strictEqual(sum([]), 0);
});
