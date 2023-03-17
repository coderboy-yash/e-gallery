import User from "../models/User.js";

export const updateImage = async (req, res, next) => {
  const user = req.body.username;
  const updateImages = req.body.image;

  try {
    const updatedUser = await User.findOneAndUpdate(
      { username: user }, // Filter by user
      { url: url, format: format, height: height, width: width, bytes: bytes }, // New data to update
      { new: true } // Return the updated document
    );
    console.log(updatedUser);
    res.status(200).send(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in updating user");
  }
};
