const asyncHandler = require("express-async-handler");
const Transaction = require("../../models/transactionModel");
const { incrementByOneCounterByType } = require("../counterController");

const moment = require("moment/moment");
const { isValidObjectId } = require("mongoose");

const ObjectId = require("mongodb").ObjectId;

const makePaymentAdvanceWithPayment = asyncHandler(
  async (userId, type, amount) => {
    const getCounter = await incrementByOneCounterByType("transaction");

    const transactionId = `AFF${moment(new Date()).format("DDMMYYYY")}${
      getCounter?.counter?.counter
    }`;

    if (!isValidObjectId(userId) || !type || !amount) {
      return false;
    }

    const createTransaction = await Transaction.create({
      user: new ObjectId(userId),
      payment: amount,
      type,
      transactionId,
    });

    return true;
  }
);

module.exports = {
  makePaymentAdvanceWithPayment,
};
