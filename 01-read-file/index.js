const fs = require('fs');
const path = require('path');
const data = new fs.ReadStream(path.join(__dirname, 'text.txt'), { encoding: 'utf-8' });

data.on('readable', function () {
  const text = data.read();
  if (text != null) console.log(text);
});