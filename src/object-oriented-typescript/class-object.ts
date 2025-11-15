/**
 * class -> object -> instance 
 * class -> blueprint 
 * object oriented programming -> fundamental block is class.
 * class er property define kora
 * function likhle parameter hisebe argument receive kore.same in object
 * , constructor diye receive korte hbe...
 * 
 */
//oop - class >>> object

// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(`${this.name} is making  sound: ${this.sound}`);
//   }
// }

// function add (num1: number,num2:number){

// }

// add (2,3)



//parameter properties of typescript..
//class er vetore j property define kori, sei same property constructor e
//define kori.double time na likhe parameter typescript diye ekbar likha. 
//parameter properties use kore code clean kora
class Animal{
    constructor(public name: string, public species: string, public sound: string){

    }
    makeSound(){
        console.log(`${this.name} is making sound: ${this.sound}`);
    }
}

const cat = new Animal("cati bro", "cat", "mew mew");

cat.makeSound();
