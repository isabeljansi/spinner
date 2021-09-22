process.stdout.write('hello from spinner1.js... \rheyyy\n');

const printWordsForEvery1Sec = (actions) => {
  for (let i = 0; i < actions.length; i++) {
    waitTime = 100 * (i + 1)
    setTimeout(() => {
      process.stdout.write(`${actions[i]}`);
    }, waitTime)
  }
}

const printCursor = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\n'];
printWordsForEvery1Sec(printCursor);