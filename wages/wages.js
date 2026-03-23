"use strict";
let hourlyWage = prompt("What is your hourly wage?");
hourlyWage = Number(hourlyWage);
let correct = confirm(`You entered $${hourlyWage} per hour. Is that correct?\nClick OK for yes.\nClick Cancel for no.`);

let hoursWorked = prompt("How many hours did you work this week?");
hoursWorked = hoursWorked.trim();
hoursWorked = Number(hoursWorked);
let correctHours = confirm(`You entered ${hoursWorked} hours. Is that correct?\nClick OK for yes.\nClick Cancel for no.`);

let grossPay = hourlyWage * hoursWorked;
let taxes = grossPay * 0.10;
let netPay = grossPay - taxes;

console.log("Your weekly net pay is $" + netPay.toFixed(2));

if (hoursWorked > 40) {
    console.log("You worked overtime this week!");
}
else if (hoursWorked === 40) {
    console.log("You worked exactly 40 hours");
}
else {
    console.log("No overtime this week.");
}

if (netPay > 800) {
    console.log("Great paycheck this week!");
}
else {
    console.log("Keep working toward a bigger paycheck!");
}