var jwt = require('jsonwebtoken');
module.exports=function generateToken(user , authority) {
  console.log("what is user",user)
  var u = {
   name: user.name,
   email: user.email,
   authority:authority
  };
  return token = jwt.sign(u, "mercy", {
     expiresIn: 60 * 60 * 24 
  });
}