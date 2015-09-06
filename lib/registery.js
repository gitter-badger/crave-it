'use strict';

var lazy = require('lazy.js');
var assert = require('fluent-assert');

var Registery = function(){
  this.store = {
    // 'name': { name: 'name', location: '/path', obj: require(location) }
  };
};

Registery.prototype.add = function(name, object){
  assert.string('name', name);
  assert.object('requireObject', object);
  var exists = this.store[name];
  if(exists){
    throw new Error('Module is already registered by the name of: ' + name);
    return;
  }

  this.store[name] = object;
};

Registery.prototype.get = function(name){
  assert.string('name', name);
  return this.store[name];
}

Registery.prototype.remove = function(name){
  assert.string('name', name);
  var exists = this.store[name];
  if(!exists){
    return;
  }
  this.store[name] = undefined;
};

Registery.prototype.update = function(name, object){
  assert.string('name', name);
  assert.object('requireObject', object);
  var exists = this.store[name];
  if(!exists){
    throw new Error('Module does not exist by the name of: ' + name);
    return;
  }
  this.store[name] = object;
};


module.exports = new Registery();
