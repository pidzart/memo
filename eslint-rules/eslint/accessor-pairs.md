# accessor-pairs

[Home](../../index.md) >
[eslint ルール](../index.md) >
[eslint](../eslint.md) >
accessor-pairs

オブジェクトリテラル、プロパティ記述子、クラス宣言、クラス式で一つの識別子にセッターとゲッターをどちらも定義することを要求します。

# オプション

一つのオブジェクトオプションがあります

- `object`
  - `"setWithoutGet": boolean`
    デフォルト: `true`
    ゲッターのないセッターを禁止します。
  - `"getWithoutSet": boolean`
    デフォルト: `false`
    セッターのないゲッターを禁止します。
  - `"enforceForClassMembers": boolean`
    デフォルト: `true`
    クラス宣言、クラス式にこのルールを適用します。

# 正しい例

```javascript
/* eslint accessor-pairs: "error" */

// セッターとゲッターのあるオブジェクトリテラル
var foo = {
  set value(newValue) {
    this._value = newValue;
  },
  get value() {
    return this._value;
  },
};

// ゲッターだけがあるアクセサー記述子
Object.defineProperty(obj, "value", {
  get() {
    return 42;
  },
});
```

```javascript
/* eslint accessor-pairs: ["error", { "setWithoutGet": false, "getWithoutSet": true }] */

// セッターとゲッターのあるクラス宣言
class FooClass {
  set value(newValue) {
    console.log(newValue);
  }
  get value() {
    return 42;
  }
}

// セッターだけがあるクラス式
var BarClass = class {
  set value(newValue) {
    console.log(newValue);
  }
};
```

```javascript
/* eslint accessor-pairs: ["error", { "enforceForClassMembers": false }] */

// ゲッターだけがあるクラス宣言
class FooClass {
  get value() {
    return 42;
  }
}

// セッターだけがあるクラス式
var BarClass = class {
  set value(newValue) {
    console.log(newValue);
  }
};
```

# 間違った例

```javascript
/* eslint accessor-pairs: "error" */

// セッターだけがあるオブジェクトリテラル
var foo = {
  set value(newValue) {
    this._value = newValue;
  },
};
```

```javascript
/* eslint accessor-pairs: ["error", { "setWithoutGet": false, "getWithoutSet": true }] */

// ゲッターだけがあるアクセサー記述子
Object.defineProperty(obj, "value", {
  get() {
    return 42;
  },
});
```

# コンフィグ

| extends        | value     |
| -------------- | --------- |
| `"eslint:all"` | `"error"` |

# 参照リンク

- [official document](https://eslint.org/docs/latest/rules/accessor-pairs)
- [rule source](https://github.com/eslint/eslint/blob/main/lib/rules/accessor-pairs.js)
- [test source](https://github.com/eslint/eslint/blob/main/tests/lib/rules/accessor-pairs.js)
