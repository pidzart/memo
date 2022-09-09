# array-func/from-map

[Home](../../../index.md) >
[eslint ルール](../../index.md) >
[eslint-plugin-array-func](../array-func.md) >
array-func/from-map

`Array.from` 関数と `map` メソッドを続けて使用する場合に `Array.from` 関数の第二引数 `mapFn` を推奨します。

# オプション

オプションはありません。

# 正しい例

```javascript
/* eslint array-func/from-map: "error" */

Array.from(iterable, (x) => x);

var array = Array.from(iterable);
array.map((x) => x);

Array.from(iterable, (x) => x).flatMap((y) => y);
```

# 間違った例

```javascript
/* eslint array-func/from-map: "error" */

Array.from(iterable).map((x) => x);
Array.from(iterable, (x) => x).map((y) => y);
```

# コンフィグ

| extends                       | value     |
| ----------------------------- | --------- |
| plugin:array-func/recommended | `"error"` |
| plugin:array-func/all         | `"error"` |

# 参照リンク

- [official document](https://github.com/freaktechnik/eslint-plugin-array-func#from-map)
- [rule source](https://github.com/freaktechnik/eslint-plugin-array-func/blob/main/rules/from-map.js)
- [test source](https://github.com/freaktechnik/eslint-plugin-array-func/blob/main/test/rules/from-map.mjs)
