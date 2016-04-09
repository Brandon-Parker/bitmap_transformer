const chai = require('chai');
const expect = chai.expect;
// const bitmapCli = require(__dirname + '/bin/bitmap');
var chaiFiles = require('chai-files');
var file = chaiFiles.file;

chai.use(chaiFiles);

//read bitmap
//transform bitmap
//write bitmap

describe('Is new file created', () => {
  it('filename_new.bmp should not exist', () => {
    expect(file('palette-bitmap_new.bmp')).to.not.exist;
  });

  it('filename_new.bmp should exist', () => {
    expect(file('palette-bitmap_new')).to.exist;
  });

  it('filename.bmp data should not match filename_new.bmp data', () => {

  });

});
