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
