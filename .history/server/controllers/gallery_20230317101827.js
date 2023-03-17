import User from "../models/User.js";

export const updateImage = async (req, res, next) => {
  const user = req.body.username;
  const updateImages = req.body.image;

  try {
    const updatedUser = await User.findOneAndUpdate(
      { username: user }, // Filter by user
      { images: updateImages },
      { new: true } // Return the updated document
    );
    // console.log(updatedUser);
    res.status(200).send(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in updating user");
  }
};
export const getUser = async (req, res, next) => {
  const user = req.query.user;

  User.find({ "images.username": user }, function (err, user) {
    if (err) {
      res.status(500).send("user not found");
      console.log(err);
    }
    res.status(200).send(user);
  });
};
