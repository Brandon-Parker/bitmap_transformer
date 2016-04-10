#!/usr/bin/env node
const bitmap = require(__dirname + '/../lib/read');

bitmap.readBMP(bitmap.imagePath + '.bmp');
