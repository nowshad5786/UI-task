const one = ["red", "green", "orange"]; /*spread array*/
const two = ["apple", "mango"];
const three = [...one, 1, 2, 3, ...two];
console.log(three);
/*spread objects*/
const big = {
  passion: "dancing",
  place: "coorg"
};
const small = {
  danceform: "classical",
  ...big
};
console.log(small);

const { passion, ...rest } = big; /*rest*/
console.log(rest);

/*Destruction*/

const person = {
  firstName: "Raj",
  lastName: "sarja",
  weight: "70",
  height: 6
};
const { firstName, lastName } = person; /*first method*/
console.log(firstName, lastName);

let weight = person.weight; /*second method*/
let height = person.height;
console.log(`weight:${weight} height:${height}`);

const { weight: mass } = person; /*Aliases*/
console.log(mass);
