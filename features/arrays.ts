const carMakers = ['ford', 'toyota', 'chevy'];

// Help with inference when extracting values
const car = carMakers[0];

// Prevent incompatible values
carMakers.push(100);

// Help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
