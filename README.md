# bitmap_transformer

##Description
This will transform palette Bitmaps with only BM type. Our application accepts arguments through the command line which determine the file to be transformed, the new save location, and the transform option.

##How to Use:
.bin/read.js file_to_transform.bmp new_save_location.bmp transform_option

(./bin/bitmap.js palette-bitmap.bmp inverted.bmp invert)

###transform_option
invert
randomize
grayscale

##Dev-Dependencies
"chai"
"chai-files"
"gulp"
"gulp-eslint"
"gulp-mocha"
"mocha"

##Dependencies
"fs"

##Testing
Run gulp in the Command Line.

Tests checks that a new file is created and that it does not match the data of the original file. Gulp also lints our code.
