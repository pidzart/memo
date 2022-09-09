# @brettz9/no-literal-call

[Home](../../index.md) >
[eslint ルール](../index.md) >
[@brettz9/eslint-plugin](../@brettz9.md) >
@brettz9/no-literal-call

リテラルの関数呼び出しを禁止します。

# オプション

オプションはありません。

# 正しい例

```javascript
/* eslint @brettz9/no-literal-call: "error" */

foo();
foo`foo`;
```

# 間違った例

```javascript
/* eslint @brettz9/no-literal-call: "error" */

42();
"foo"();
true`foo`;
```

# コンフィグ

| extends                    | value     |
| -------------------------- | --------- |
| `"plugin:@brettz9/es5"`    | `"error"` |
| `"plugin:@brettz9/es6"`    | `"error"` |
| `"plugin:@brettz9/es2015"` | `"error"` |

# 参照リンク

- [official document](https://github.com/brettz9/eslint-plugin/blob/main/docs/rules/no-literal-call.md)
- [rule source](https://github.com/brettz9/eslint-plugin/blob/main/lib/rules/no-literal-call.js)
- [test source](https://github.com/brettz9/eslint-plugin/blob/main/tests/lib/rules/no-literal-call.js)
