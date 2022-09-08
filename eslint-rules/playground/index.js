/* eslint @brettz9/no-this-in-static: "error" */

class Foo {
  static foo() {
    this.foo;
  }
}
