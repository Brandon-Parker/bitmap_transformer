const fs = require('fs');
const image = __dirname + '/../palette-bitmap';

function readBMP(originalImage, cb) {
    fs.readFile(originalImage, (err, data) => {
        if (err) return console.log(err);
        console.log(data);
        checkIfExists(image + '_new.bmp');
        writeBMP(data, image + '_new.bmp');
        cb();
    });
}
// readBMP(image + '.bmp');

function writeBMP(data, newFileName) {
  fs.writeFile(newFileName, data, (err) => {
    if (err) return console.log(err);
    console.log('It\'s saved!');
  });
}

function deleteBMP(imageToDelete){
  fs.unlink(imageToDelete,(err) => {
    if (err) return console.log(err);
    console.log('File was deleted');
  });
}

function checkIfExists(image){
  fs.access(image, fs.R_OK | fs.W_OK, (err) => {
    if (err) return console.log('file does not exist');
    deleteBMP(image);
  })
}

exports.readBMP = readBMP;
exports.writeBMP = writeBMP;
exports.deleteBMP = deleteBMP;
exports.imagePath = image;
exports.checkIfExists = checkIfExists;
