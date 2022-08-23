# array-callback-return

配列の `map` 系メソッドのコールバックで `return` を強制する

## options

- `object`
  - `"allowImplicit" : boolean`
    デフォルト: `false`
    暗黙の `return undefined` を許可する
  - `"checkForEach" : boolean`
    デフォルト: `false`
    `forEach` メソッドのコールバックで `return` を禁止する

## correct example

```javascript
/* eslint array-callback-return: "error" */

// Callback function with return
array.map(function (item) {
  return item + 3;
});

// Callback function with return on multiple paths
array.filter(function (item) {
  if (item < 5) {
    return item === 3;
  } else {
    return item > 8;
  }
});

// Callback arrow function with return
array.reduce((prev, item) => {
  return prev + item;
});

// Callback function with return in the forEach function
array.forEach(function (item) {
  return item + 3;
});

// Callback function without return in the forEach function
array.forEach(function (item) {
  console.log(item + 3);
});
```

```javascript
/* eslint array-callback-return: ["error", { "allowImplicit": true }] */

// Callback function with implicit undefined return
array.filter(function (item) {
  if (item < 5) {
    return item === 3;
  } else {
    return;
  }
});
```

```javascript
/* eslint array-callback-return: ["error", { "checkForEach": true }] */

// Callback function without return in the forEach function
array.forEach(function (item) {
  console.log(item + 3);
});
```

## incorrect example

```javascript
/* eslint array-callback-return: "error" */

// Callback function without return
array.map(function (item) {
  console.log(item + 3);
});

// Callback function without return on one of multiple paths
array.filter(function (item) {
  if (item < 5) {
    return item === 3;
  } else {
    console.log(item - 3);
  }
});
```

```javascript
/* eslint array-callback-return: ["error", { "allowImplicit": true }] */

// Callback function without return on one of multiple paths
array.map(function (item) {
  if (item < 5) {
    return;
  } else {
    console.log(item - 3);
  }
});
```

```javascript
/* eslint array-callback-return: ["error", { "checkForEach": true }] */

// Callback function with return in the forEach function
array.forEach(function (item) {
  return item + 3;
});
```

## config settings

| extends      | value   |
| ------------ | ------- |
| `eslint:all` | `error` |

## references

- [official document](https://eslint.org/docs/latest/rules/array-callback-return)
- [rule source](https://github.com/eslint/eslint/blob/main/lib/rules/array-callback-return.js)
- [test source](https://github.com/eslint/eslint/blob/main/tests/lib/rules/array-callback-return.js)
