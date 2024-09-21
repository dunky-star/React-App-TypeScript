"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var GoldCustomer_1 = require("./GoldCustomer");
var SilverCustomer_1 = require("./SilverCustomer");
// Creating an instance
var myCustomer = new Customer_1.Customer("Lion", "King", "king@mail.com");
myCustomer.setEmail("dunky@yy.com");
console.log("Customer first name:   ".concat(myCustomer.getFirstName()));
console.log(myCustomer);
var goldCustomer = new GoldCustomer_1.GoldCustomer("Gold", "Tan", "mail@mail.com", "Gold Customer");
var platinumCustomer = new GoldCustomer_1.GoldCustomer("Plat", "Tany", "tany@mail.com", "Platinum Customer");
var silverCustomer = new SilverCustomer_1.SilverCustomer("Silver", "Tany", "tany@mail.com", "Silver Customer");
var theCustomer = []; // Array of customers
theCustomer.push(goldCustomer);
theCustomer.push(platinumCustomer);
theCustomer.push(silverCustomer);
for (var _i = 0, theCustomer_1 = theCustomer; _i < theCustomer_1.length; _i++) {
    var customer = theCustomer_1[_i];
    console.log(customer.getInfo());
}
