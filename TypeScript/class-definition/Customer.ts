class Customer {
  private firstName: string;
  private lastName: string;
  private email: string;
  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  public getFirstName(): string {
    return this.firstName;
  }
  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }
  public getLastName(): string {
    return this.lastName;
  }
  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }
  public getEmail(): string {
    return this.email;
  }
  public setEmail(email: string): void {
    this.email = email;
  }
}

// Creating an instance
let myCustomer = new Customer("Lion", "King", "king@mail.com");
myCustomer.setEmail("dunky@yy.com");
console.log(`Customer first name:   ${myCustomer.getFirstName()}`);
console.log(myCustomer);
