// constraint : strict rules deya
//rule setting on typescript -> constraint
//we will use constraint in function and object 

type Stuent = { id: number; name: string; dateOfBirth: string; class: string };

const addStudentToCourse = <T extends Stuent>(studentInfo: T) => {
  return {
    course: "TypeScript Learning",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Riya",
  hasPen: true,
};

const student2 = {
  id: 321,
  name: "Ratri",
  hasCar: true,
  isMarried: true,
};

const student3 = {
  id: 444,
  name: "Ratri Das",
  hasWatch: true,
  dateOfBirth: "20-20-2020",
  class: "1",
};

const result = addStudentToCourse(student3);
console.log(result);