function sumOddNum(a, b) {
  let result = 0;
  for(let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      result += i;
    }
  }
  return result;
}

console.log(sumOddNum(10, 50));
console.log(sumOddNum(1, 100));