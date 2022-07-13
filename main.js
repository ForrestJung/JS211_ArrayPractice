// *** 1: .length
// Array of 4 cars
const cars = ["Ford", "Jeep", "Chevy", "Tesla"];
// Logs the length of the array at beginning
console.log("Beginning Length of Array: " + cars.length);

// *** 2: .concat()
// Array with 4 more cars
const moreCars = ["Suburu", "Toyota", "Honda", "Nissan"];
// Uses concat method to combine cars and moreCars arrays
const totalCars = cars.concat(moreCars);
// Logs the new array
console.log(totalCars);
console.log("New Length of Array: " + totalCars.length);

// *** 3: .indexOf() .lastIndexOf()
// Logs the index position of "Honda"
console.log("Index Position of Honda: " + totalCars.indexOf("Honda"));
// Logs the index position of "Ford"
console.log("Index Position of Ford: " + totalCars.lastIndexOf("Ford"));

// *** 4: .join()
// Converts totalCars into a string called stringOfCars and then logs it
const stringOfCars = totalCars.join();
console.log(stringOfCars);

// *** 5: .split()
// Splits the string into seperate objects in an array and then logs it
const carsFromString = stringOfCars.split(",");
console.log(carsFromString);

// *** 6: .reverse()
// Creates an array that is the reverse of totalCars and then logs it
let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

// *** 7: .sort()
// Sorts carsInReverse by alphebetical order and finds the index of the object that should be = 0
carsInReverse = carsInReverse.sort();
console.log("Index of 'Chevy' after sorting: " + carsInReverse.indexOf("Chevy"));

// *** 8: .slice()
// Creates an array for types of pets
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird'];
// Removes all pets that aren't reptiles and then logs the results
const reptiles = pets.slice(4, 6);
console.log("Reptiles" + reptiles);
console.log(pets);

// *** 9: .splice()
// Remove the reptiles in pets from the array
const removedReptiles = pets.splice(4, 2);
console.log("Reptiles that were removed: " + removedReptiles);
console.log("Pets after reptiles removed: " + pets);
console.log(removedReptiles);
console.log(pets);
// Add "hamster" in the 3rd parameter and log results
const addHamster = pets.splice(4, 2, "hamster");
console.log("Removed Pets: " + addHamster);
console.log("Added Hamster: " + pets);

// *** 10: .pop()
// Removes last item from pets and create removedPet variable
const removedPet = pets.pop();
console.log("Removed: " + removedPet);
console.log("Last item removed: " + pets);

// *** 11: .push()
// Pushes removedPet back to pets
pets.push(removedPet);
console.log("Restores the removed pet: " + pets);

// *** 12: .shift()
// Removes the first item in pets
pets.shift();
console.log("Removes the first item: " + pets);

// *** 13: .unshift()
// Adds "turtle" to the beginning of pets
pets.unshift("turtle");
console.log("Adds Turtle: " + pets);

// *** 14: .forEach()
// Array of Numbers
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
// Adds 2 to each number in the array and logs it
numbers.forEach(addTwo = (num, index) => {
    return numbers[index] = num + 2;
});
console.log(numbers);
