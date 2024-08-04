import mongoose, { model, Schema } from "mongoose";

const landlordSchema = new Schema({
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

const Landlord = model("Landlord", landlordSchema);

export { Landlord };
