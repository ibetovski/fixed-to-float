var expect = require('chai').expect;
var Dimensions = require('../lib/dimensions');
var dimensions = new Dimensions({
  width: 800,
  height: 300
});

describe('Dimensions', function() {
  it('should has dimensions', function() {
    var dimensions = new Dimensions({
      width: 300,
      height: 500
    });

    expect(dimensions.width).to.equal(300);
    expect(dimensions.height).to.equal(500);
  });

  it('should has defalt dimensions', function() {
    var dimensions = new Dimensions();

    expect(dimensions.width).to.equal(800);
    expect(dimensions.height).to.equal(1280);
  });

  it('should return 50% for width:400px', function() {
    var dimensions = new Dimensions({
      width: 800,
      height: 300
    });

    expect(dimensions.getPercentages('width', 400)).to.equal('50%');
  });

  it('should return 25% for height:75', function() {
    var dimensions = new Dimensions({
      width: 800,
      height: 300
    });

    expect(dimensions.getPercentages('height', 75)).to.equal('25%');
  });

  it('should calculate margin-left based on width', function() {
    var dimensions = new Dimensions({
      width: 800,
      height: 300
    });

    expect(dimensions.getPercentages('margin-left', 200)).to.equal('25%');
  });

  it('should calculate margin-top base on height', function() {
    var dimensions = new Dimensions({
      width: 800,
      height: 300
    });

    expect(dimensions.getPercentages('margin-top', 300)).to.equal('100%');
  });


});