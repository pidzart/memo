# @brettz9/no-instanceof-array

[Home](../../index.md) >
[eslint ルール](../index.md) >
[@brettz9/eslint-plugin](../@brettz9.md) >
@brettz9/no-instanceof-array

変数が配列であるか調べるための `instanceof Array` を禁止します。

# オプション

オプションはありません。

# 正しい例

```javascript
/* eslint @brettz9/no-instanceof-array: "error" */

Array.isArray(foo);
```

# 間違った例

```javascript
/* eslint @brettz9/no-instanceof-array: "error" */

foo instanceof Array;
```

# コンフィグ

| extends | value |
| ------- | ----- |

# 参照リンク

- [official document](https://github.com/brettz9/eslint-plugin/blob/main/docs/rules/no-instanceof-array.md)
- [rule source](https://github.com/brettz9/eslint-plugin/blob/main/lib/rules/no-instanceof-array.js)
- [test source](https://github.com/brettz9/eslint-plugin/blob/main/tests/lib/rules/no-instanceof-array.js)
