import { Customer } from "./Customer";
import { GoldCustomer } from "./GoldCustomer";
// Creating an instance
let myCustomer = new Customer("Lion", "King", "king@mail.com");
myCustomer.setEmail("dunky@yy.com");
console.log(`Customer first name:   ${myCustomer.getFirstName()}`);
console.log(myCustomer);

let goldCustomer = new GoldCustomer(
  "Qwerty",
  "Tan",
  "mail@mail.com",
  "Gold Customer"
);
let platinumCustomer = new GoldCustomer(
  "ZZZ",
  "Tany",
  "tany@mail.com",
  "Platinum Customer"
);
console.log(goldCustomer.getInfo());
console.log(platinumCustomer.getInfo());
