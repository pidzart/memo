/* eslint array-func/prefer-flat: "error" */

[].concat(...array);
array.reduce((x, y) => x.concat(y), []);
