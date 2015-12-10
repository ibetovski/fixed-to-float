#! /usr/bin/env node

var fs = require('fs');

// put here the screen dimensions.
var screenWidth = 800;
var screenHeight = 1280;

if (process.argv.length <= 3) {
  throw Error('Please enter source and destination files');
}

var fileToRead = process.argv[2];
var fileToSave = process.argv[3];

var convertors = {
	width: function(property, value) {
		// devide element's width by screenWidth
		var percent = value/screenWidth * 100;
		// multiply by 100;
		return property + ':\t' + percent + "%";
	},

	height: function(property, value) {
		// devide element's height by screenWidth
		var percent = value/screenHeight * 100;
		// multiply by 100;
		return property + ':\t' + percent + "%";	
	}
};

var functionsToConvert = {
	width: 'width',
	left: 'width',
	right: 'width',

	height: 'height',
	top: 'height',
	bottom: 'height'
}

fs.readFile(fileToRead, {encoding: "UTF8"}, function (err, data) {
  if (err) throw err;

  // we have the css data.
  // parse the string and find pixels for:
  //  left:
  //  right:
  //  top:
  //  bottom:
  //  
  //  width:
  //  height:
  
  // var result = data.match(/[top|left|right|bottom|width|height](\s+)\:(\s+)px/gi);
  var changedCSS = data.replace(/(\s?top|\s?left|\s?bottom|\s?right|\s?width|\s?height)\s?\:\s?([0-9]+)px/gi, function(match, p1, p2, p3) {

  	// clear the whitespace from the properties
  	property = p1.replace(/\s/g, "");

  	// make the number to be integer.
  	value = parseInt(p2);

  	return convertors[functionsToConvert[property]](property, value);
  });

  fs.writeFile(fileToSave, changedCSS, function (err) {
	  if (err) throw err;
	  console.log('It\'s saved!');
	});
  // console.log('changed:', changedCSS)
  

});