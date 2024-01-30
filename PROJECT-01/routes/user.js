const express = require("express");
const router = express.Router();
const { handleGetAllUsers, handleDisplayAllUsersAPI, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser } = require("../controllers/user")

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);
router.get("/api", handleDisplayAllUsersAPI);


router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = {
  router,
};
