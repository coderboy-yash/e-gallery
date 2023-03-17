import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    images: [
      {
        url: {
          type: String,
        },
        format: {
          type: String,
        },
        height: {
          type: number,
        },
        width: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model("user", UserSchema);
