# array-func/prefer-array-from

[Home](../../../index.md) >
[eslint ルール](../../index.md) >
[eslint-plugin-array-func](../array-func.md) >
array-func/prefer-array-from

配列のスプレッド構文の代わりに `Array.from` 関数を推奨します。

# オプション

オプションはありません。

# 正しい例

```javascript
/* eslint array-func/prefer-array-from: "error" */

Array.from(array);
Array.from(iterable);
```

# 間違った例

```javascript
/* eslint array-func/prefer-array-from: "error" */

[...array];
[...iterable];
```

# コンフィグ

| extends                       | value     |
| ----------------------------- | --------- |
| plugin:array-func/recommended | `"error"` |
| plugin:array-func/all         | `"error"` |

# 参照リンク

- [official document](https://github.com/freaktechnik/eslint-plugin-array-func#prefer-array-from)
- [rule source](https://github.com/freaktechnik/eslint-plugin-array-func/blob/main/rules/prefer-array-from.js)
- [test source](https://github.com/freaktechnik/eslint-plugin-array-func/blob/main/test/rules/prefer-array-from.mjs)
