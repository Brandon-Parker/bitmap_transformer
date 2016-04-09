const fs = require('fs');
const image = __dirname + '/../palette-bitmap.bmp';

function readBMP(image) {
    fs.readFile(image, (err, data) => {
        if (err) return console.log(err);
        console.log(data);
    });
}
readBMP(image);
