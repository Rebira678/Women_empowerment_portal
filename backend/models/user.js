// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "organization", "admin"],
      default: "user",
    },

    // new fields to track user actions
    bookedMentors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Resource" }],
    savedVideos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Resource" }],
    appliedPrograms: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Resource" },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
