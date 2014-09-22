var expect = require('chai').expect;
var regexp = require('../..')
  , copy = regexp.copy;

describe('cli-regexp:', function() {
  it('should copy regular expression', function(done) {
    var ptn = /^[a-z]+$/;
    var re = copy(ptn);
    expect(re).to.not.equal(ptn);
    expect(re.source).to.eql(ptn.source);
    done();
  });
  it('should copy regular expression (g)', function(done) {
    var ptn = /^[a-z]+$/g;
    var re = copy(ptn);
    expect(re).to.not.equal(ptn);
    expect(re.source).to.eql(ptn.source);
    expect(re.global).to.eql(true);
    done();
  });
  it('should copy regular expression (i)', function(done) {
    var ptn = /^[a-z]+$/i;
    var re = copy(ptn);
    expect(re).to.not.equal(ptn);
    expect(re.source).to.eql(ptn.source);
    expect(re.ignoreCase).to.eql(true);
    done();
  });
  it('should copy regular expression (m)', function(done) {
    var ptn = /^[a-z]+$/m;
    var re = copy(ptn);
    expect(re).to.not.equal(ptn);
    expect(re.source).to.eql(ptn.source);
    expect(re.multiline).to.eql(true);
    done();
  });
})
