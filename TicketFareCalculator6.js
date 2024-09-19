// 6. Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk

var age = 25; 
var isStudent = true;
var regularFare = 800;
var fare;

if (age < 10) {
    fare = 0;
} else if (isStudent) {
    fare = regularFare * 0.5; 
} else if (age >= 60) {
    fare = regularFare * 0.85; 
} else {
    fare = regularFare;}

console.log(fare);
