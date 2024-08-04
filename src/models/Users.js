import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  pass_word: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },
  landlords: [{ type: String }],

  landlords: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Landlord",
    },
  ],
  houses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "House",
    },
  ],
  requests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Request",
    },
  ],
});

const User = model("User", userSchema);

export { User };
