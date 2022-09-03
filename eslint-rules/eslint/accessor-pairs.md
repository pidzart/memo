# accessor-pairs

memo > [eslint ルール](../index.md) > [eslint](../eslint.md) > accessor-pairs

ゲッター関数とセッター関数が対になるように強制する

## options

- `object`
  - `"setWithoutGet": boolean`
    デフォルト: `true`
    ゲッター関数のないセッター関数を禁止する
  - `"getWithoutSet": boolean`
    デフォルト: `false`
    セッター関数のないゲッター関数を禁止する
  - `"enforceForClassMembers": boolean`
    デフォルト: `true`
    クラス宣言を検証する

## correct example

```javascript
/* eslint accessor-pairs: "error" */

// Write sample code here
```

## incorrect example

```javascript
/* eslint accessor-pairs: "error" */

// Write sample code here
```

## config settings

| extends      | value   |
| ------------ | ------- |
| `eslint:all` | `error` |

## references

- [official document](https://eslint.org/docs/latest/rules/accessor-pairs)
- [rule source](https://github.com/eslint/eslint/blob/main/lib/rules/accessor-pairs.js)
- [test source](https://github.com/eslint/eslint/blob/main/tests/lib/rules/accessor-pairs.js)
