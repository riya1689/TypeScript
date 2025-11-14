// keyof : type operator -> works on type
//keyof operator er sahajje constraint apply kora

type RichPeoplesVehicle = {
  car: string; // key: value
  bike: string;
  cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";  //<- string literal type.
//Notice that bike, car, cng are already included as key in type RichPeopleVehicle  
type Myvehicle2 = keyof RichPeoplesVehicle;

const myVehicle: Myvehicle2 = "car";
//const myVehicle: Myvehicle2 = "ship"; //ship is not assignable

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 222, // key: value
  name: "Riya",
  address: {
    city: "ctg",
  },
};

// const myId = user.id; // dot notation
// const myId = user["id"];
// const myName = user["name"];
// const address = user["address"];

//console.log({ myId, myName, address });

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

// const result1 = getPropertyFromObj(user, "emni");
// console.log(result);

const product = {
  brand: "HP",
};

const student = {
  id: 123,
  class: "four",
};

const result2 = getPropertyFromObj(product, "brand");
const result3 = getPropertyFromObj(student, "id");