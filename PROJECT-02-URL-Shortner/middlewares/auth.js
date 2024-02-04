const { getUser } = require("../service/auth");

const restrictedToLoggedInUserOnly = async (req, res, next) => {
  // const userUid = req.cookies?.uid;

  const userUid = req.headers['authorization'];

  if (!userUid) {
    return res.redirect("/login");
  }

  const user = getUser(userUid);
  if (!user) {
    return res.redirect("/login");
  }
  req.user = user;
  next();
};

const checkAuth = (req, res, next)=>{
  // const userUid = req.cookies?.uid;

  console.log("from checkauth",req.headers)
  const userUid = req.headers['authorization'];
  
  const token = userUid.split(" ")[1];
  const user = getUser(token);

  req.user = user;
  next();
}

module.exports = {
  restrictedToLoggedInUserOnly,
  checkAuth
};
