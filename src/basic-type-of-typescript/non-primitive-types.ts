// array , object

// ts - tuple

let bazarList: string[] = ["eggs", "milk", "sugar"];

//bazarList.push(true);

let mixedArr: (string | number)[] = ["eggs", 12, "milk", 1, "sugar", 2];

//mixedArr.push(true);

//let coordinates: [number, number] = [20, 30, 50];

let couple: [string, string] = ["Husband", "wife"];// <- tuple

let destination: [string, string, number] = ["Dhaka", "Chattogram", 3];

// reference (non primitive) type : object

// const user: {
//   readonly organization: string // access modifier
//   organization: "ABC company";// value => type : literal types
//   firstName: string;
//   middleName?: string; // optional type
//   lastName: string;
//   isMarried: boolean;
// } = {
//   organization: "ABC company",
//   firstName: "Riya",
//   lastName: "Das",
//   isMarried: true,
// };

// user.organization = "ABC company LTD ";

const user: {
  readonly organization: string; // access modifier
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: "ABC company",
  firstName: "Riya",
  lastName: "Das",
  isMarried: true,
};

//user.organization = "ABC company LTD";

console.log(user);

console.log(user);