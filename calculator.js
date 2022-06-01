function calculate(n) {
  if (n <= 2) {
    return 1;
  } else {
    let a = 0;
    let b = 0;
    let c = 1;
    for (let i = 2; i <= n; i++) {
      a = b;
      b = c;
      c = a + b;
    }
    return c;
  }
}
