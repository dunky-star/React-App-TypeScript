"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GoldCustomer_1 = require("./GoldCustomer");
var PlatinumCustomer_1 = require("./PlatinumCustomer");
var SilverCustomer_1 = require("./SilverCustomer");
// Creating an instance
//let myCustomer = new Customer("Lion", "King", "king@mail.com");
//myCustomer.setEmail("dunky@yy.com");
// console.log(`Customer first name:   ${myCustomer.getFirstName()}`);
// console.log(myCustomer);
var goldCustomer = new GoldCustomer_1.GoldCustomer("Gold", "Tan", "mail@mail.com", "Gold Customer");
// console.log(goldCustomer.getDailyWorkout());
var platinumCustomer = new PlatinumCustomer_1.PlatinumCustomer("Plat", "Tany", "tany@mail.com", "Platinum Customer");
//console.log(platinumCustomer.getDailyWorkout());
var silverCustomer = new SilverCustomer_1.SilverCustomer("Silver", "Tany", "tany@mail.com", "Silver Customer");
var theCustomer = []; // Array of customers
var theCoach = [];
theCustomer.push(goldCustomer);
theCustomer.push(platinumCustomer);
theCustomer.push(silverCustomer);
for (var _i = 0, theCustomer_1 = theCustomer; _i < theCustomer_1.length; _i++) {
    var customer = theCustomer_1[_i];
    console.log(customer.getInfo());
}
theCoach.push(goldCustomer);
theCoach.push(platinumCustomer);
for (var _a = 0, theCoach_1 = theCoach; _a < theCoach_1.length; _a++) {
    var coach = theCoach_1[_a];
    console.log(coach.getDailyWorkout());
}
