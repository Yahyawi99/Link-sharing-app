import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      minlength: 3,
      maxlength: 10,
      require: [true, "Please provide a username"],
    },

    email: {
      type: String,
      require: [true, "Please provide an email"],
      unique: true,
    },

    password: {
      type: String,
      require: [true, "Please provide a password"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User") || mongoose.model("User", userSchema);
