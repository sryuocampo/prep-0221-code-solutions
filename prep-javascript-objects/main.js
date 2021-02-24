var person = {
  firstName: 'Sarah',
  lastName: 'Ocampo',
  hobby: 'painting',
  job: 'full time student',
  previousJob: 'server'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);
console.log("The person's current job is:", person.job);
console.log("The person's previous job is:", person.previousJob);
console.log('The complete person object:', person);

var myCar = {
  make: 'toyota',
  model: 'prius',
  year: '2014',
  owner: fullName,
  color: 'white'
};
console.log('Car information', myCar);

var str1 = 'My name is';
var str2 = 'and I drive a';
console.log(str1, myCar.owner, str2, myCar.year, myCar.make, myCar.model);

console.log('My full car info:', myCar);
