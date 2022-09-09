# array-bracket-spacing

[Home](../../index.md) >
[eslint ルール](../index.md) >
[eslint](../eslint.md) >
array-bracket-spacing

配列リテラルで始め括弧の後ろと終わり括弧の前に空白（スペースまたは改行）を入れることをプロジェクト内で統一させます。

# オプション

一つの文字列オプションと一つのオブジェクトオプションがあります。

- `string`
  デフォルト: `"never"`
  - `"never"`: 常に空白を入れません。
  - `"always"`: 常に空白を入れます。
- `object`
  - `"singleValue": boolean`
    デフォルト: 一つ目のオプションが `"never"` のとき `false`
    `"always"` のとき `true`
    配列の要素数が一つの場合に空白を入れます。
  - `"objectsInArrays": boolean`
    デフォルト: 一つ目のオプションが `"never"` のとき `false`
    `"always"` のとき `true`
    配列の要素がオブジェクトリテラルの場合に空白を入れます。
  - `"arraysInArrays": boolean`
    デフォルト: 一つ目のオプションが `"never"` のとき `false`
    `"always"` のとき `true`
    配列の要素が配列リテラルの場合に空白を入れます。

# 正しい例

<!-- prettier-ignore -->
```javascript
/* eslint array-bracket-spacing: "error" */

// 配列リテラル
var foo = [1, 2, 3];

// 要素数が一つの配列リテラル
var foo = [1];

// 要素がオブジェクトリテラルの配列リテラル
var foo = [{ a: "foo", b: "bar" }];

// 要素が配列リテラルの配列リテラル
var foo = [[1, 2, 3]];
```

<!-- prettier-ignore -->
```javascript
/* eslint array-bracket-spacing: ["error", "always"] */

// 配列リテラル
var foo = [ 1, 2, 3 ];

// 要素数が一つの配列リテラル
var foo = [ 1 ];

// 要素がオブジェクトリテラルの配列リテラル
var foo = [ { a: "foo", b: "bar" } ];

// 要素が配列リテラルの配列リテラル
var foo = [ [ 1, 2, 3 ] ];
```

<!-- prettier-ignore -->
```javascript
/* eslint array-bracket-spacing: ["error", "never", { "singleValue": true }] */

// 要素数が一つの配列リテラル
var foo = [ 1 ];
```

<!-- prettier-ignore -->
```javascript
/* eslint array-bracket-spacing: ["error", "never", { "objectsInArrays": true }] */

// 要素がオブジェクトリテラルの配列リテラル
var foo = [ { a: "foo", b: "bar" } ];
```

<!-- prettier-ignore -->
```javascript
/* eslint array-bracket-spacing: ["error", "never", { "arraysInArrays": true }] */

// 要素が配列リテラルの配列リテラル
var foo = [ [1, 2, 3] ];
```

<!-- prettier-ignore -->
```javascript
/* eslint array-bracket-spacing: ["error", "always", { "singleValue": false }] */

// 要素数が一つの配列リテラル
var foo = [1];
```

<!-- prettier-ignore -->
```javascript
/* eslint array-bracket-spacing: ["error", "always", { "objectsInArrays": false }] */

// 要素がオブジェクトリテラルの配列リテラル
var foo = [{ a: "foo", b: "bar" }];
```

<!-- prettier-ignore -->
```javascript
/* eslint array-bracket-spacing: ["error", "always", { "arraysInArrays": false }] */

// 要素が配列リテラルの配列リテラル
var foo = [[ 1, 2, 3 ]];
```

# 間違った例

<!-- prettier-ignore -->
```javascript
/* eslint array-bracket-spacing: "error" */

// 配列リテラル
var foo = [ 1, 2, 3 ];

// 要素数が一つの配列リテラル
var foo = [ 1 ];

// 要素がオブジェクトリテラルの配列リテラル
var foo = [ { a: "foo", b: "bar" } ];

// 要素が配列リテラルの配列リテラル
var foo = [ [ 1, 2, 3 ] ];
```

<!-- prettier-ignore -->
```javascript
/* eslint array-bracket-spacing: ["error", "always"] */

// 配列リテラル
var foo = [1, 2, 3];

// 要素数が一つの配列リテラル
var foo = [1];

// 要素がオブジェクトリテラルの配列リテラル
var foo = [{ a: "foo", b: "bar" }];

// 要素が配列リテラルの配列リテラル
var foo = [[1, 2, 3]];
```

<!-- prettier-ignore -->
```javascript
/* eslint array-bracket-spacing: ["error", "never", { "singleValue": true }] */

// 要素数が一つの配列リテラル
var foo = [1];
```

<!-- prettier-ignore -->
```javascript
/* eslint array-bracket-spacing: ["error", "never", { "objectsInArrays": true }] */

// 要素がオブジェクトリテラルの配列リテラル
var foo = [{ a: "foo", b: "bar" }];
```

<!-- prettier-ignore -->
```javascript
/* eslint array-bracket-spacing: ["error", "never", { "arraysInArrays": true }] */

// 要素が配列リテラルの配列リテラル
var foo = [[ 1, 2, 3 ]];
```

<!-- prettier-ignore -->
```javascript
/* eslint array-bracket-spacing: ["error", "always", { "singleValue": false }] */

// 要素数が一つの配列リテラル
var foo = [ 1 ];
```

<!-- prettier-ignore -->
```javascript
/* eslint array-bracket-spacing: ["error", "always", { "objectsInArrays": false }] */

// 要素がオブジェクトリテラルの配列リテラル
var foo = [ { a: "foo", b: "bar" } ];
```

<!-- prettier-ignore -->
```javascript
/* eslint array-bracket-spacing: ["error", "always", { "arraysInArrays": false }] */

// 要素が配列リテラルの配列リテラル
var foo = [ [1, 2, 3] ];
```

# コンフィグ

| extends        | value     |
| -------------- | --------- |
| `"eslint:all"` | `"error"` |

# 参照リンク

- [official document](https://eslint.org/docs/latest/rules/array-bracket-spacing)
- [rule source](https://github.com/eslint/eslint/blob/main/lib/rules/array-bracket-spacing.js)
- [test source](https://github.com/eslint/eslint/blob/main/tests/lib/rules/array-bracket-spacing.js)
