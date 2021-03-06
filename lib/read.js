const fs = require('fs');
const transform = require(__dirname + '/transform');
const newBMP = process.argv[3] || 'new.bmp';
var image;

function checkInputs() {
  image = process.argv[2] || 'palette-bitmap.bmp';
  fs.access(image, fs.R_OK || fs.W_OK, (err) => {
    if (err) return console.log('No such file exsits. Try palette-bitmap.bmp or varioussizebitmap.bmp');
    readBMP(image);
  });
}

function readBMP(originalImage) {
    fs.readFile(originalImage, (err, data) => {
      if (err) return console.log(err);
      writeBMP(transform.extract(data), newBMP);
    });
}

function writeBMP(data, newFileName) {
  fs.writeFile(newFileName, data, (err) => {
    if (err) return console.log(err);
    console.log('New bitmap created!');
  });
}

function deleteBMP(imageToDelete) {
  fs.unlink(imageToDelete, (err) => {
    if (err) return console.log(err);
    console.log('File was deleted');
  });
}

exports.readBMP = readBMP;
exports.checkInputs = checkInputs;
exports.writeBMP = writeBMP;
exports.imagePath = image;
exports.newBMP = newBMP;
exports.deleteBMP = deleteBMP;
