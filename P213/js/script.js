// var x = 10;
// var y = 3;
// x++;
// x--;
// x = 5;
// x **= 3; //x=x%3

// var x = 15;
// var y = 15;
// var age = 19;


// var result = (age > 18) ? "Xosh gelmisiz" : "Olmaz";

// if (age > 18) {
//     console.log("Xosh gelmisiz");
// } else {
//     console.log("Olmaz");
// }

// console.log(result);

// var age = 17;
// var city = "Baki";

// console.log(!(age < 18 && city == "Baki"));


// var number = 11;

// if (number > 0) {
//     if (number % 2 == 0) {
//         console.log("Eded cutdur");
//     } else {
//         console.log("Eded tekdir");
//     }

// } else {
//     console.log("Zehmet olmasa 0-da boyuk eded yazin !!!");
// }


// var task = 50;
// var project = 50;

// if (task >= 0 && task <= 100 && project >= 0 && project <= 100) {
//     var result = task * 0.4 + project * 0.6;
//     if (result > 50) {
//         console.log("Tebrikler " + result);
//     } else {
//         console.log("Teessufler " + result);
//     }
// } else {
//     console.log("Zehmet olmasa duzgun qiymetler daxil edin !!!");
// }


// var a = 10;

// while (a < 10) {
//     a++;
//     console.log(a);

// }

// do {
//     console.log(a);
//     a++;
// } while (a < 10)

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// var min = 1;
// var max = 5;


// if (min > 0 && max > 0 && max > min) {
//     for (var i = min; i <= max; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         } else {
//             console.log("tekdir")
//         }
//     }
// } else {
//     console.log("Duzgun ededler daxil edin");
// }


// var p213 = ["Rafiq", "Memmed", "Ismayil", "Elman", true, 125];

// for (var i = 0; i < p213.length; i++) {
//     console.log(p213[i]);
// }

// var stu1 = {
//     name: "Rafiq",
//     surname: "Qasimov",
//     age: 22
// }

// var stu2 = {
//     name: "Memmed",
//     surname: "Necefov",
//     age: 28
// }


// var Student = function(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.group = "p213";
// }

// class Student{
//     constructor(){

//     }
// }

// var stu1 = new Student("Memmed", "Necefov", 28);
// var stu2 = new Student("Rafiq", "Qasmov", 22);

// console.log(stu1.group);

var n = 5;
var m = 8;
var r = 1;

for (var i = 0; i < m; i++) {
    r *= n;
}
console.log(r);
// var count = 0;


// while (i <= m) {
//     if (i % 2 == 0) {
//         count++;
//     }
//     i++;
// }
// console.log(count);

// while (i <= m) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// }

// for (var i = n; i <= m; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }