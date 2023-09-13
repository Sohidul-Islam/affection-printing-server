const express = require("express");
const {
  getBill,
  getBills,
  addBill,
  updateBill,
  deleteBill,
  getDues,
} = require("../controllers/billController");

const router = express.Router();

router
  .get("/bill/dues", getDues)
  .get("/bill/:id", getBill)
  .get("/bill", getBills)
  .post("/bill", addBill)
  .put("/bill/:id", updateBill)
  .delete("/bill/:id", deleteBill);

module.exports = router;
