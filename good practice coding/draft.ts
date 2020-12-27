function findNb(m) {
  // m/3 = (1+n)*n/2
  for (let i = 0; i < 9999999999999999999999999; i++) {
    if (m === (1 + i) * i * 1.5) {
      return i;
    }
    return -1;
  }
}

console.log(findNb(4183059834009));