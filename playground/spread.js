// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Rob', 32];

function sayHi(name, age) {
  return 'Hi ' + name + ', you are ' + age;
}

console.log(sayHi(...person));
console.log(sayHi(...personTwo));

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function(name, index){
  console.log('Hi ' + name);
});
