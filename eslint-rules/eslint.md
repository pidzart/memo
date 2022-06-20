# eslint

[npm] [github] [web]
version: 8.18.0

[npm]: https://www.npmjs.com/package/eslint
[github]: https://github.com/eslint/eslint
[web]: https://eslint.org/

## array-callback-return

配列の `map` 系メソッドのコールバックで `return` を強制する

- `object`
  - `"allowImplicit" : boolean`
    デフォルト: `false`
    暗黙の `return undefined` を許可する
  - `"checkForEach" : boolean`
    デフォルト: `false`
    `forEach` メソッドのコールバックで `return` を禁止する

| extends      | value   |
| ------------ | ------- |
| `eslint:all` | `error` |

## constructor-super

派生クラスのコンストラクターで `super()` の呼び出しを強制する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## for-direction

`for` ループで条件式と更新式の方向を合わせるように強制する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## getter-return

クラスやオブジェクトのゲッター関数で `retrun` を強制する

- `object`
  - `"allowImplicit": boolean`
    デフォルト: `false`
    暗黙の `return undefined` を許可する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-async-promise-executor

`Promise` コンストラクターの実行関数に非同期関数を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-await-in-loop

ループの中で `await` を禁止する

| extends      | value   |
| ------------ | ------- |
| `eslint:all` | `error` |

## no-class-assign

クラス宣言した変数への再代入を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-compare-neg-zero

同値比較演算子 `===` で `-0` と比較を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-cond-assign

`if` `for` `while` 文の条件式で代入を禁止する

- `"except-parens" | "always"`
  デフォルト: `"except-parens"`
  - `"except-parens"`: 代入を `()` で囲った場合に許可する
  - `"always"`: 常に代入を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-const-assign

`const` 宣言した変数に再代入を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-constant-binary-expression

代入と `||` `&&` `??` 演算子で常に `true` `false` に評価される式を禁止する

| extends      | value   |
| ------------ | ------- |
| `eslint:all` | `error` |

## no-constant-condition

`if` 文と三項演算子の条件式で常に `true` `false` に評価される式を禁止する

- `object`
  - `"checkLoops": boolean`
    デフォルト: `true`
    `for` `while` 文の条件式で常に `true` `false` に評価される式を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-constructor-return

コンストラクターで値の `return` を禁止する

| extends      | value   |
| ------------ | ------- |
| `eslint:all` | `error` |

## no-control-regex

正規表現で `0x00` から `0x1F` までの文字コードエスケープを禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-debugger

`debugger` 文を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-dupe-args

`function` 定義で引数の変数名の重複を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-dupe-class-members

クラス宣言でメンバー名の重複を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-dupe-else-if

`if else if` 文で条件式の重複を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-dupe-keys

オブジェクトリテラルでキーの重複を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-duplicate-case

`switch` 文で `case` 節の重複を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-duplicate-imports

`import` 文で同じモジュールからのインポートを禁止する

- `object`
  - `"includeExports": boolean`
    デフォルト: `false`
    モジュールの重複に `export-from` を含める

| extends      | value   |
| ------------ | ------- |
| `eslint:all` | `error` |

## no-empty-character-class

正規表現で空の文字クラス `[]` を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-empty-pattern

デストラクチャーで空のパターンを禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-ex-assign

`catch` 文で例外の変数に再代入を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-fallthrough

`switch` 文の `case` 節でフォールスルーを禁止する

- `object`
  - `"commentPattern": string`
    デフォルト: `"falls?\s?through"`
    パターンにマッチするコメントがある場合はフォールスルーを許可する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-func-assign

関数宣言した変数に再代入を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-import-assign

インポートした変数に再代入を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-inner-declarations

`var` 宣言と関数宣言をプログラムと関数のルート以外で禁止する

- `"functions" | "both"`
  デフォルト: `"functions"`
  - `"functions"`: 関数宣言のみを禁止する
  - `"both"`: `var` 宣言と関数宣言を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-invalid-regexp

`RegExp` コンストラクターで不正な正規表現を禁止する

- `object`
  - `"allowConstructorFlags": string[]`
    デフォルト: `[]`
    コンストラクターの第二引数で許可するフラグのリスト

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-irregular-whitespace

タブとスペース以外の空白文字を禁止する

