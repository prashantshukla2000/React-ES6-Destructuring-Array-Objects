import animals, { useAnimals } from "./data";
console.log(animals);
// Destructure Arrays
const [cat, dog] = animals;
// console.log(cat);

// Destructure objects
// const { name, sound, feedingRequest:{food,water} } = cat;
// console.log(food);

//Destruring our output from the function in data.js
console.log(useAnimals(cat));
const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();
