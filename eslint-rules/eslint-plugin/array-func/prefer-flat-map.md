# array-func/prefer-flat-map

[Home](../../../index.md) >
[eslint ルール](../../index.md) >
[eslint-plugin-array-func](../array-func.md) >
array-func/prefer-flat-map

`map` `flat` メソッドを連続して使用する場合に `flatMap` メソッドを推奨します。

# オプション

オプションはありません。

# 正しい例

```javascript
/* eslint array-func/prefer-flat-map: "error" */

array.map((x) => x);
array.flat();
array.flatMap((x) => x);
array.flat().map((x) => x);

// 引数 `depth` がデフォルトでない場合
array.map((x) => x).flat(2);
```

# 間違った例

```javascript
/* eslint array-func/prefer-flat-map: "error" */

array.map((x) => x).flat();
array.map((x) => x).flat(1);
```

# コンフィグ

| extends               | value     |
| --------------------- | --------- |
| plugin:array-func/all | `"error"` |

# 参照リンク

- [official document](https://github.com/freaktechnik/eslint-plugin-array-func#prefer-flat-map)
- [rule source](https://github.com/freaktechnik/eslint-plugin-array-func/blob/main/rules/prefer-flat-map.js)
- [test source](https://github.com/freaktechnik/eslint-plugin-array-func/blob/main/test/rules/prefer-flat-map.mjs)
