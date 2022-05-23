const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

let question = '';

console.log(path.join(__dirname, 'text.txt'));
console.log('Введите текст: ');

fs.open(path.join(__dirname, 'text.txt'), 'a+', (err) => {
  if (err) throw err;
});

const readLine = readline.createInterface({ input, output })
readLine.on('line', (question) => {
  let str = question + '\n';

  if (question.trim() == 'exit') {
      console.log('Ввод данных завершен');
      readLine.close();
  } else {
      fs.appendFile(path.join(__dirname, 'text.txt'), str, (err) => {
        if (err) throw err;
      });
  }
});

readLine.on('SIGINT', () => {
  console.log('Ввод данных завершен');
  readLine.close();
});