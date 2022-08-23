# @babel/new-cap

`new-cap` の拡張
`new` 演算子で使う関数の先頭を大文字に強制する
デコレータ名の先頭を大文字に強制する

## options

- `object`
  - `"newIsCap": boolean`
    デフォルト: `true`
    `new` 演算子で使う関数は先頭を大文字に強制する
  - `"capIsNew": boolean`
    デフォルト: `true`
    先頭が大文字の関数は `new` 演算子を強制する
  - `"newIsCapExceptions": string[]`
    デフォルト: `[]`
    指定した関数名は先頭が小文字の `new` 演算子を許可する
  - `"newIsCapExceptionPattern": string`
    デフォルト: `""`
    パターンにマッチした関数名は先頭が小文字の `new` 演算子を許可する
  - `"capIsNewExceptions": string[]`
    デフォルト: `[]`
    指定した関数名は `new` 演算子でない先頭が大文字を許可する
  - `"capIsNewExceptionPattern": string`
    デフォルト: `""`
    パターンにマッチした関数名は `new` 演算子でない先頭が大文字を許可する
  - `"properties": boolean`
    デフォルト: `true`
    オブジェクトプロパティを検証する

## correct example

## incorrect example

## config settings

| extends | value |
| ------- | ----- |

## references

- [`new-cap` rule](../../eslint/new-cap.md)
- [official document](https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin)
- [rule source](https://github.com/babel/babel/blob/main/eslint/babel-eslint-plugin/src/rules/new-cap.cjs)
- [test source](https://github.com/babel/babel/blob/main/eslint/babel-eslint-plugin/test/rules/new-cap.js)
