const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type Alias
type Drink = [string, boolean, number];

// A tuple is an array with a fixed number of elements whose types are known
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
