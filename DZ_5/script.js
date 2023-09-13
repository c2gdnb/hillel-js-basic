let a = +prompt("Введіть число а");
let b = 0;
let h = 0;
let sumOfFactorials = 0;

do {
  b = +prompt("Введіть число b");
} while (a > b);

do {
  h = +prompt("Введіть число h");
} while (h === 0);

if (!(a > b)) {
  while (a <= b) {
    let factorialValue = 1;
    let factorial = 1;
    while (factorialValue <= a) {
      factorial *= factorialValue;
      factorialValue++;
    }
    a += h;
    sumOfFactorials += factorial;
  }
}

alert(`Сума факторіалів: ${sumOfFactorials}`);
