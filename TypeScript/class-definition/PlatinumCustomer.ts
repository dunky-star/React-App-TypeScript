import { Coach } from "./Coach";
import { Customer } from "./Customer";

export class PlatinumCustomer extends Customer implements Coach {
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    private brand: string
  ) {
    super(firstName, lastName, email);
    this.brand = brand;
  }
  getDailyWorkout(): string {
    return "Hit 100 balls at the Golf range.";
  }

  getInfo(): string {
    return `Brand = ${this.brand}`;
  }
}
