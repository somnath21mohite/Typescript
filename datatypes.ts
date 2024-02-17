enum Gender {
    Male,
    Female
}


console.log(Gender.Male);
console.log(Gender.Female);

console.log(Gender[0]);
console.log(Gender[1]);

enum WeekEnds {
    Saturday = 6,
    Sunday = 7
}

console.log(WeekEnds[6]);
console.log(WeekEnds[7]);

// union type

var sn: string | number;
sn= "codemind";
sn = 10;

// union types as function parameter as well

function sayHello(arg: number | string) {

    if (typeof arg == "number") {
        console.log(typeof arg);  // number     
    } else if (typeof arg == "string") {
        console.log(typeof arg); // string
        
    }
}

sayHello(10); // number
sayHello("Hello"); // string
