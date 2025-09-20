import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Username is mandatory!"],
    
    },
    age: {
      type: Number,
      required: [true, "Age is mandatory"]
    },
    email: {
      type: String,
      required: [true, "Email is mandatory"],
      unique: true
    },
    password: {
      type: String,
      required: [true, "Password is mandatory"],
      minLength:[6,"min length 6"],
      unique: true
    }
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
