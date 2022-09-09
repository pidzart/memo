# @brettz9/arrow-parens

[Home](../../../index.md) >
[eslint ルール](../../index.md) >
[@brettz9/eslint-plugin](../@brettz9.md) >
@brettz9/arrow-parens

アロー関数式の引数リストを括弧で囲むように要求します。
ただし、引数が始め括弧の直後にある場合を除きます。

# オプション

オプションはありません。

# 正しい例

<!-- prettier-ignore -->
```javascript
/* eslint @brettz9/arrow-parens: "error" */

var foo = (x) => x;
var foo = (x => x);
array.reduce(x => x, 0);
```

# 間違った例

<!-- prettier-ignore -->
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

| extends                | value   |
| ---------------------- | ------- |
| plugin:@brettz9/es5    | `"off"` |
| plugin:@brettz9/es6    | `"off"` |
| plugin:@brettz9/es2015 | `"off"` |

# 参照リンク

- [official document](https://github.com/brettz9/eslint-plugin/blob/main/docs/rules/arrow-parens.md)
- [rule source](https://github.com/brettz9/eslint-plugin/blob/main/lib/rules/arrow-parens.js)
- [test source](https://github.com/brettz9/eslint-plugin/blob/main/tests/lib/rules/arrow-parens.js)
