// JS - TS
// string, number, boolean, undefined, null

// TS: never, unknown, void

let userName: string = "riya123";

let userId = 123;

//userName.toFixed();
userId.toFixed;

let isAdmin: boolean = false;
isAdmin = true;

let y = undefined;//when no datatype define it shows any.Any refers we can define any type data later

let x: undefined = undefined;


// nullable types -> using null as literal

const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log("From DB: ALL USER");
  }
};

getUser(null);

//unknown -> dont know which type data will user input

const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountedPrice = input * 0.1;
    console.log(discountedPrice);
  } else if (typeof input === "string") {
    const [discountedPrice] = input.split(" ");
    console.log(Number(discountedPrice) * 0.1);
  } else {
    console.log("wrong Input");
  }
};

discountCalculator(100);
discountCalculator("100 TK");
discountCalculator(null);

// void -> never return

const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("Error...");