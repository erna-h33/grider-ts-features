// When do we use arrays?
// Any time we need to represent a collection of records with some arbitrary order, we can use an array. Arrays are also useful when we want to represent a list of values that are all of the same type.

const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Why we car about arrays
// 1) Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// 2) Prevent incompatible values
carMakers.push(100);

// 3) Help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
