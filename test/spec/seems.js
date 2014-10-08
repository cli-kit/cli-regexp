var expect = require('chai').expect;
var regexp = require('../..')
  , parse = regexp.parse;

describe('cli-regexp:', function() {

  it('should not seem to be a pattern in invalid ptn', function(done) {
    var res = regexp.seems(null);
    expect(res).to.eql(false);
    done();
  });

  it('should seem to be a regexp', function(done) {
    var ptn = '/^[a-z]+$/';
    var res = regexp.seems(ptn);
    expect(res).to.eql(true);
    done();
  });

  it('should seem to be a regexp double backslash', function(done) {
    var ptn = '/^[a-z]\\/+$/';
    var res = regexp.seems(ptn);
    expect(res).to.eql(true);
    done();
  });

  it('should seem to be a regexp multiple double backslash', function(done) {
    var ptn = '/sa-test\\/init\\/(registry|uuid)\\.ini/';
    var res = regexp.seems(ptn);
    expect(res).to.eql(true);
    var re = regexp.parse(ptn);
    expect(re).to.be.instanceof(RegExp);
    done();
  });

  it('should seem to be a regexp multiple quadruple backslash', function(done) {
    var ptn = '/sa-test\\\\/init\\\\/(registry|uuid)\\\\.ini/';
    var res = regexp.seems(ptn);
    expect(res).to.eql(true);
    var re = regexp.parse(ptn);
    expect(re).to.be.instanceof(RegExp);
    done();
  });
})
