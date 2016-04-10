exports.extract = extract;

function extract(rawData) {
  console.log('this data was passed into the transform function', rawData);
  var extractedData = {};
  extractedData.header = rawData.toString('utf8', 0, 2);
  console.log('This is the length', rawData.length);
  extractedData.size = rawData.readUInt32LE(2);
  extractedData.offset = rawData.readUInt32LE(10);
  extractedData.width = rawData.readUInt32LE(18);
  extractedData.height = rawData.readUInt32LE(22);
  extractedData.dibHeader = rawData.readUInt32LE(14);
  extractedData.colorPalette = rawData.readUInt32LE(54);
  extractedData.paletteLength = extractedData.offset - 54;
  extractedData.paletteColors = [];
  debugger;

  for (var i = 0; i < extractedData.paletteLength; i+=4) {
    var colorOffset = 54 + i;
    extractedData.paletteColors.push({
      blue: rawData.readUInt8(colorOffset),
      green: rawData.readUInt8(colorOffset + 1),
      red: rawData.readUInt8(colorOffset + 2),
      alpha: rawData.readUInt8(colorOffset + 3)
    });
  }

  // extractedData.b = rawData.readUInt8(54);
  // extractedData.g = rawData.readUInt8(55);
  // extractedData.r = rawData.readUInt8(56);
  // extractedData.a = rawData.readUInt8(57);
  // extractedData.b2 = rawData.readUInt8(58);
  // extractedData.g2 = rawData.readUInt8(59);
  // extractedData.r2 = rawData.readUInt8(60);
  // extractedData.a2 = rawData.readUInt8(61);
  // extractedData.b3 = rawData.readUInt8(62);
  // extractedData.g3 = rawData.readUInt8(63);
  // extractedData.r3 = rawData.readUInt8(64);
  // extractedData.a3 = rawData.readUInt8(65);



  debugger;
};

// buf.readIntLE(0, 6).toString(16);
// extractedData.header = Buffer.from('726027586', 'hex');
// debugger;
// console.log(extractedData.header.toString());
