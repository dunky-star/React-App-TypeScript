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
exports.SilverCustomer = void 0;
var Customer_1 = require("./Customer");
var SilverCustomer = /** @class */ (function (_super) {
    __extends(SilverCustomer, _super);
    function SilverCustomer(firstName, lastName, email, brand) {
        var _this = _super.call(this, firstName, lastName, email) || this;
        _this.brand = brand;
        _this.brand = brand;
        return _this;
    }
    SilverCustomer.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + "Brand = ".concat(this.brand);
    };
    return SilverCustomer;
}(Customer_1.Customer));
exports.SilverCustomer = SilverCustomer;
