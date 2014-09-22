var expect = require('chai').expect;
var regexp = require('../..')
  , parse = regexp.parse;

describe('cli-regexp:', function() {
  it('should parse regular expression', function(done) {
    var ptn = '/^[a-z]+$/';
    var re = parse(ptn);
    expect(re).to.be.instanceof(RegExp);
    expect(re.source).to.eql('^[a-z]+$');
    done();
  });

  it('should parse regular expression with modifiers', function(done) {
    var ptn = '/^[a-z]+$/gim';
    var re = parse(ptn);
    expect(re).to.be.instanceof(RegExp);
    expect(re.source).to.eql('^[a-z]+$');
    expect(re.global).to.eql(true);
    expect(re.ignoreCase).to.eql(true);
    expect(re.multiline).to.eql(true);
    done();
  });

})
