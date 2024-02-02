const { getUser } = require("../service/auth");

const restrictedToLoggedInUserOnly = async (req, res, next) => {
  const userUid = req.cookies?.uid;
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
  const userUid = req.cookies?.uid;
  const user = getUser(userUid);
  req.user = user;
  next();
}

module.exports = {
  restrictedToLoggedInUserOnly,
  checkAuth
};
