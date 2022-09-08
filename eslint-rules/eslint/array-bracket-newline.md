# array-bracket-newline

[Home](../../index.md) >
[eslint ルール](../index.md) >
[eslint](../eslint.md) >
array-bracket-newline

配列リテラルで始め括弧の後ろと終わり括弧の前に改行を入れることをプロジェクト内で統一させます。

# オプション

一つのオブジェクトまたは文字列オプションがあります。

- `object | string`
  - `"multiline": boolean`
    デフォルト: `true`
    配列の要素内や要素間に改行を含む場合に改行します。
  - `"minItems": number | null`
    デフォルト: `null`
    配列の要素数が指定の数以上の場合に改行します。
  - `"always"`: 常に改行します。
  - `"never"`: 常に改行しません。
  - `"consistent"`: 一つの括弧の組で改行を統一します。

# 正しい例

```javascript
/* eslint array-bracket-newline: "error" */

// 一行の配列リテラル
var foo = [1, 2, 3];

// 要素間に改行のある配列リテラル
var foo = [
  1, 2,
  3,
];

// 要素内に改行のある配列リテラル
var foo = [
  `aaa
   bbb`,
];
```

```javascript
/* eslint array-bracket-newline: ["error", { "multiline": false, "minItems": 3 }] */

// 要素数が指定した数より少ない配列リテラル
var foo = [1, 2];

// 要素数が指定した数と同じ配列リテラル
var foo = [
  1, 2, 3
];

// 要素数が指定した数より多い配列リテラル
var foo = [
  1, 2, 3, 4
];
```

```javascript
/* eslint array-bracket-newline: ["error", "always"] */

// 配列リテラル
var foo = [
  1,
];
```

```javascript
/* eslint array-bracket-newline: ["error", "never"] */

// 配列リテラル
var foo = [1, 2, 3, 4, 5,
  6, 7, 8, 9, 10];
```

```javascript
/* eslint array-bracket-newline: ["error", "consistent"] */

// 始め括弧の後で改行する配列リテラル
var foo = [
  1, 2, 3,
];

// 始め括弧の後で改行しない配列リテラル
var foo = [1, 2, 3];
```

# 間違った例

```javascript
/* eslint array-bracket-newline: "error" */

// 改行のない配列リテラル
var foo = [
  1, 2, 3];
var foo = [1, 2, 3,
];

// 要素間に改行のある配列リテラル
var foo = [
  1, 2,
  3];

// 要素内に改行のある配列リテラル
var foo = [`aaa
   bbb`,
];
```

```javascript
/* eslint array-bracket-newline: ["error", { "multiline": false, "minItems": 3 }] */

// 要素数が指定した数より少ない配列リテラル
var foo = [
  1, 2
];

// 要素数が指定した数と同じ配列リテラル
var foo = [1, 2, 3];

// 要素数が指定した数より多い配列リテラル
var foo = [1, 2, 3, 4];
```

```javascript
/* eslint array-bracket-newline: ["error", "always"] */

// 配列リテラル
var foo = [1];
```

```javascript
/* eslint array-bracket-newline: ["error", "never"] */

// 配列リテラル
var foo = [
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 10,
];
```

```javascript
/* eslint array-bracket-newline: ["error", "consistent"] */

// 始め括弧の後で改行する配列リテラル
var foo = [
  1, 2, 3,];

// 始め括弧の後で改行しない配列リテラル
var foo = [1, 2, 3
];
```

# コンフィグ

| extends        | value     |
| -------------- | --------- |
| `"eslint:all"` | `"error"` |

# 参照リンク

- [official document](https://eslint.org/docs/latest/rules/array-bracket-newline)
- [rule source](https://github.com/eslint/eslint/blob/main/lib/rules/array-bracket-newline.js)
- [test source](https://github.com/eslint/eslint/blob/main/tests/lib/rules/array-bracket-newline.js)
