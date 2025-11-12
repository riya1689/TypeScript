// spread operator

//spread using in array
const friends = ["Rahim", "Karim"];

const schoolFriends = ["pintu", "chintu", "bulbul"];

const collegeFriends = ["Mr. Smart", "Mr very very smart"];

// const friends = ["Rahim", "Karim", ["pintu", "chintu", "bulbul"]];

friends.push(...schoolFriends);
friends.push(...collegeFriends);

console.log(friends);

//spread using in object
const user = { name: "riya", phoneNo: "0100000000" };

const otherInfo = { hobby: "outing", favouriteColor: "Light" };

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);

// rest operator

const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`Send invitation to ${friend}`)
  );
};

sendInvite("pintu", "cinthu", "bulbul", "chulbul", "mezba");