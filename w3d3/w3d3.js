function add(num1, num2) {
  return num1 + num2;
}

function doMath(operation, num1, num2) {
  return operation(num1, num2);
}

let sum = doMath(add, 3, 7);

console.log(sum);

// filter

// let students = [
// {name: 'John', average: 90},
// {name: 'Ringo', average: 58},
// {name: 'Paul', average: 82},
// ]

// let passingStudents = students.filter(function(student){
//     return student.average > 60
// })

// find

// let passingStudents = students.find(function(student){
//     return student.average > 50
// })

// console.log(passingStudents)

// let students = [
//     {firstName:'Cam', lastName: 'Newton'},
//     {firstName:'Ted', lastName: 'Ginn'},
//     {firstName:'Greg', lastName: 'Olsen'},

// ]

// let fullNames = students.map (function(student){
//     return `${student.firstName}  ${student.lastName}`
// })

// console.log(fullNames)

let superHeroes = [
  ["Batman", "Bruce Wayne"],
  ["Superman", "Clark Kent"],
  ["Spiderman", "Peter Parker"],
];

let secretIdentity = superHeroes.map((revealArray) => {
  return revealArray.join(" is ");
});

console.log(secretIdentity.join("\n"));

let players = [
  { firstName: "Cam", lastName: "Newton", position: "QB", touchdowns: 32 },
  { firstName: "Derek", lastName: "Anderson", position: "QB", touchdowns: 0 },
  {
    firstName: "Jonathan",
    lastName: "Stewart",
    position: "RB",
    touchdowns: 12,
  },
  { firstName: "Mike", lastName: "Tolbert", position: "RB", touchdowns: 8 },
  { firstName: "Fozzy", lastName: "Whittaker", position: "RB", touchdowns: 3 },
  { firstName: "Ted", lastName: "Ginn", position: "WR", touchdowns: 9 },
  { firstName: "Devin", lastName: "Funchess", position: "WR", touchdowns: 2 },
];

// Find a player with the name 'Mike' find
// Get an array of all players with position 'RB' filter
// Get an array of all the players lastNames map

// Stretch
// Get an array of the full names of all the running backs with more than 5 touchdowns
// Get the number of touchdowns scored by Running backs

let playersNamedMike = players.find(function (player) {
  return player.firstName === "Mike";
});
console.log(playersNamedMike);

let runningBacks = players.filter(function (player) {
  return player.position === "RB";
});
console.log(runningBacks);

let lastNames = players.map (function(player){
     return `${player.lastName}`
     })
console.log(lastNames)