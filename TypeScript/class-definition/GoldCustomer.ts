import { Coach } from "./Coach";
import { Customer } from "./Customer";

export class GoldCustomer extends Customer implements Coach {
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    private brand: string
  ) {
    super(firstName, lastName, email);
    this.brand;
  }
  getDailyWorkout(): string {
    return "Practice your new Bowling technique.";
  }

  getInfo(): string {
    return ` Brand = ${this.brand}`;
  }
}
