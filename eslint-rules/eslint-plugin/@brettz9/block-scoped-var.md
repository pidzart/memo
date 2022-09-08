# @brettz9/block-scoped-var

[Home](../../index.md) >
[eslint ルール](../index.md) >
[@brettz9/eslint-plugin](../@brettz9.md) >
@brettz9/block-scoped-var

アロー関数式の引数リストを括弧で囲むように要求します。
ただし、引数が始め括弧の直後にある場合を除きます。

# オプション

オプションはありません。

# 正しい例

```javascript
/* eslint @brettz9/arrow-parens: "error" */

var foo = (x) => x;
var foo = (x => x);
array.reduce(x => x, 0);
```

# 間違った例

```javascript
/* eslint @brettz9/arrow-parens: "error" */

var foo = x => x;
var foo = ((x) => x);
var foo = (
  x => x
);
array.replace(/./g, x => x);
```

# コンフィグ

| extends | value |
| ------- | ----- |

# 参照リンク

- [official document](https://github.com/brettz9/eslint-plugin/blob/main/docs/rules/block-scoped-var.md)
- [rule source](https://github.com/brettz9/eslint-plugin/blob/main/lib/rules/block-scoped-var.js)
- [test source](https://github.com/brettz9/eslint-plugin/blob/main/tests/lib/rules/block-scoped-var.js)
