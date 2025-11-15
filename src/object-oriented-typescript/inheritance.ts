//derived class -> classes that use inheritance property 
//person is as a parent class
class Person {
  name: string; // common
  age: number; // common
  address: string; // common

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  // common
  getSleep(numOFhours: number) {
    console.log(`${this.name} ${numOFhours} ghonta ghumai`);
  }
}
/**
 * parent class er sathe derived class er sob property mile gele extra kore ar constructor call , super call
 * korte hoy na. typescript nijei kore ney
 */


class Student extends Person {
 
  rollNo: number;

  constructor(name: string,age: number,address: string, rollNo: number){
  
    super(name, age, address)
    this.rollNo = rollNo

  }

}

const student1 = new Student(`Mr. fakibaaz`, 18, "Bangladesh", 1981);
//student1.getSleep(4);

//Teacher

// class Teacher {
//   name: string; // common
//   age: number; // common
//   address: string; // common
//   designation: string //extra property

//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.designation = designation
//   }

//   getSleep(numOFhours: number) {
//     console.log(`${this.name} ${numOFhours} ghonta ghumai`);
 // own method
//   takeClass(numOfclass: number) {
//     console.log(`${this.name} ${numOfclass} ghonta class nei`);
//   }
//   }
// }


class Teacher extends Person {
  designation: string; //own  property

  constructor(name: string,age: number, address: string,designation: string) {

     super(name, age, address)// comes from parent class.parent class er constructor

    this.designation = designation;
   
  }

  // own method
  takeClass(numOfclass: number) {
    console.log(`${this.name} ${numOfclass} ghonta class nei`);
  }
}

const teacher1 = new Teacher(
  "Mr. Smart Teacher",
  25,
  "Bangladesh",
  "Senior teacher"
);

teacher1.