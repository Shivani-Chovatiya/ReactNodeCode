const mongoose = require("mongoose");
//const mongooseErrorHandler = require('mongoose-validation-error-message-handler');

const dataSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      // required:true
    },

    name: {
      type: String,
      //required: true
    },
    username: {
      type: String,
      //required: true
    },
    email: {
      type: String,
      //required: true
    },
    address: {
      street: {
        type: String,
        // required: true,
      },
      suite: {
        type: String,
        // required: true,
      },
      city: {
        type: String,
        // required: true,
      },
      zipcode: {
        type: String,
        // required: true,
      },
      geo: {
        lat: { type: String },
        lng: { type: String },
      },
    },

    phone: {
      type: String,
      //required: true
    },
    website: {
      type: String,
      //required: true
    },

    company: {
      name: { type: String },
      catchPhrase: { type: String },
      bs: { type: String },
    },
  },
  { timestamps: true }
);

const Data = mongoose.model("Data", dataSchema);
module.exports = Data;
