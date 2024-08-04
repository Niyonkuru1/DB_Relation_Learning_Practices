import mongoose, { model, Schema } from "mongoose";

const houseSchema = new Schema({
  landlord_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Landlord",
  },

  size: {
    type: Number,
    required: true,
  },
  location: String,
  description: String,
  price: Number,
  numberOfBeds: Number,
  status: String,

  requests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Request",
    },
  ],
});

const House = model("House", houseSchema);

export { House };
