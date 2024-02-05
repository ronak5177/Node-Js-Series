const { getUser } = require("../service/auth");


// Authentication
const checkForAuthentication = (req, res, next) => {
  const tokenCookie = req.cookies?.uid;
  req.user = null;
  
  if (!tokenCookie) {
    return next();
  }
  const user = getUser(tokenCookie);
  req.user = user;
  
  return next();
};

// Authorization
const restrictedTo = (roles = []) => {
  return (req, res, next) => {
    if (!req.user) return res.redirect("/login");

    if (!roles.includes(req.user.role)) return res.end("Unauthorized");

    return next();
  };
};

module.exports = {
  checkForAuthentication,
  restrictedTo,
};
