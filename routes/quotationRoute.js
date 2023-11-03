const express = require("express");
const {
  getQuotation,
  getQuotations,
  addQuotation,
  updateQuotation,
  deleteQuotation,
} = require("../controllers/quotationsController");

const router = express.Router();

router
  .get("/quotation/:id", getQuotation)
  .get("/quotation", getQuotations)
  .post("/quotation", addQuotation)
  .put("/quotation/:id", updateQuotation)
  .delete("/quotation/:id", deleteQuotation);

module.exports = router;
