var jwt = require('jsonwebtoken');
module.exports=function generateToken(user) {
  console.log("what is user",user)
  var u = {
   name: user.name,
   email: user.email,
   admin: user.admin,
   id: user.id
  };
  return token = jwt.sign(u, "mercy", {
     expiresIn: 60 * 60 * 24 
  });
}