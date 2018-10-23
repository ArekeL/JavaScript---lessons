//Function constructor
/*
var john = {
  name: 'John',
  yearOfbirth: 1990,
  job: 'teacher'
};

var Person = function(name, yearOfbirth, job) {
  this.name = name;
  this.yearOfbirth = yearOfbirth;
  this.job = job;
  }
  Person.prototype.calculateAge = function() {
      console.log(2018 - this.yearOfbirth);
  };

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
*/



// Object. create
/*
var personProto = {
  calculateAge: function() {
    console.log(2018 - this.yearOfbirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
  {
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'designer'}
  }
);
*/

// Primitives vs Objects

//Primitives
/*
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
  name: 'John',
  age: 26
};

// Objects
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Function

var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};
function change(a, b) {
  a = 30;
  b.city = 'San Fracisco';
}


change(age, obj);

console.log(age);
console.log(obj.city);
*/

//Pasing function sa arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2018 -el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
      return Math.round (206.9 - (0.67 * el));
  } else {
    return -1;
  }

}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);
*/

// Functions returmong Functions
/*
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you peas expline what UX design is?');
    }
    } else if (job === 'teacher') {
      return function (name) {
        console.log(name + ', what subject do you teach?');
      }
    } else {
        return function (name) {
          console.log('Hello ' + name + ', what do you do?');
        }
    }
  }

  var teacherQuestion = interviewQuestion('teacher');
  var designerQuestion = interviewQuestion('designer');

  teacherQuestion('John');
  designerQuestion('John');
  designerQuestion('Jane');
  designerQuestion('Mark');
  designerQuestion('Mike');

  interviewQuestion('teacher')('Mark');
*/


// Lecture: IIFE
/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();
*/
/*
(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// console.log(score);

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
*/

// Closures
/*
function retirement(retirementAge) {
  var a = ' years left until retirement.'
  return function (yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
var retirementGerman = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGerman(1990);
retirementIceland(1990);


//retirement(66)(1990);


function interviewQuestion(job) {
  return function (name) {
    if (job === 'designer'){
      console.log(name + ', can you peas expline what UX design is?');
    }else if (job === 'teacher'){
      console.log(name + ', what subject do you teach?');
    } else {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

interviewQuestion('teacher')('John');
*/
/*
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m  a '
      + this.job + ', and I\'m ' + this.age + ' years old.');
    }else if (style === 'friendly') {
      console.log( 'Hay! What\'s up? I\'m ' + this.name + ', I\'m  a '
      + this.job + ', and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
}

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon' );
*/

//Q&A -  Exercise

(function() {
  function Question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans, callback) {
    var sc;

    if (ans === this.correct) {
      console.log('Correct answer!');
      sc = callback(true);
    }else {
      console.log('Wrong answer. Try again.');
      sc = callback(false);
    }
    this.displayScore(sc);
  };

  Question.prototype.displayScore = function(score){
    console.log('Your current score is: ' + score);
    console.log('---------------------------------------------');
  };

  var q1 = new Question('Is JavaScript the coolest programing lenguage in the world?',
   ['Yes', 'No'], 0);

  var q2 = new Question('What is the name of this exercise?',
  ['Ping', 'Learning', 'Q&A'], 2);

  var q3 =  new Question('What does best describe coding?',
  ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);

  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function(correct){
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

var keepScore = score();

  function nextQestion() {

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = prompt('Please select the correct answer.');

    if(answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer),keepScore);

      nextQestion();
    }

  }

  nextQestion();
})();
 /*
function Question(question, answers, correct){
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

Question.prototype.displayQuestion = function() {
  console.log(this.question);

  for (var i = 0; i < this.answers.length; i++) {
    console.log(i + ': ' + this.answers[i]);
  }
};

Question.prototype.checkAnswer = function(ans) {
  if (ans === this.correct) {
    console.log('Correct answer!');
  } else {
    console.log('Wrong answer. Try again.');
  }
};

var q1 = new Question('Is JavaScript the coolest programing lenguage in the world?',
 ['Yes', 'No'], 0);

var q2 = new Question('What is the name of this exercise?',
['Ping', 'Learning', 'Q&A'], 2);

var q3 =  new Question('What does best describe coding?',
['Boring', 'Hard', 'Fun', 'Tediuos'], 2);

var questions = [q1, q2, q3];

function nextQestion() {

  var n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();

  var answer = prompt('Please select the correct answer.');

  if(answer !== 'exit') {
    questions[n].checkAnswer(parseInt(answer));

    nextQestion();
  }

}

nextQestion();
*/
