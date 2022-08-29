# `var` 宣言

```javascript
var foo;

var foo = 42;

var foo = 42,
  bar;
```

# `let` 宣言

```javascript
let foo;

let foo = 42;

let foo = 42,
  bar;
```

# `const` 宣言

```javascript
const foo = 42;

const foo = 42,
  bar = 84;
```

# 関数宣言

```javascript
function foo(arg) {
  var args = arguments;
  var funcThis = this;
  return arg;
}
```

# `class` 宣言

```javascript
class Foo {
  fooPublic;
  #fooPrivate;
  constructor() {}
  foo() {}
  set value(v) {}
  get value() {}

  static barPublic;
  static #barPrivate;
  static {}
  static bar() {}
  static set sValue(v) {}
  static get sValue() {}
}
```

# `return` 文

```javascript
return "foo";
```

# `if` 文

```javascript
if (isTrue) {
  do1();
} else if (isFalse) {
  do2();
} else {
  do3();
}
```

# `switch` 文

```javascript
switch (foo) {
  case "case1":
    do1();

  case "case2":
  case "case3":
    do2();

  default:
    do3();
}
```

# `for` 文

```javascript
for (var i = 0; i < 10; i++) {
  foo(i);
}

for (var key in obj) {
  foo(obj[key]);
}

for (var item of array) {
  foo(item);
}

for await (var item of array) {
  foo(item);
}
```

# `while` 文

```javascript
while (isTrue) {
  isTrue = foo();
}
```

# `do-while` 文

```javascript
do {
  isTrue = foo();
} while (isTrue);
```

# `break` 文

```javascript
break;
break foo;
```

# `continue` 文

```javascript
continue;
continue foo;
```

# `try` 文

```javascript
try {
  doSomeError();
} catch (error) {
  recover(error);
} finally {
  release();
}
```

# `throw` 文

```javascript
throw new Error("unexpected character");
```

# 真理値リテラル

```javascript
true;
false;
```

# 数値リテラル

```javascript
200_000;
0.2;
0xff_12_34_56;
0b0101_0101;
0o775_123;
```

# 文字列リテラル

```javascript
"abc";
// prettier-ignore
'def';
```

# テンプレートリテラル

```javascript
`abc ${foo}`;
`aaa
    bbb`;
```

# 正規表現リテラル

```javascript
/abc/g;
```

# 代入演算子

```javascript
foo = 10;
bar += "cat";
```

#
