const fs = require('fs');
const image = __dirname + '/../palette-bitmap';
const transform = require(__dirname + '/transform');

function readBMP(originalImage) {
    fs.readFile(originalImage, (err, data) => {
      if (err) return console.log(err);
      console.log(data);
      writeBMP(transform.extract(data), image + '_new.bmp');
    });
}
// readBMP(image + '.bmp');

function writeBMP(data, newFileName) {
  fs.writeFile(newFileName, data, (err) => {
    if (err) return console.log(err);
    console.log('It\'s saved!');
  });
}

exports.readBMP = readBMP;
exports.writeBMP = writeBMP;
exports.imagePath = image;
