# @brettz9/no-this-in-static

[Home](../../index.md) >
[eslint ルール](../index.md) >
[@brettz9/eslint-plugin](../@brettz9.md) >
@brettz9/no-this-in-static

クラスの静的メソッドの中で `this` `super` キーワードを使用することを警告します。

# オプション

オプションはありません。

# 正しい例

```javascript
/* eslint @brettz9/no-this-in-static: "error" */

class Foo {
  static foo() {
    Foo.foo;
  }
}
```

# 間違った例

```javascript
/* eslint @brettz9/no-this-in-static: "error" */

class Foo {
  static foo() {
    this.foo;
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

- [official document](https://github.com/brettz9/eslint-plugin/blob/main/docs/rules/no-this-in-static.md)
- [rule source](https://github.com/brettz9/eslint-plugin/blob/main/lib/rules/no-this-in-static.js)
- [test source](https://github.com/brettz9/eslint-plugin/blob/main/tests/lib/rules/no-this-in-static.js)
