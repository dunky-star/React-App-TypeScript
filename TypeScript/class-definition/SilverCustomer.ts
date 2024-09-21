import { Customer } from "./Customer";

export class SilverCustomer extends Customer {
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    private brand: string
  ) {
    super(firstName, lastName, email);
    this.brand = brand;
  }

  getInfo(): string {
    return `Brand = ${this.brand}`;
  }
}
