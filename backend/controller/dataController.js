// const Product = require("../models/ProductModel");
const Data = require("../model/DataModel");
const asyncHandler = require("express-async-handler");

const getData = asyncHandler(async (req, res) => {
  // const filters = req.query;
  // console.log(filters);

  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 3;
  const skip = (page - 1) * perPage;
  // console.log(page, perPage, skip);
  try {
    const data = await Data.find().skip(skip).limit(perPage);
    const totalUsers = await Data.countDocuments();
    // console.log(totalUsers);

    res.json({ data, totalUsers });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
  // const da = await Data.find({});
  // throw new Error("Some Eror");
  // console.log(da);
  // res.json(da);
});

module.exports = {
  getData,
};
