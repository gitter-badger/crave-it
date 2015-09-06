'use strict';

var Crave = require('../lib/crave-it');
var path = require('path');

describe('crave-it', function(){
  var crave;
  before(function(){
    crave = new Crave();
  });

  it('adds a file based on name and path', function(){
    crave.add('hello', path.join(__dirname, 'junk/thing.js'));
    var reg = require('../lib/registery');
    console.log(reg.get('hello'));
  });
});
