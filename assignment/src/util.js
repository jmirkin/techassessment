export function add(a, b) {
  return a + b;
}

export function findAll(match, array) {}

export function objectIs(a, b) {}

export function add3TimesWithInterval(a) {
  for (var i = 0; i < 3; i++) {
    // eslint-disable-next-line
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
