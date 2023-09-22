// const mongoose = require('mongoose');
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // firstname: {
  //   type: String,
  //   required: true,
  //   max: 50,
  // },
  // lastname: {
  //   type: String,
  //   required: true,
  //   max: 50,
  // },
  // email: {
  //   type: String,
  //   required: true,
  //   max: 50,
  //   unique: true
  // },
  // mobilenumber: {
  //   type: String,
  //   required: true
  // },
  // password: {
  //   type: String,
  //   required: true,
  //   min: 6
  // },
  // confirmpassword: {
  //   type: String,
  //   required: true,
  //   min: 6
  // },
  firstname: String,
  lastname: String,
  email: String,
  mobilenumber: String,
  password: String,
  confirmpassword: String,
  role: String,
  gender: String,
});

// module.exports = mongoose.model('users', userSchema);          
// module.exports = mongoose.models['USERS'] || mongoose.model('USERS', userSchema);
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
// const users = mongoose.model('USERS', userSchema) ;
// export default users;

// const users = mongoose.models.users || mongoose.model('USERS', userSchema);

// export default users;
// module.exports = users;