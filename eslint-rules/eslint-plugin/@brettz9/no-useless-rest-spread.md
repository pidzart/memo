# @brettz9/no-useless-rest-spread

[Home](../../index.md) >
[eslint ルール](../index.md) >
[@brettz9/eslint-plugin](../@brettz9.md) >
@brettz9/no-useless-rest-spread

不要なスプレッド構文・残余構文を使用することを禁止します。

# オプション

オプションはありません。

# 正しい例

```javascript
/*eslint @brettz9/no-useless-rest-spread: "error"*/

// スプレッド構文
var array = [...array, a, b, c];
var obj = { ...obj, a, b, c };
foo(...array, a, b, c);

// 残余構文
var [a, b, c, ...rest] = array;
function foo(a, b, c, ...rest) {}
```

# 間違った例

```javascript
/*eslint @brettz9/no-useless-rest-spread: "error"*/

// 不要なスプレッド構文
var array = [...[a, b, c]];
var obj = { ...{ a, b, c } };
foo(...[a, b, c]);

// 不要な残余構文
var [...[a, b, c]] = array;
function foo(...[a, b, c]) {}
```

# コンフィグ

| extends                    | value     |
| -------------------------- | --------- |
| `"plugin:@brettz9/es5"`    | `"off"`   |
| `"plugin:@brettz9/es6"`    | `"error"` |
| `"plugin:@brettz9/es2015"` | `"error"` |

# 参照リンク

- [official document](https://github.com/brettz9/eslint-plugin/blob/main/docs/rules/no-useless-rest-spread.md)
- [rule source](https://github.com/brettz9/eslint-plugin/blob/main/lib/rules/no-useless-rest-spread.js)
- [test source](https://github.com/brettz9/eslint-plugin/blob/main/tests/lib/rules/no-useless-rest-spread.js)
