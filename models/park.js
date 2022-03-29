const Park = function (name, price){
    this.name = name;
    this.price = price;
    this.dinosaurs = [];
}

// write functions here for the TDD

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    dinosaurIndex = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(dinosaurIndex, 1);
}








module.exports = Park;