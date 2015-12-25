function Dimensions(options) {

  options = options || {};

  this.width = options.width || 800;
  this.height = options.height || 1280;

  this.functions = {
    width: 'width',
    left: 'width',
    right: 'width',

    height: 'height',
    top: 'height',
    bottom: 'height'
  };
}

Dimensions.prototype.getSizeByProperty = function(property) {
  if (typeof this.functions[property] === 'undefined') {
    property = property
                .replace(/([\w-]+)left/, 'left')
                .replace(/([\w-]+)right/, 'right')
                .replace(/([\w-]+)top/, 'top')
                .replace(/([\w-]+)bottom/, 'bottom');
  }

  return this[ this.functions[ property ] ];
}

Dimensions.prototype.getPercentages = function(property, size) {
  var dimensionsSize = this.getSizeByProperty(property);
  var percent = parseFloat((size/dimensionsSize * 100).toFixed(3));
  return percent + '%';
}



module.exports = Dimensions;