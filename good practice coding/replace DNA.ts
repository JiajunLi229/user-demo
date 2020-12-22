function dnaStrand(dna: string) {
  return dna.replace(/./g, (c)=>({A:'T',T:'A',G:'C',C:'G'})[c]);
}

// /./后加g表示全局匹配，不加的话就只会匹配到第一个
// 可以利用JS object[key]的特性来写匹配，比如string的匹配  (string) => ({string: "hello"}[string]);