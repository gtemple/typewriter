const sentence = "hello there from lighthouse labs";

s = 50

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, s)
  s += 50
}

setTimeout(() => {
  console.log('')
}, s);