- `object`
  - `"skipStrings": boolean`
    デフォルト: `true`
    文字列リテラルで他の空白文字を許可する
  - `"skipComments": boolean`
    デフォルト: `false`
    コメントで他の空白文字を許可する
  - `"skipRegExps": boolean`
    デフォルト: `false`
    正規表現リテラルで他の空白文字を許可する
  - `"skipTemplates": boolean`
    デフォルト: `false`
    テンプレートリテラルで他の空白文字を許可する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-loss-of-precision

倍精度浮動小数点数で精度を失う数値リテラルを禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-misleading-character-class

正規表現の文字クラスで複数のコードポイントでできた文字を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-new-symbol

`Symbol` オブジェクトは `new` 演算子を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-obj-calls

組み込みオブジェクトのうち `Math` `JSON` `Reflect` `Atomics` を関数として呼び出しを禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-promise-executor-return

`Promise` コンストラクターの関数で `return` を禁止する

| extends      | value   |
| ------------ | ------- |
| `eslint:all` | `error` |

## no-prototype-builtins

`Object.prototype` のメソッドをインスタンスのメソッドとして呼び出しを禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-self-assign

同じ変数に再代入を禁止する

- `object`
  - `"props": boolean`
    デフォルト: `true`
    同じオブジェクトの同じプロパティに再代入を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-self-compare

同じ変数の比較を禁止する

| extends      | value   |
| ------------ | ------- |
| `eslint:all` | `error` |

## no-setter-return

セッター関数で `return` を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-sparse-arrays

配列リテラルで値の省略を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-template-curly-in-string

文字列リテラルでテンプレートリテラルのプレークスホルダー記法のようなものを禁止する

| extends      | value   |
| ------------ | ------- |
| `eslint:all` | `error` |

## no-this-before-super

コンストラクターで `super()` を呼び出す前に `this` `super` キーワードを禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-undef

宣言されていない変数を禁止する

- `object`
  - `"typeof": boolean`
    デフォルト: `false`
    `typeof` 演算子で宣言されていない変数を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-unexpected-multiline

