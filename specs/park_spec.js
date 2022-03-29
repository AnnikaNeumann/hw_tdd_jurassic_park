const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');


describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    park = new Park('Jurassic Park', 35,[]);
    dinosaur1 = new Dinosaur ('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur ('Triceratops', 'herbivore', 25);
    dinosaur3 = new Dinosaur ('Triceratops', 'herbivore', 15);
    dinosaur4 = new Dinosaur ('Saurolophus', 'herbivore', 40);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });
    

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 35);
  });

  
  it('should have a collection of dinosaurs', function(){
      assert.deepStrictEqual(park.dinosaurs, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
      park.addDinosaur(dinosaur1);
      const expected = [dinosaur1];
      assert.deepStrictEqual(park.dinosaurs, expected)
  });

  it('should be able to remove a dinosaur from its collection', function(){
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur3);
      park.removeDinosaur(dinosaur2);
      const actual = park.dinosaurs.length;
      assert.deepStrictEqual(actual, 1);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur2);
      const actual = park.findAllBySpecies('Triceratops').length;
      assert.deepStrictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur4);
      const actual = park.mostVisitors();
      assert.strictEqual(actual, dinosaur1);
  });

  // it('should be able to calculate the total number of visitors per day');

  // it('should be able to calculate the total number of visitors per year');

  // it('should be able to calculate total revenue for one year');

});
