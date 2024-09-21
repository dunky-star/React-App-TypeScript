import { Customer } from "./Customer";

export class GoldCustomer extends Customer {
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    private brand: string
  ) {
    super(firstName, lastName, email);
    this.brand;
  }

  getInfo(): string {
    return super.getInfo() + ` Brand = ${this.brand}`;
  }
}
