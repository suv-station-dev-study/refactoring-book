export {};
// 예시 1
function deleteUser(user: any) {
  if (user != null) {
    console.log("User deleted: " + user.name);
    user.delete();
  }
}

// 예시 2
function saveUser(user: any) {
  if (user != null) {
    console.log("User saved: " + user.name);
  }

  if (user.isValid()) {
    console.log("User is valid");
    user.save();
  }
}
