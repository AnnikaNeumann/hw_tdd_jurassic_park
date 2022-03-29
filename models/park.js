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

Park.prototype.findAllBySpecies = function(dinosaurSpecies){
    const found = [];
    for (let dinosaur of this.dinosaurs){
        if (dinosaur.species === dinosaurSpecies){
            found.push(dinosaur);
        }   
    }
    return found
}

Park.prototype.mostVisitors = function(){
    let mostVisitorsDino = 0;
    let dinoToReturn;
    for (const dinosaur of this.dinosaurs)
    {
        if(dinosaur.guestsAttractedPerDay > mostVisitorsDino)
        {
            mostVisitorsDino = dinosaur.guestsAttractedPerDay
            dinoToReturn = dinosaur
        }
    }
    return dinoToReturn
}

Park.prototype.mostVisitors = function(){
    let total = 0;
    for (const dinosaur of this.dinosaurs)
    {
       total += dinosaur.guestsAttractedPerDay;
    }
    return total
}

// next per year.. just call function above and do some math :)

// next one monies per year, use function above * price per ticket.



module.exports = Park;