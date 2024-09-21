let found: boolean = true; // Boolean
let grade: number = 96; // for integer and floating point number
let fName: string = "Duncan";
let lName: string = "Army";

const user = {
  firstName: "Geoffrey",
  lastName: "Opiyo",
  role: "Developer",
};

console.log("The grade is: " + grade);
console.log(`Hi, ${fName} ${lName}`);

console.log(user.firstName);

// For Loop
let sportsOne: string[] = ["Cricket", "Golf", "Tennis", "Swimming"];
sportsOne.push("Football"); // Growable array - Arrays in TypeScript are always growable, always dynamic.
for (let tempSport of sportsOne) {
  if (tempSport == "Cricket") {
    console.log(tempSport + " << my favorite sport!");
  } else {
    console.log(tempSport);
  }
}
