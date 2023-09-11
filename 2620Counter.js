/** @format */

function createCounter(n) {
  let current = n;
  return function () {
    return current++;
  };
}

const counter = createCounter(10);

const results = [];

results.push(counter());
results.push(counter());
results.push(counter());

console.log(results);
