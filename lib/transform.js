exports.extract = extract;

function extract(rawData) {
  var extractedData = {};
  extractedData.header = rawData.toString('utf8', 0, 2);
  extractedData.size = rawData.readUInt32LE(2);
  extractedData.offset = rawData.readUInt32LE(10);
  extractedData.width = rawData.readUInt32LE(18);
  extractedData.height = rawData.readUInt32LE(22);
  extractedData.dibHeader = rawData.readUInt32LE(14);
  extractedData.colorDepth = rawData.readUInt32LE(28);

  extractedData.colorPalette = rawData.readUInt32LE(54);
  extractedData.paletteLength = extractedData.offset - 54;
  extractedData.paletteColors = [];

  for (var i = 0; i < extractedData.paletteLength; i += 4) {
    var colorOffset = 54 + i;
    extractedData.paletteColors.push({
      blue: rawData.readUInt8(colorOffset),
      green: rawData.readUInt8(colorOffset + 1),
      red: rawData.readUInt8(colorOffset + 2),
      alpha: rawData.readUInt8(colorOffset + 3)
    });
  }

  extractedData.invertedPalette = extractedData.paletteColors.map((color) => {
    var invertedColors = {
      blue: 255 - color.blue,
      green: 255 - color.green,
      red: 255 - color.red,
      alpha: color.alpha
    };
    return invertedColors;
  });
  for (var j = 0; j < extractedData.invertedPalette.length; j++) {
    var bufOffset = 54 + j * 4;
    var currentColor = extractedData.invertedPalette[j];
    rawData.writeUInt8(currentColor.blue, bufOffset);
    rawData.writeUInt8(currentColor.green, bufOffset + 1);
    rawData.writeUInt8(currentColor.red, bufOffset + 2);
  }
  return rawData;
}
