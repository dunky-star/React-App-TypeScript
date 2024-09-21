var found = true; // Boolean
var grade = 96; // for integer and floating point number
var fName = "Duncan";
var lName = "Army";
var user = {
    firstName: "Geoffrey",
    lastName: "Opiyo",
    role: "Developer",
};
console.log("The grade is: " + grade);
console.log("Hi, ".concat(fName, " ").concat(lName));
console.log(user.firstName);
// For Loop
var sportsOne = ["Cricket", "Golf", "Tennis", "Swimming"];
sportsOne.push("Football"); // Growable array - Arrays in TypeScript are always growable, always dynamic.
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + " << my favorite sport!");
    }
    else {
        console.log(tempSport);
    }
}
