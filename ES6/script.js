// Lecture: let and const

//ES5
/*
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6

const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

// ES5
/*
function driversLicence5(passedTest) {

  if (passedTest) {
    console.log(firsteName);
    var firsteName = 'John';
    var yearOfBirth = 1990;

}
  console.log(firsteName + ' bonr in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driversLicence5(true);

// ES6

function driversLicence6(passedTest) {

  //.log(firstName);
  let firsteName;
  const yearOfBirth = 1990;
    if (passedTest) {
      firsteName = 'John';

}
console.log(firsteName + ' bonr in ' + yearOfBirth + ' is now officially allowed to drive a car.');

}

driversLicence6(true);



let i = 22;

for (let i = 0; i < 5; i++ ) {
  console.log(i);
};

console.log(i);
*/




////////////////////////////////////////
// lecture:

//ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}

//console.log(a + b);
console.log(c);
// ES5
(function () {
  var c = 3;
})();

//console.log(c);
