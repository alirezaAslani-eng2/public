interface face_user<C extends object> {
  name: string;
  last_name: string;
  carts: C[];
}
interface face_cart {
  price: number;
  name: string;
}
class User implements face_user<face_cart> {
  constructor(
    readonly name: string,
    readonly last_name: string,
    readonly carts: face_cart[]
  ) {
    this.name = "ali";
    this.last_name = last_name;
    this.carts = carts;
  }
  login() {
    console.log(this, "login");
  }
}

const us1 = new User("ali", "aslani", [
  { name: "product name", price: 30_000 },
]);
us1.login();
