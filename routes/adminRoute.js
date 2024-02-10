const express = require("express");
const {
  getAdmin,
  getAdmins,
  addAdmin,
  updateAdmin,
  deleteAdmin,
  authenticateToken,
} = require("../controllers/adminController");

const router = express.Router();

router
  .get("/admin", authenticateToken, getAdmins)
  .get("/admin/:id", authenticateToken, getAdmin)
  .post("/admin", authenticateToken, addAdmin)
  .put("/admin/:id", authenticateToken, updateAdmin)
  .delete("/admin/:id", authenticateToken, deleteAdmin);

module.exports = router;
