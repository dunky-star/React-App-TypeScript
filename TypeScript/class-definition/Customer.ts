export abstract class Customer {
  //   private firstName: string;
  //   private lastName: string;
  //   private email: string;
  constructor(
    private firstName: string,
    private lastName: string,
    private email: string
  ) {}
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

  abstract getInfo(): string;
}
