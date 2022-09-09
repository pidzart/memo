# anti-trojan-source/no-bidi

[Home](../../../index.md) >
[eslint ルール](../../index.md) >
[eslint-plugin-anti-trojan-source](../anti-trojan-source.md) >
anti-trojan-source/no-bidi

アロー関数式の引数リストを括弧で囲むように要求します。
ただし、引数が始め括弧の直後にある場合を除きます。

# オプション

オプションはありません。

# 正しい例

<!-- prettier-ignore -->
```javascript
/* eslint anti-trojan-source/no-bidi: "error" */

var accessLevel = "user";
if (accessLevel != "user") { // Check if admin
  console.log("You are an admin.");
}
```

# 間違った例

```javascript
/* eslint anti-trojan-source/no-bidi: "error" */

var accessLevel = "user";
if (accessLevel != "user‮ ⁦// Check if admin⁩ ⁦") {
  console.log("You are an admin.");
}
```

# コンフィグ

| extends                               | value     |
| ------------------------------------- | --------- |
| plugin:anti-trojan-source/recommended | `"error"` |

# 参照リンク

- [rule source](https://github.com/lirantal/eslint-plugin-anti-trojan-source/blob/main/src/rules/no-bidi.ts)
- [test source](https://github.com/lirantal/eslint-plugin-anti-trojan-source/blob/main/test/no-bidi.test.js)
