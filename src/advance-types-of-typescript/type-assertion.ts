//type assertion -> knowing more than typescript

let anything: any;

anything = 222;

(anything as number)//now working as number

anything = "Riya";

const kgToGMConverter = (
  input: string | number
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted output is: ${Number(value) * 1000}`;
  }
};
// const result1 = kgToGMConverter(2)

// console.log({ result1 });

// const result2 = kgToGMConverter("2 kg")

// console.log({ result2 });

const result1 = kgToGMConverter(2) as number;

console.log({ result1 });

const result2 = kgToGMConverter("2 kg") as string;

console.log({ result2 });

type CustomError = {
  message: string;
};

try {
} catch (err) {
  console.log((err as CustomError).message);
}