前の行がセミコロンなしで終わるとき行頭の `(` `[` `` ` `` `/` を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-unmodified-loop-condition

ループ内で条件式の変数を変更を強制する

| extends      | value   |
| ------------ | ------- |
| `eslint:all` | `error` |

## no-unreachable

`return` `throw` `continue` `break` 文の後のコードを禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-unreachable-loop

一回までしか実行しないループを禁止する

- `object`
  - `"ignore": ("WhileStatement" | "DoWhileStatement" | "ForStatement" | "ForInStatement" | "ForOfStatement")[]`
    デフォルト: `[]`
    指定されたループ文で許可する

| extends      | value   |
| ------------ | ------- |
| `eslint:all` | `error` |

## no-unsafe-finally

`finally` ブロックで `return` `throw` `continue` `break`文を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-unsafe-negation

`in` `instanceof` 演算子の左辺で `!` 演算子を禁止する

- `object`
  - `"enforceForOrderingRelations": boolean`
    デフォルト: `false`
    `<` `>` `<=` `>=` 演算子の左辺で `!` 演算子を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-unsafe-optional-chaining

`undefined` が許可されていない式で `?.` 演算子を禁止する

- `object`
  - `"disallowArithmeticOperators": boolean`
    デフォルト: `false`
    算術演算子の式で `?.` 演算子を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-unused-private-class-members

使っていないプライベートメンバーを禁止する

| extends      | value   |
| ------------ | ------- |
| `eslint:all` | `error` |

## no-unused-vars

使っていない変数を禁止する

- `"all" | "local" | object`
  文字列の場合は `"vars"` オプションになる
  - `"vars": "all" | "local"`
    デフォルト: `"all"`
    - `"all"`: グローバル変数を含めて検証する
    - `"local"`: ローカル変数のみ検証する
  - `"varsIgnorePattern": string`
    デフォルト: `""`
    パターンにマッチした変数は許可する
  - `"args": "after-used" | "all" | "none"`
    デフォルト: `"after-used"`
    - `"after-used"`: 使われた引数より後の引数のみ検証する
    - `"all"`: すべての引数を検証する
    - `"none"`: 引数を検証しない
  - `"ignoreRestSiblings": boolean`
    デフォルト: `false`
    残余パターンの兄弟要素を検証する
  - `"argsIgnorePattern": string`
    デフォルト: `""`
    パターンにマッチした引数は許可する
  - `"destructuredArrayIgnorePattern": string`
    デフォルト: `""`
    パターンにマッチした配列の分割代入パターンは許可する
  - `"caughtErrors": "none" | "all"`
    デフォルト: `"none"`
    - `"none"`: `catch` 文の引数を検証しない
    - `"all"`: すべての引数を検証する
  - `"caughtErrorsIgnorePattern": string`
    デフォルト: `""`
    パターンにマッチした引数は許可する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## no-use-before-define

変数を定義する前に使うことを禁止する

- `object`
  - `"functions": boolean`
    デフォルト: `true`
    関数宣言を検証する
  - `"classes": boolean`
    デフォルト: `true`
    クラス宣言を検証する
  - `"variables": boolean`
    デフォルト: `true`
    変数宣言を検証する
  - `"allowNamedExports": boolean`
    デフォルト: `false`
    定義する前に `export` で使うことを許可する

| extends      | value   |
| ------------ | ------- |
| `eslint:all` | `error` |

## no-useless-backreference

正規表現で常に空になる後方参照を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## require-atomic-updates

`await` `yield` を使った変更はアトミック(不可分な操作)を強制する

| extends      | value   |
| ------------ | ------- |
| `eslint:all` | `error` |

## use-isnan

変数が `NaN` かどうか調べるために `isNaN()` 関数の使用を強制する

- `object`
  - `"enforceForSwitchCase": boolean`
    デフォルト: `true`
    `switch` 文で `switch (NaN)` `case NaN` を禁止する
  - `"enforceForIndexOf": boolean`
    デフォルト: `false`
    配列のメソッドで `indexOf(NaN)` `lastIndexOf(NaN)` を禁止する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## valid-typeof

`typeof` 演算子は `"undefined"` `"object"` `"boolean"` `"number"` `"string"` `"function"` `"symbol"` `"bigint"` との比較に強制する

- `object`
  - `"requireStringLiterals": boolean`
    デフォルト: `false`
    `typeof` 演算子との比較は文字列リテラルか別の `typeof` 演算子に強制する

| extends              | value   |
| -------------------- | ------- |
| `eslint:all`         | `error` |
| `eslint:recommended` | `error` |

## accessor-pairs

ゲッター関数とセッター関数が対になるように強制する

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

| extends      | value   |
| -------------| ------- |
| `eslint:all` | `error` |

## arrow-body-style

アロー関数の本体にブロック文を強制する

- `"always" | "as-needed" | "never"`
  - `"always"`: 常に強制する
  - `"as-needed"`: 省略できる場合は禁止する
  - `"never"`: 常に禁止する
- `object`
  - `"requireReturnForObjectLiteral": boolean`
    デフォルト: `false`
    `"as-needed"` で戻り値がオブジェクトリテラルの場合に強制する

| extends      | value   |
| ------------ | ------- |
| `eslint:all` | `error` |

## block-scoped-var

ブロック文の中で `var` 宣言した変数を外側で使用を禁止する

| extends      | value   |
| -------------| ------- |
| `eslint:all` | `error` |

## camelcase

キャメルケースを強制する

- `object`
  - `"properties": "always" | "never"`
    デフォルト: `"always"`
    - `"always"`: プロパティ名を検証する
    - `"never"`: プロパティ名を検証しない
  - `"ignoreDestructuring": boolean`
    デフォルト: `false`
    分割代入の変数名にスネークケースを許可する
  - `"ignoreImports": boolean`
    デフォルト: `false`
    名前付きインポートの変数名にスネークケースを許可する
  - `"ignoreGlobals": boolean`
    デフォルト: `false`
    グローバル変数の変数名にスネークケースを許可する
  - `"allow": string[]`
    デフォルト: `[]`
    パターンにマッチする変数名を許可する

| extends      | value   |
| -------------| ------- |
| `eslint:all` | `error` |

## capitalized-comments

最初の文字が小文字で始まるコメントを禁止する
設定コメントとURLは許可する

- `"always" | "never"`
  - `"always"`: 小文字を禁止する
  - `"never"`: 大文字を禁止する
- `object`
  - `"ignorePattern": string`
    デフォルト: `false`
    先頭の単語がパターンにマッチするコメントを許可する
  - `"ignoreInlineComments": boolean`
    デフォルト: `false`
    行の中にあるコメントを許可する
  - `"ignoreConsecutiveComments": boolean`
    デフォルト: `false`
    別の行コメントの直後にある行コメントを許可する
  - `"line": object`
    デフォルト: `{}`
    行コメントのみのルールを設定する
  - `"block": object`
    デフォルト: `{}`
    ブロックコメントのみのルールを設定する

| extends      | value   |
| -------------| ------- |
| `eslint:all` | `error` |

## class-methods-use-this

クラスで `this` を使わないメソッドを禁止する

- `object`
  - `"exceptMethods": string[]`
    デフォルト: `[]`
    指定したメソッド名を許可する
  - `"enforceForClassFields": boolean`
    デフォルト: `true`
    クラスフィールドの関数式を検証する

| extends      | value   |
| -------------| ------- |
| `eslint:all` | `error` |

## complexity

関数の循環的複雑度を制限する

- `number | object`
  数値の場合は `"max"` オプションになる
  - `"max": number`
    デフォルト: `20`
    許可する最大の循環的複雑度

| extends      | value   |
| -------------| ------- |
| `eslint:all` | `error` |

## consistent-return

同じ関数で `return` で値を指定するか統一する

- `object`
  - `"treatUndefinedAsUnspecified": boolean`
    デフォルト: `false`
    暗黙的な `return` と明示的な `return undefined` を同時に使用を許可する

| extends      | value   |
| -------------| ------- |
| `eslint:all` | `error` |

## consistent-this

現在の `this` をキャプチャーするためのエイリアス名を統一する

- `string`
  デフォルト: `"that"`
  指定されたエイリアス名を強制する

| extends      | value   |
| -------------| ------- |
| `eslint:all` | `error` |

## curly

`if` `else` `for` `while` 文でブロック文を強制する

- `"multi" | "multi-line" | "multi-or-nest"`
  - `"multi"`: 一つの文の場合は禁止する
  - `"multi-line"`: 一行の場合は許可する
  - `"multi-or-nest"`: ネストした文を除いた一つの文の場合は禁止する
- `"consistent"`
  一つの `if-else` 文でブロック文を使う場合は統一する

| extends      | value   |
| -------------| ------- |
| `eslint:all` | `error` |

## default-case

`switch` 文の中で `default` 節を強制する

- `object`
  - `"commentPattern": string`
    デフォルト: `"^no default$"`
    パターンにマッチするコメントは `default` 節が無いことを許可する

| extends      | value   |
| -------------| ------- |
| `eslint:all` | `error` |

## default-case-last

`switch` 文の中で `default` 節は最後に強制する

| extends      | value   |
| -------------| ------- |
| `eslint:all` | `error` |

## default-param-last

関数の引数リストでデフォルト引数は最後に書く

| extends      | value   |
| -------------| ------- |
| `eslint:all` | `error` |

## dot-notation

プロパティアクセサーでブラケット表記法 `[]` の代わりにドット表記法 `.` を強制する

- `object`
  - `"allowKeywords": boolean`
    デフォルト: `true`
    予約キーワードを許可する
  - `"allowPattern": string`
    デフォルト: `""`
    パターンにマッチしたプロパティ名を許可する

| extends      | value   |
| -------------| ------- |
| `eslint:all` | `error` |

## eqeqeq

等値比較で厳密同値演算子 `===` `!==` を強制する

- `"always" | "smart"`
  - `"always"`: 常に強制する
  - `"smart"`: リテラル同士、 `typeof` 演算子、 `null` との比較で許可する
- `object`
  - `"null": "always" | "never" | "ignore"`
    デフォルト: `"always"`
    一つ目のオプションが `"always"` の時に有効
    - `"always"`: `null` との比較で強制する
    - `"never"`: `null` との比較で禁止する
    - `"ignore"`: `null` との比較を検証しない

| extends      | value   |
| -------------| ------- |
| `eslint:all` | `error` |

## func-name-matching

名前付き `function` 式を変数に代入するとき関数名と変数名を揃えるよう強制する

- `"always" | "never" | object`
  デフォルト: `"always"`
  - `"always"`: 常に強制する
  - `"never"`: 常に禁止する
- `object`
  - `"considerPropertyDescriptor": boolean`
    デフォルト: `false`
    `Object.create` `Object.defineProperty` `Object.defineProperties` `Reflect.defineProperty` で検証する
  - `"includeCommonJSModuleExports": boolean`
    デフォルト: `false`
    `module.exports` で検証する

| extends      | value   |
| -------------| ------- |
| `eslint:all` | `error` |

## func-names

名前付き `function` 式を強制する

- `"always" | "as-needed" | "never"`
  デフォルト: `"always"`
  - `"always"`: 常に強制する
  - `"as-needed"`: 自動割り当てされない場合に強制する
  - `"never"`: 常に禁止する
- `object`
  - `"generators": "always" | "as-needed" | "never"`
    デフォルト: 一つ目のオプションと同じ
    - `"always"`: 常に強制する
    - `"as-needed"`: 自動割り当てされない場合に強制する
    - `"never"`: 常に禁止する

| extends      | value   |
| -------------| ------- |
| `eslint:all` | `error` |

## func-style

関数の定義を `function` 式に強制する

- `"expression" | "declaration"`
  デフォルト: `"expression"`
  - `"expression"`: `function` 式に強制する
  - `"declaration"`: `function` 宣言に強制する
- `object`
  - `"allowArrowFunctions": boolean`
    デフォルト: `false`
    アロー関数を許可する

| extends      | value   |
| -------------| ------- |
| `eslint:all` | `error` |

## grouped-accessor-pairs

同じプロパティのゲッター関数とセッター関数を隣り合わせる

## guard-for-in

`for-in` ループの中で `Object.prototype.hasOwnProperty` を使ってフィルタリングする

## id-denylist

指定した識別子を使わない

## id-length

識別子の文字数を制限する

## id-match

識別子を指定した正規表現にマッチするものにする

## init-declarations

変数を宣言した時に初期化する

## max-classes-per-file

１つのファイルでクラス定義の上限を設定する

## max-depth

コードブロックのネスト数の上限を設定する

## max-lines

１つのファイルで行数の上限を設定する

## max-lines-per-function

関数の中で行数の上限を設定する

## max-nested-callbacks

コールバック関数のネスト数の上限を設定する

## max-params

関数の引数の数の上限を設定する

## max-statements

関数の中で文の数の上限を設定する

## multiline-comment-style

複数行のコメントの書き方を統一する

## new-cap

`new` 演算子で使うコンストラクターは大文字で始める

## no-alert

`alert` `confirm` `prompt` 関数を使わない

## no-array-constructor

`Array` コンストラクターを使わない

## no-bitwise

ビット演算子を使わない

## no-caller

`arguments.caller` `arguments.callee` を使わない

## no-case-declarations

`switch` 文の `case` 節で変数の宣言をしない

## no-confusing-arrow

比較演算子と間違われるようなアロー演算子を使わない

## no-console

`console` オブジェクトを使わない

## no-continue

`continue` 文を使わない

## no-delete-var

`delete` 文で変数を削除しない

## no-div-regex

除算演算子と間違われるような正規表現リテラルを使わない

## no-else-return

`if` 文で `return` した後に `else` 文を使わない

## no-empty

空のブロック文を書かない

## no-empty-function

空の関数を書かない

## no-eq-null

`null` と比較 `== null` `!= null` をしない

## no-eval

`eval()` 関数を使わない

## no-extend-native

組み込みオブジェクトを拡張しない

## no-extra-bind

`this` を使わない関数やアロー関数で不要な `.bind()` メソッドの呼び出しをしない

## no-extra-boolean-cast

条件式で不要な論理型へ型変換をしない

## no-extra-label

ネストされていないループや `switch` 文で不要なラベルを使わない

## no-extra-semi

不要なセミコロンを書かない

## no-floating-decimal

小数は常にドットの前後ともに数字を書く

## no-global-assign

組み込みのグローバル変数に代入しない

## no-implicit-coercion

型変換のショートハンドを使わない

## no-implicit-globals

グローバル変数を宣言しない

## no-implied-eval

`eval()` のような関数 `setTimeout()` `setInterval()` `execScript()` を文字列を渡して使わない

## no-inline-comments

コードと同じ行にコメントを書かない

## no-invalid-this

`this` が `undefined` の可能性があるとき `this` を使わない

## no-iterator

オブジェクトの `__iterator__` プロパティを使わない

## no-label-var

変数とラベルを同じ名前にしない

## no-labels

ラベル付き文を使わない

## no-lone-blocks

不要なブロック文を使わない

## no-lonely-if

`else` ブロックの中で `if` 文１つだけ書くことをしない

## no-loop-func

ループの中で外側の変数を使った関数を定義しない

## no-magic-numbers

マジックナンバーを使わない

## no-mixed-operators

論理演算子 `&&` `||` を混ぜて使わない

## no-multi-assign

連鎖した代入をしない

## no-multi-str

`\` を使用した複数行の文字列を使わない

## no-negated-condition

`if-else` や三項演算子で否定的な条件式を使わない

## no-nested-ternary

三項演算子をネストしない

## no-new

代入しない所で `new` operators 演算子を使わない

## no-new-func

disallow `new` operators with the `Function` object

## no-new-object

disallow `Object` constructors

## no-new-wrappers

disallow `new` operators with the `String`, `Number`, and `Boolean` objects

## no-nonoctal-decimal-escape

disallow `\8` and `\9` escape sequences in string literals

## no-octal

disallow octal literals

## no-octal-escape

disallow octal escape sequences in string literals

## no-param-reassign

disallow reassigning `function` parameters

## no-plusplus

disallow the unary operators `++` and `--`

## no-proto

disallow the use of the `__proto__` property

## no-redeclare

disallow variable redeclaration

## no-regex-spaces

disallow multiple spaces in regular expressions

## no-restricted-exports

disallow specified names in exports

## no-restricted-globals

disallow specified global variables

## no-restricted-imports

disallow specified modules when loaded by `import`

## no-restricted-properties

disallow certain properties on certain objects

## no-restricted-syntax

disallow specified syntax

## no-return-assign

disallow assignment operators in `return` statements

## no-return-await

disallow unnecessary `return await`

## no-script-url

disallow `javascript:` urls

## no-sequences

disallow comma operators

## no-shadow

disallow variable declarations from shadowing variables declared in the outer scope

## no-shadow-restricted-names

disallow identifiers from shadowing restricted names

## no-ternary

disallow ternary operators

## no-throw-literal

disallow throwing literals as exceptions

## no-undef-init

disallow initializing variables to `undefined`

## no-undefined

disallow the use of `undefined` as an identifier

## no-underscore-dangle

disallow dangling underscores in identifiers

## no-unneeded-ternary

disallow ternary operators when simpler alternatives exist

## no-unused-expressions

disallow unused expressions

## no-unused-labels

disallow unused labels

## no-useless-call

disallow unnecessary calls to `.call()` and `.apply()`

## no-useless-catch

disallow unnecessary `catch` clauses

## no-useless-computed-key

disallow unnecessary computed property keys in objects and classes

## no-useless-concat

disallow unnecessary concatenation of literals or template literals

## no-useless-constructor

disallow unnecessary constructors

## no-useless-escape

disallow unnecessary escape characters

## no-useless-rename

disallow renaming import, export, and destructured assignments to the same name

## no-useless-return

disallow redundant return statements

## no-var

require `let` or `const` instead of `var`

## no-void

disallow `void` operators

## no-warning-comments

disallow specified warning terms in comments

## no-with

disallow `with` statements

## object-shorthand

require or disallow method and property shorthand syntax for object literals

## one-var

enforce variables to be declared either together or separately in functions

## one-var-declaration-per-line

require or disallow newlines around variable declarations

## operator-assignment

require or disallow assignment operator shorthand where possible

## prefer-arrow-callback

require using arrow functions for callbacks

## prefer-const

require `const` declarations for variables that are never reassigned after declared

## prefer-destructuring

require destructuring from arrays and/or objects

## prefer-exponentiation-operator

disallow the use of `Math.pow` in favor of the `**` operator

## prefer-named-capture-group

enforce using named capture group in regular expression

## prefer-numeric-literals

disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals

## prefer-object-has-own

disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`

## prefer-object-spread

disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.

## prefer-promise-reject-errors

require using Error objects as Promise rejection reasons

## prefer-regex-literals

disallow use of the `RegExp` constructor in favor of regular expression literals

## prefer-rest-params

require rest parameters instead of `arguments`

## prefer-spread

require spread operators instead of `.apply()`

## prefer-template

require template literals instead of string concatenation

## quote-props

require quotes around object literal property names

## radix

enforce the consistent use of the radix argument when using `parseInt()`

## require-await

disallow async functions which have no `await` expression

## require-unicode-regexp

enforce the use of `u` flag on RegExp

## require-yield

require generator functions to contain `yield`

## sort-imports

enforce sorted import declarations within modules

## sort-keys

require object keys to be sorted

## sort-vars

require variables within the same declaration block to be sorted

## spaced-comment

enforce consistent spacing after the `//` or `/*` in a comment

## strict

require or disallow strict mode directives

## symbol-description

require symbol descriptions

## vars-on-top

require `var` declarations be placed at the top of their containing scope

## yoda

require or disallow "Yoda" conditions
