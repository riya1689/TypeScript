// object destructuring
// array destructuring


//object destructuring
const user = {
  id: 123,
  name: {
    firstName: "Riya",
    middleName: "Ratri",
    lastName: "Das",
  },
  gender: "female",
  favouriteColor: "Light",
};

//const myFavouriteColor = user.favouriteColor
//const myMiddleName = user.name.middleName  <- if there is more complex and nested object then we may use more dot.But its not effective.
//whom we destructuring must in right side

const {
  favouriteColor,
  name: { middleName: myMiddleName },
} = user;
//no need to define type in destructuring
// const {favouriteColor: myFavouriteColor} = user; //<- here we done name aliasing favouriteColor into myFavouriteColor
// console.log(myFavouriteColor);


//console.log(myMiddleName);

//array destructuring

const friends = ["karim", "Rahim", "Mahim"];
const [A, myBestFriend, C] = friends;

const [, , myBestuFriend] = friends;

console.log(myBestuFriend);
