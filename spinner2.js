const spinner = "|/-\\|/-\\|"
let ms = 100;
for (let symbol of spinner) {
  setTimeout(() => process.stdout.write("\r" + symbol), ms)
  ms += 200;
  if (ms === 1700) {
    setTimeout(() => process.stdout.write("\n"), ms + 1);
  }
}