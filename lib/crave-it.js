'use strict';
var path = require('path');
var assert = require('fluent-assert');

var CraveIt = function(){
  this.registry = require('./registery');
};

CraveIt.prototype.setup = function(dir, require){
  var isAbsolute = path.isAbsolute(dir);
  if(!isAbsolute){
    throw new Error(dir + ' is not absolute.');
  }
};

// CraveIt.prototype.scan = function(dir){
//   // scans based on directory passed in
//   // has options to ignore index.js files
//   // respects gitignore?
// };

// ci.add('name', __filename);
CraveIt.prototype.add = function(name, file){
  assert.string('name', name);
  assert.string('filePath', file);
  path.resolve(file);
  this.registry.add(name, require(file));
  // adds an item based on name and location
  // takes in require?
  // adds an item regardless of scan?
};
module.exports = CraveIt;
