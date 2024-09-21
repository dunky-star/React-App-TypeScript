"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var GoldCustomer_1 = require("./GoldCustomer");
// Creating an instance
var myCustomer = new Customer_1.Customer("Lion", "King", "king@mail.com");
myCustomer.setEmail("dunky@yy.com");
console.log("Customer first name:   ".concat(myCustomer.getFirstName()));
console.log(myCustomer);
var goldCustomer = new GoldCustomer_1.GoldCustomer("Qwerty", "Tan", "mail@mail.com", "Gold Customer");
var platinumCustomer = new GoldCustomer_1.GoldCustomer("ZZZ", "Tany", "tany@mail.com", "Platinum Customer");
console.log(goldCustomer.getInfo());
console.log(platinumCustomer.getInfo());
