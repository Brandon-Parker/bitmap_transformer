exports.extract = extract;

function extract(rawData) {
  console.log('this data was passed into the transform function', rawData);
  var extractedData = {};
  extractedData.header = rawData.toString('utf8', 0, 2);
  console.log('This is the length', rawData.length);
  extractedData.size = rawData.readUInt32LE(2, 4);

  debugger;
};


// extractedData.header = Buffer.from('726027586', 'hex');
// debugger;
// console.log(extractedData.header.toString());
