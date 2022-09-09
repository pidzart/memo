# array-func/avoid-reverse

[Home](../../../index.md) >
[eslint ルール](../../index.md) >
[eslint-plugin-array-func](../array-func.md) >
array-func/avoid-reverse

配列で `reduce` と `reduceRight` のような逆から進めるメソッドが提供されている場合に `reverse` を使って配列を逆転させることを禁止します。

# オプション

オプションはありません。

# 正しい例

```javascript
/* eslint array-func/avoid-reverse: "error" */

array.reduce((x, y) => x + y);
array.reduceRight((x, y) => x + y);

array.reverse();
array.reduce((x, y) => x + y);

array.reverse().map((x) => x);
```

# 間違った例

```javascript
/* eslint array-func/avoid-reverse: "error" */

array.reverse().reduce((a, b) => a + b);
array.reverse().reduceRight((a, b) => a + b);
```

# コンフィグ

| extends                       | value     |
| ----------------------------- | --------- |
| plugin:array-func/recommended | `"error"` |
| plugin:array-func/all         | `"error"` |

# 参照リンク

- [official document](https://github.com/freaktechnik/eslint-plugin-array-func#avoid-reverse)
- [rule source](https://github.com/freaktechnik/eslint-plugin-array-func/blob/main/rules/avoid-reverse.js)
- [test source](https://github.com/freaktechnik/eslint-plugin-array-func/blob/main/test/rules/avoid-reverse.mjs)
