/* eslint accessor-pairs: "error" */

// Callback function with return
var a = {
  get foo() {
    return (this._foo = value);
  },
  set foo(value) {
    this._foo = value;
  },

  bar: 42,
};
