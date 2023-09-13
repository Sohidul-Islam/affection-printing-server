const express = require("express");
const {
  getChallan,
  getChallans,
  addChallan,
  updateChallan,
  deleteChallan,
} = require("../controllers/challanController");

const router = express.Router();

router
  .get("/challan/:id", getChallan)
  .get("/challan", getChallans)
  .post("/challan", addChallan)
  .put("/challan/:id", updateChallan)
  .delete("/challan/:id", deleteChallan);

module.exports = router;
