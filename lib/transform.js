exports.extract = extract;

function invert(changedData, arrayOfColors, palette) {
  for (var i = 0; i < palette; i += 4) {
    var colorOffset = 54 + i;
    arrayOfColors.push({
      blue: 255 - changedData.readUInt8(colorOffset),
      green: 255 - changedData.readUInt8(colorOffset + 1),
      red: 255 - changedData.readUInt8(colorOffset + 2)
    });
  }
}

function grayscale(changedData, arrayOfColors, palette) {
  for (var i = 0; i < palette; i += 4) {
    var colorOffset = 54 + i;
    var b = changedData.readUInt8(colorOffset);
    var g = changedData.readUInt8(colorOffset + 1);
    var r = changedData.readUInt8(colorOffset + 2);
    var average = (b + g + r) / 3;
    arrayOfColors.push({
      blue: average,
      green: average,
      red: average
    });
  }
}

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
  grayscale(rawData, extractedData.paletteColors, extractedData.paletteLength);

  for (var i = 0; i < extractedData.paletteColors.length; i++) {
    var bufOffset = 54 + i * 4;
    var currentColor = extractedData.paletteColors[i];
    rawData.writeUInt8(currentColor.blue, bufOffset);
    rawData.writeUInt8(currentColor.green, bufOffset + 1);
    rawData.writeUInt8(currentColor.red, bufOffset + 2);
  }
  return rawData;
}
