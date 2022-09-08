# @brettz9/no-instanceof-wrapper

[Home](../../index.md) >
[eslint ルール](../index.md) >
[@brettz9/eslint-plugin](../@brettz9.md) >
@brettz9/no-instanceof-wrapper

変数がプリミティブ型であるか調べるためのラッパーオブジェクトを使った `instanceof` を禁止します。

# オプション

オプションはありません。

# 正しい例

```javascript
/* eslint @brettz9/no-instanceof-wrapper: "error" */

typeof foo === "boolean";
typeof foo === "number";
typeof foo === "string";
typeof foo === "object";
typeof foo === "function";
```

# 間違った例

```javascript
/* eslint @brettz9/no-instanceof-wrapper: "error" */

foo instanceof Boolean;
foo instanceof Number;
foo instanceof String;
foo instanceof Object;
foo instanceof Function;
```

# コンフィグ

| extends | value |
| ------- | ----- |

# 参照リンク

- [official document](https://github.com/brettz9/eslint-plugin/blob/main/docs/rules/no-instanceof-wrapper.md)
- [rule source](https://github.com/brettz9/eslint-plugin/blob/main/lib/rules/no-instanceof-wrapper.js)
- [test source](https://github.com/brettz9/eslint-plugin/blob/main/tests/lib/rules/no-instanceof-wrapper.js)
