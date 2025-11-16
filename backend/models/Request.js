const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    resourceId: { type: mongoose.Schema.Types.ObjectId, ref: "Resource" },
    requesterId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: {
      type: String,
      enum: ["pending", "approved", "denied"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Request", requestSchema);
