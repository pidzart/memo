# array-func/prefer-flat

[Home](../../../index.md) >
[eslint ルール](../../index.md) >
[eslint-plugin-array-func](../array-func.md) >
array-func/prefer-flat

配列を平坦化する場合に `flat` メソッドを推奨します。

# オプション

オプションはありません。

# 正しい例

```javascript
/* eslint array-func/prefer-flat: "error" */

array.flat();
```

# 間違った例

```javascript
/* eslint array-func/prefer-flat: "error" */

[].concat(...array);
array.reduce((x, y) => x.concat(y), []);
```

# コンフィグ

| extends               | value     |
| --------------------- | --------- |
| plugin:array-func/all | `"error"` |

# 参照リンク

- [official document](https://github.com/freaktechnik/eslint-plugin-array-func#prefer-flat)
- [rule source](https://github.com/freaktechnik/eslint-plugin-array-func/blob/main/rules/prefer-flat.js)
- [test source](https://github.com/freaktechnik/eslint-plugin-array-func/blob/main/test/rules/prefer-flat.mjs)
