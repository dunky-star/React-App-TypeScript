import { Customer } from "./Customer";
import { GoldCustomer } from "./GoldCustomer";
import { SilverCustomer } from "./SilverCustomer";
// Creating an instance
let myCustomer = new Customer("Lion", "King", "king@mail.com");
myCustomer.setEmail("dunky@yy.com");
console.log(`Customer first name:   ${myCustomer.getFirstName()}`);
console.log(myCustomer);

let goldCustomer = new GoldCustomer(
  "Gold",
  "Tan",
  "mail@mail.com",
  "Gold Customer"
);
let platinumCustomer = new GoldCustomer(
  "Plat",
  "Tany",
  "tany@mail.com",
  "Platinum Customer"
);

let silverCustomer = new SilverCustomer(
  "Silver",
  "Tany",
  "tany@mail.com",
  "Silver Customer"
);

let theCustomer: Customer[] = []; // Array of customers

theCustomer.push(goldCustomer);
theCustomer.push(platinumCustomer);
theCustomer.push(silverCustomer);

for (let customer of theCustomer) {
  console.log(customer.getInfo());
}
