# array-callback-return

[Home](../../index.md) >
[eslint ルール](../index.md) >
[eslint](../eslint.md) >
array-callback-return

配列オブジェクトのコールバック関数を使うメソッドで「不要な `return` がある」「必要な `return` がない」場合に警告します。

# オプション

一つのオブジェクトオプションがあります

- `object`
  - `"allowImplicit": boolean`
    デフォルト: `false`
    値を返す必要がある場合に暗黙の `undefined` を返すことを許可します。
  - `"checkForEach": boolean`
    デフォルト: `false`
    `Array.prototype.forEach` のコールバック関数で値を返す場合に警告します。

# 正しい例

```javascript
/* eslint array-callback-return: "error" */

// 無名関数式
array.map(function () {
  return 1 + 2;
});

// アロー関数式
array.filter(() => {
  return true;
});

// ブロックが省略されたアロー関数式
array.reduce(() => 1 + 2);
```

```javascript
/* eslint array-callback-return: ["error", { "allowImplicit": true }] */

// 値のない `return` 文で暗黙の `undefined` を返す
array.every(function () {
  return;
});
```

```javascript
/* eslint array-callback-return: ["error", { "checkForEach": true }] */

// 値を返さない
array.forEach(() => {
  1 + 2;
});

// 値のない `return` 文
array.forEach(() => {
  return;
});
```

# 間違った例

```javascript
/* eslint array-callback-return: "error" */

// 無名関数式
array.map(function () {
  1 + 2;
});

// アロー関数式
array.filter(() => {
  true;
});
```

```javascript
/* eslint array-callback-return: ["error", { "allowImplicit": true }] */

// `return` 文を書かずに暗黙の `undefined` を返す
array.every(function () {
  1 + 2;
});
```

```javascript
/* eslint array-callback-return: ["error", { "checkForEach": true }] */

// 値を返す
array.forEach(() => {
  return 1 + 2;
});
```

# コンフィグ

| extends        | value     |
| -------------- | --------- |
| `"eslint:all"` | `"error"` |

# 参照リンク

- [official document](https://eslint.org/docs/latest/rules/array-callback-return)
- [rule source](https://github.com/eslint/eslint/blob/main/lib/rules/array-callback-return.js)
- [test source](https://github.com/eslint/eslint/blob/main/tests/lib/rules/array-callback-return.js)
