#! /usr/bin/env node

var fs = require('fs');
var prompt = require('prompt');

// put here the screen dimensions.
var device = {
  width: null,
  height: null
};

if (process.argv.length <= 3) {
  throw Error('Please enter source and destination files');
}

prompt.start();

var promptQuestions = {

  properties: {
    width: {
      pattern: /^[0-9]+$/,
      message: 'Just numbers please',
      description: 'Enter device width',
      default: 800,
      required: true
    },
    height: {
      pattern: /^[0-9]+$/,
      message: 'Just numbers please',
      description: 'Enter device height',
      default: 1280,
      required: true
    }
  }
};

prompt.get(promptQuestions, function(err, results) {
  if (err) {
    throw new Error(err);
    return;
  }

  device.width = results.width;
  device.height = results.height;

  init();
});


var sourceFile = process.argv[2];
var destinationFile = process.argv[3];

var functionsToConvert = {
  width: 'width',
  left: 'width',
  right: 'width',

  height: 'height',
  top: 'height',
  bottom: 'height'
};

convert = function(property, value) {
  var deviceProperty = functionsToConvert[property]
  var deviceDimention = device[deviceProperty];
  var percent = parseFloat((value/deviceDimention * 100).toFixed(3));
  return percent;
}

function init() {
  fs.readFile(sourceFile, {encoding: "UTF8"}, function (err, data) {
    if (err) {
      throw new Error(err);
      return;
    }

    // var result = data.match(/[top|left|right|bottom|width|height](\s+)\:(\s+)px/gi);
    var changedCSS = data.replace(/[^\-](top|left|bottom|right|width|height)\s?\:\s?([0-9]+)px/gi, function(match, p1, p2, p3) {

      // clear the whitespace from the properties
      var property = p1.replace(/\s/g, "");
      var value = parseInt(p2);

      // replace just the numbers to preserv the text indentation
      return match.replace(/([0-9])+px/, convert(property, value) + '%');
    });

    fs.writeFile(destinationFile, changedCSS, function (err) {
     if (err) throw err;
     console.log('Done!', destinationFile + ' was created');
   });

  });
}