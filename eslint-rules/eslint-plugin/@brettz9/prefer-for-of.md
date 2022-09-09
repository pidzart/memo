# @brettz9/prefer-for-of

[Home](../../../index.md) >
[eslint ルール](../../index.md) >
[@brettz9/eslint-plugin](../@brettz9.md) >
@brettz9/prefer-for-of

`for` `for-in` 文や `Array.prototype.forEach` などのメソッドの代わりに `for-of` 文を推奨します。

# オプション

オプションはありません。

# 正しい例

```javascript
/*eslint @brettz9/prefer-for-of: "error"*/

for (var item of array) {
  result += item;
}

for (var key of Object.keys(array)) {
  result.push(key + obj[key]);
}

for (var param of obj) {
  result += param;
}
```

# 間違った例

```javascript
/*eslint @brettz9/prefer-for-of: "error"*/

array.forEach((value) => {
  result += value;
});

for (let i = 0; i < array.length; ++i) {
  result += array[i];
}

for (var key in obj) {
  if (obj.hasOwnProperty(key)) {
    result += key + obj[key];
  }
}
```

# コンフィグ

| extends                    | value     |
| -------------------------- | --------- |
| `"plugin:@brettz9/es5"`    | `"off"`   |
| `"plugin:@brettz9/es6"`    | `"error"` |
| `"plugin:@brettz9/es2015"` | `"error"` |

# 参照リンク

- [official document](https://github.com/brettz9/eslint-plugin/blob/main/docs/rules/prefer-for-of.md)
- [rule source](https://github.com/brettz9/eslint-plugin/blob/main/lib/rules/prefer-for-of.js)
- [test source](https://github.com/brettz9/eslint-plugin/blob/main/tests/lib/rules/prefer-for-of.js)
