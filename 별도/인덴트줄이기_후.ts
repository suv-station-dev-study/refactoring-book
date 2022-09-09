function deleteUser(user: any) {
  if (user == null) return;

  console.log("User deleted: " + user.name);
  user.delete();
}

function saveUser(user: any) {
  if (user == null) return;
  console.log("User saved: " + user.name);

  if (!user.isValid()) return;
  console.log("User is valid");
  user.save();
}
