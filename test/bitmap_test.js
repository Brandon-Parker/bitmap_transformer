const chai = require('chai');
const expect = chai.expect;
// const bitmapCli = require(__dirname + '/bin/bitmap');
var chaiFiles = require('chai-files');
var file = chaiFiles.file;
chai.use(chaiFiles);

const bitmap = require(__dirname + '/../lib/read');

describe('Is new file created', () => {
  it('filename_new.bmp should exist', () => {
    bitmap.readBMP(bitmap.imagePath + '.bmp');
    process.nextTick(() => {
      expect(file('palette-bitmap_new.bmp')).to.exist;
    });
  });

  it('filename.bmp data should not match filename_new.bmp data', () => {

  });
});
