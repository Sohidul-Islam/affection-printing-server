const express = require("express");
const {
  testApi,
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", testApi);

router
  .get("/user", getUsers)
  .get("/user/:id", getUser)
  .post("/user", addUser)
  .put("/user/:id", updateUser)
  .delete("/user/:id", deleteUser);

module.exports = router;
