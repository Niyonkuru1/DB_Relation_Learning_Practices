import mongoose, { model, Schema } from "mongoose";

const requestSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },

  house_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "House",
  },

  landlord_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Landlord",
  },
});

const Request = model("Request", requestSchema);

export { Request };
