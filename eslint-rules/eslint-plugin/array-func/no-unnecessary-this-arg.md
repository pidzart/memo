# array-func/no-unnecessary-this-arg

[Home](../../../index.md) >
[eslint ルール](../../index.md) >
[eslint-plugin-array-func](../array-func.md) >
array-func/no-unnecessary-this-arg

配列のコールバック関数を使うメソッドでアロー関数式と 引数 `thisArg` を同時に使用した場合に警告します。

# オプション

オプションはありません。

# 正しい例

```javascript
/* eslint array-func/no-unnecessary-this-arg: "error" */

array.map((x) => x);
array.filter(function (x) {
  return x + this;
}, 10);
array.flatMap(foo.method, foo);
```

# 間違った例

```javascript
/* eslint array-func/no-unnecessary-this-arg: "error" */

array.every((x) => x, "this");
array.some((x) => x, this);
```

# コンフィグ

| extends                       | value     |
| ----------------------------- | --------- |
| plugin:array-func/recommended | `"error"` |
| plugin:array-func/all         | `"error"` |

# 参照リンク

- [official document](https://github.com/freaktechnik/eslint-plugin-array-func#no-unnecessary-this-arg)
- [rule source](https://github.com/freaktechnik/eslint-plugin-array-func/blob/main/rules/no-unnecessary-this-arg.js)
- [test source](https://github.com/freaktechnik/eslint-plugin-array-func/blob/main/test/rules/no-unnecessary-this-arg.mjs)
