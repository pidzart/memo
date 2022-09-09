# @brettz9/no-use-ignored-vars

[Home](../../index.md) >
[eslint ルール](../index.md) >
[@brettz9/eslint-plugin](../@brettz9.md) >
@brettz9/no-use-ignored-vars

特定の変数名の変数を使用することを禁止します。

# オプション

一つの文字列オプションがあります。

- `string`
  デフォルト: `"^_[a-zA-Z]+$"`
  パターンに当てはまる変数の使用が報告されます。

# 正しい例

```javascript
/* eslint @brettz9/no-use-ignored-vars: "error" */

var _foo = "foo";
function foo(_foo) {
  return 42;
}
```

# 間違った例

```javascript
/* eslint @brettz9/no-use-ignored-vars: "error" */

var _foo = "foo";
foo(_foo);
function foo(_foo) {
  return _foo;
}
```

# コンフィグ

| extends                    | value                         |
| -------------------------- | ----------------------------- |
| `"plugin:@brettz9/es5"`    | `["error", "^_(?:[^_].*)?$"]` |
| `"plugin:@brettz9/es6"`    | `["error", "^_(?:[^_].*)?$"]` |
| `"plugin:@brettz9/es2015"` | `["error", "^_(?:[^_].*)?$"]` |

# 参照リンク

- [official document](https://github.com/brettz9/eslint-plugin/blob/main/docs/rules/no-use-ignored-vars.md)
- [rule source](https://github.com/brettz9/eslint-plugin/blob/main/lib/rules/no-use-ignored-vars.js)
- [test source](https://github.com/brettz9/eslint-plugin/blob/main/tests/lib/rules/no-use-ignored-vars.js)
