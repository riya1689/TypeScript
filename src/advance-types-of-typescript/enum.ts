// enum

// set of fixed string leteral ek jaigai rakhe

// type UserRoles = "Admin" | "Editor" | "Viewer";

//cant use type as value

//Immediately Invoked function IIF

//developer not recommend Enum.Cause it create extra code in transform
// of JS.Cause Enum is not part of JS

enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);