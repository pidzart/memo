# @babel/no-invalid-this

`no-invalid-this` の拡張
`this` が `undefined` の可能性があるときは禁止する
クラスフィールド構文とプライベートプロパティに対応する

## options

- `object`
  - `"capIsConstructor": boolean`
    デフォルト: `true`
    大文字で始まる関数はコンストラクターとして検証する

## correct example

## incorrect example

## config settings

| extends | value |
| ------- | ----- |

## references

- [`no-invalid-this` rule](../../eslint/no-invalid-this.md)
- [official document](https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin)
- [rule source](https://github.com/babel/babel/blob/main/eslint/babel-eslint-plugin/src/rules/no-invalid-this.cjs)
- [test source](https://github.com/babel/babel/blob/main/eslint/babel-eslint-plugin/test/rules/no-invalid-this.js)
