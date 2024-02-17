"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender[0]);
console.log(Gender[1]);
var WeekEnds;
(function (WeekEnds) {
    WeekEnds[WeekEnds["Saturday"] = 6] = "Saturday";
    WeekEnds[WeekEnds["Sunday"] = 7] = "Sunday";
})(WeekEnds || (WeekEnds = {}));
console.log(WeekEnds[6]);
console.log(WeekEnds[7]);
// union type
var sn;
sn = "codemind";
sn = 10;
// union types as function parameter as well
function sayHello(arg) {
    if (typeof arg == "number") {
        console.log(typeof arg); // number     
    }
    else if (typeof arg == "string") {
        console.log(typeof arg); // string
    }
}
sayHello(10); // number
sayHello("Hello"); // string
