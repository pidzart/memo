# @brettz9/block-scoped-var

[Home](../../../index.md) >
[eslint ルール](../../index.md) >
[@brettz9/eslint-plugin](../@brettz9.md) >
@brettz9/block-scoped-var

`var` 宣言を `let` 宣言のように扱い、ブロックスコープの外での参照・再宣言・シャドウイングを警告します。

# オプション

オプションはありません。

# 正しい例

```javascript
/* eslint @brettz9/block-scoped-var: "error" */

var foo = 42;
{
  console.log(foo);
}

for (var i = 0; i < 10; i++) {
  console.log(i);
}
```

# 間違った例

```javascript
/* eslint @brettz9/block-scoped-var: "error" */

// スコープの外で参照
{
  var a = 42;
}
console.log(a);

// スコープの外で参照
for (var b = 0; b < 10; b++) {}
console.log(b);

// 同じ名前の宣言
var c = 0;
var c = 1;

// 外のスコープと同じ名前の宣言
var d = 0;
{
  var d = 1;
}
```

# コンフィグ

| extends                | value   |
| ---------------------- | ------- |
| plugin:@brettz9/es5    | `"off"` |
| plugin:@brettz9/es6    | `"off"` |
| plugin:@brettz9/es2015 | `"off"` |

# 参照リンク

- [official document](https://github.com/brettz9/eslint-plugin/blob/main/docs/rules/block-scoped-var.md)
- [rule source](https://github.com/brettz9/eslint-plugin/blob/main/lib/rules/block-scoped-var.js)
- [test source](https://github.com/brettz9/eslint-plugin/blob/main/tests/lib/rules/block-scoped-var.js)
