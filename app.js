var a = 100;
console.log(typeof a);
let b = "sakib ahmed";
console.log(typeof b);

var myName = "sakib ahmed";
if (myName > "sakib ") {
  console.log("i am selected to the party");
}

var num = 50;
if (num > 40) {
  if (num > 20) {
    console.log("higest number ");
  } else if (num > 40) {
    console.log("same number ");
  } else {
    console.log("not found my logic");
  }
}

var rollNumber = 7;

switch (rollNumber) {
  case 7:
    console.log("sakib");
    break;
}
var names = [
  "sakib",
  "raju",
  "yamin",
  "shahin",
  "rasel",
  "nasim",
  "ferdous",
  "iqbal",
  "tamim",
];

var cutArray = names.splice(3);
console.log(cutArray);  
console.log(names);

// names.push("sona mia");
// names.pop();
// names.shift()

// names.unshift("raju bro");
// console.log("find the raju " + names.indexOf("raju bro"));
// for (var i = 0; i < names.length; i++) {
//   console.log(`i love you ` + names[i]);
// }

// names[5] = "Mamun vai";

// console.log(names["length"]);
