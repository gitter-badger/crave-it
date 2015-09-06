'use strict';

var chai = require('chai');
var expect = chai.expect;

describe('registery', function(){
  var registery;
  before(function(){
    registery = require('../lib/registery');
  });

  afterEach(function(){
    registery.remove('name');
    registery.remove('hello');
    registery.remove('hi');
  });

  describe('get', function(){
    it('throws if no name is provided', function(){
      expect(function(){
        registery.get();
      }).to.throw(/name/);
    });

    it('gets the item via the name', function(){
      var item = { thing: 'cool' };
      registery.add('name', item);
      var object = registery.get('name');
      expect(object).to.equal(item);
    });

    // May or maynot want to add an exception if nothing is found
  });

  describe('add', function(){
    it('adds an object by name', function(){
      var item = { name: 'something' };
      registery.add('name', item);
      var obj = registery.get('name');
      expect(obj).to.equal(item);
    });

    it("throws an exception if a name isn't specified", function(){
      expect(function(){
        registery.add();
      }).to.throw(/[Nn]ame/)
    });

    it('throws if the name is taken', function(){
      registery.add('hello', {})
      expect(function(){
        registery.add('hello', {});
      }).to.throw(/registered/);
    });

    it('throws if no object is provided', function(){
      expect(function(){
        registery.add('hi');
      }).to.throw(/object/);
    })
  });

  describe('remove', function(){
    it('throws if no name is provided',function(){
      expect(function(){
        registery.remove();
      }).to.throw(/name/);
    });

    it('removes an object by name', function(){
      var name = 'name';
      var item = {};
      registery.add(name, item);
      var obj = registery.get(name);
      expect(obj).to.equal(item);
      registery.remove(name);
      var secondObj = registery.get(name);
      expect(secondObj).to.equal(undefined);
    });
  });

  describe('update', function(){

  });
});
