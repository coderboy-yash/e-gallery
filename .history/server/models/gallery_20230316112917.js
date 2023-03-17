import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("gallery", GallerySchema);
