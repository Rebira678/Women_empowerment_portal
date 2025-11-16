const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    category: {
      type: String,
      enum: ["mentor", "video", "program"],
      required: true,
    },
    img: String, // for mentors
    url: String, // for videos
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resource", resourceSchema);
