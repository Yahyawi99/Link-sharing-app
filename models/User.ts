import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      minlength: 3,
      maxlength: 100,
      default: null,
    },

    lastName: {
      type: String,
      minlength: 3,
      maxlength: 100,
      default: null,
    },

    username: {
      type: String,
      minlength: 3,
      maxlength: 100,
      require: [true, "Username is required"],
    },

    avatar: {
      type: String,
      default: null,
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

// =========Hash the password after every save=========
UserSchema.pre("save", async function () {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password as string, salt);
  }
});

let User: mongoose.Model<any>;
try {
  User = mongoose.model("User");
} catch (error) {
  User = mongoose.model("User", UserSchema);
}

export default User;
