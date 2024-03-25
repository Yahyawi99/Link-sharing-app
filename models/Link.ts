import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Platform name is required"],
    },

    url: {
      type: String,
      require: [true, "Platform url is required"],
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

let Link: mongoose.Model<any>;
try {
  Link = mongoose.model("Link");
} catch (error) {
  Link = mongoose.model("Link", LinkSchema);
}

export default Link;
