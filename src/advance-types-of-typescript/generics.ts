//dynamically generalize: Generic

// type GenericArray = Array<string>;
// type GenericArray = Array<number>;
// type GenericArray = Array<boolean>;

type GenericArray<T> = Array<T>;

// const friends: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
//different way to declare string
// const friends: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

//const rollNumbers: number[] = [4, 7, 11];
//const rollNumbers: Array<number> = [4, 7, 11];
const rollNumbers: GenericArray<number> = [4, 7, 11];

//const isEligibleList: boolean[] = [true, false, true];
//const isEligibleList: Array<boolean> = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

type User = { name: string; age: number };
//generic with type alias 
const userList: GenericArray<User> = [
  {
    name: "Mr. X",
    age: 22,
  },
  {
    name: "Mr. Y",
    age: 25,
  },
];

const sqrFunc = (value: number) => {
  return value * value;
};

sqrFunc(4);

//tuple with generic
type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];

// generic even array object