const express = require("express");
const {
  makeTransaction,
  getTransactions,
  deleteTransaction,
} = require("../controllers/transactionController");

const router = express.Router();

router
  .get("/transaction", getTransactions)
  .post("/transaction", makeTransaction)
  .delete("/transaction/:id", deleteTransaction);
//   .get("/transaction/:id", getBill)
//   .get("/transaction", getBills)
//   .put("/transaction/:id", updateBill)

module.exports = router;
