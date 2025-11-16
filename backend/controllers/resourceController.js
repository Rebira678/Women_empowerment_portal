const Resource = require("../models/Resource");
const User = require("../models/user");

// Add new resource (Admin/Org)
exports.addResource = async (req, res) => {
  try {
    const { title, description, category, img, url } = req.body;
    if (!["mentor", "video", "program"].includes(category))
      return res.status(400).json({ message: "Invalid category" });

    const resource = await Resource.create({
      title,
      description,
      category,
      img,
      url,
      ownerId: req.user._id,
    });
    res.json(resource);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get resources by category
exports.getResources = async (req, res) => {
  const { category } = req.query;
  const resources = await Resource.find(category ? { category } : {});
  res.json(resources);
};

// Book / Save / Apply
exports.takeAction = async (req, res) => {
  const { type } = req.params; // mentor, video, program
  const { id } = req.body;

  const user = await User.findById(req.user._id);

  if (type === "mentor") {
    if (user.bookedMentors.includes(id))
      return res.json({ message: "Already booked" });
    user.bookedMentors.push(id);
  } else if (type === "video") {
    if (user.savedVideos.includes(id))
      return res.json({ message: "Already saved" });
    user.savedVideos.push(id);
  } else if (type === "program") {
    if (user.appliedPrograms.includes(id))
      return res.json({ message: "Already applied" });
    user.appliedPrograms.push(id);
  } else return res.status(400).json({ message: "Invalid type" });

  await user.save();
  res.json({ message: `${type} action successful` });
};
