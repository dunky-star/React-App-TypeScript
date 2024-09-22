"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    //   private firstName: string;
    //   private lastName: string;
    //   private email: string;
    function Customer(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Customer.prototype.getLastName = function () {
        return this.lastName;
    };
    Customer.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Customer.prototype.getEmail = function () {
        return this.email;
    };
    Customer.prototype.setEmail = function (email) {
        this.email = email;
    };
    return Customer;
}());
exports.Customer = Customer;
