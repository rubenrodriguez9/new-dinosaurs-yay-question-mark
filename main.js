const makeDino = function(species, period, carnivore, newExtinct = false) {
// if(newExtinct === undefined){
//   extinct = false
// }

  return {
    species: species,
    period: period,
    carnivore: carnivore,
    extinct: newExtinct
}
}

const makeSingular = function(dino) {
  if(dino.species.slice(-1) === 's'){
    return makeDino(dino.species.slice(0, -2), dino.period, dino.carnivore, dino.extinct)
  }else return dino
 
}



const truncateSpecies = function(dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
  if(newDino.species.length > 10){
    newDino.species = newDino.species.slice(0,7) + '...';
    return newDino
  }else 
    
  return newDino

  }


const makeExtinct = function(dinosaur) {
  return makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore,true)
}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}