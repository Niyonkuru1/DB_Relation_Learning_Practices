import { House } from "../models/Houses";
import { Landlord } from "../models/Landlords";
import { User } from "../models/Users";

export const houseResolver = {
  Mutation: {
    async create_house(parent, args, context) {
      const {
        landlord_id,
        size,
        location,
        description,
        price,
        numberOfBeds,
        status,
        requests,
      } = args;

      const house = await House.create(args);

      const landlord = await Landlord.findByIdAndUpdate(
        landlord_id,
        { $push: { houses: house._id } },
        { new: true, useFindAndModify: false }
      );

      const user = await User.findByIdAndUpdate(
        user_id,
        { $push: { houses: house._id } },
        { new: true, useFindAndModify: false }
      );
      return house;
    },

    async deleteImage(parent, args, context) {
      // console.log(context);
      const { userId } = context;
      if (!userId) {
        throw new Error(
          "You are not logged in!, Please login to delete a photo to this country"
        );
      }
      const { imageId } = args;
      const deleteData = await Image.deleteOne({ _id: imageId });
      if (deleteData) {
        return true;
      }
      return false;
    },
  },
};
