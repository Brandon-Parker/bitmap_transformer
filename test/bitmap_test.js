const chai = require('chai');
const expect = chai.expect;
// const bitmapCli = require(__dirname + '/bin/bitmap');
var chaiFiles = require('chai-files');
var file = chaiFiles.file;
chai.use(chaiFiles);

const bitmap = require(__dirname + '/../lib/read');
var image = process.argv[2] || 'palette-bitmap.bmp';

const fs = require('fs');

describe('Is new file created', () => {
  it('filename_new.bmp should exist', () => {
    bitmap.checkInputs();
    process.nextTick(() => {
      expect(file(bitmap.newBMP)).to.exist;
    });
  });

  it('filename.bmp data should not match filename_new.bmp data', (done) => {
    fs.readFile(__dirname + '/../' + image, (err, data) => {
      if (err) console.log(err);
      fs.readFile(__dirname + '/../' + bitmap.newBMP, (err, newData) => {
        if (err) console.log(err);
        expect(newData).to.not.eql(data);
        done();
      });
    });
  });

});
