"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoldCustomer = void 0;
var Customer_1 = require("./Customer");
var GoldCustomer = /** @class */ (function (_super) {
    __extends(GoldCustomer, _super);
    function GoldCustomer(firstName, lastName, email, brand) {
        var _this = _super.call(this, firstName, lastName, email) || this;
        _this.brand = brand;
        _this.brand;
        return _this;
    }
    GoldCustomer.prototype.getDailyWorkout = function () {
        return "Practice your new Bowling technique.";
    };
    GoldCustomer.prototype.getInfo = function () {
        return " Brand = ".concat(this.brand);
    };
    return GoldCustomer;
}(Customer_1.Customer));
exports.GoldCustomer = GoldCustomer;
