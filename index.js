function countdown(callback) {
  window.setTimeout(() => {
    return callback();
  }, 2000);
}

function createMultiplier(multiplierValue) {
  return function(val) { return multiplierValue * val }
}

let doubler = createMultiplier(2);
let tripler = createMultiplier(3);

function multiplier(a, b) {
  return a * b;
}
let doublerWithBind = multiplier.bind(null, 2);
let triplerWithBind = multiplier.bind(null, 3);
