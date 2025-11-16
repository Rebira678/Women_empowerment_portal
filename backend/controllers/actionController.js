// controllers/actionController.js
const User = require("../models/user");
const Resource = require("../models/Resource");

exports.takeAction = async (req, res) => {
  const { type, resourceId } = req.body;
  const userId = req.user.id; // from auth middleware

  try {
    const user = await User.findById(userId);
    const resource = await Resource.findById(resourceId);
    if (!resource) return res.status(404).json({ error: "Resource not found" });

    if (type === "mentor") {
      if (!user.bookedMentors.includes(resourceId))
        user.bookedMentors.push(resourceId);
    } else if (type === "video") {
      if (!user.savedVideos.includes(resourceId))
        user.savedVideos.push(resourceId);
    } else if (type === "program") {
      if (!user.appliedPrograms.includes(resourceId))
        user.appliedPrograms.push(resourceId);
    } else {
      return res.status(400).json({ error: "Invalid action type" });
    }

    await user.save();
    res.json({ success: true, message: `${type} action saved!` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
