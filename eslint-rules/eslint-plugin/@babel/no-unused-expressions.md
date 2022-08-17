# @babel/no-unused-expressions

`no-unused-expressions` の拡張
未使用の式を禁止する
`do` 式とオプショナル関数呼び出しに対応する

## options

- `object`
  - `"allowShortCircuit": boolean`
    デフォルト: `false`
    短絡評価のための未使用の式を許可する
  - `"allowTernary": boolean`
    デフォルト: `false`
    短絡評価のための未使用の三項演算子を許可する
  - `"allowTaggedTemplates": boolean`
    デフォルト: `false`
    副作用のための未使用のタグ付きテンプレートリテラルを許可する
  - `"enforceForJSX": boolean`
    デフォルト: `false`
    JSX 式を検証する

## correct example

## incorrect example

## config settings

| extends | value |
| ------- | ----- |

## references

- [`no-unused-expressions` rule](../../eslint/no-unused-expressions.md)
- [official document](https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin)
- [rule source](https://github.com/babel/babel/blob/main/eslint/babel-eslint-plugin/src/rules/no-unused-expressions.cjs)
- [test source](https://github.com/babel/babel/blob/main/eslint/babel-eslint-plugin/test/rules/no-unused-expressions.js)
