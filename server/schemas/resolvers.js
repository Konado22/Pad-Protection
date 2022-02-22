const { AuthenticationError } = require("apollo-server-express");
const { User, Items, Rooms, Assets, Policy } = require("../models");
const { signToken } = require("../utils/auth");

//

const resolvers = {
  Query: {
    items: async (parent, args, context) => {
      return await Items.find({}).populate("room");
    },

    item: async (parent, { _id }) => {
      return await Items.findById(_id).populate("room");
    },

    room: async (parent, { _id }) => {
      return await Rooms.findOne({ _id }).populate("room");
    },

    rooms: async (parent, args, context) => {
      return await Rooms.find({});
    },

    assets: async (parent, args, context) => {
      const assets = await Assets.find({});
      console.log(assets);
      return assets;
    },

    asset: async (parent, { _id }) => {
      return await Assets.findOne({ _id }).populate({
        path: "rooms",
        populate: [{ path: "rooms" }, { path: "items" }],
      });
    },

    policy: async (parent, { _id }) => {
      return await Policy.findOne({ _id });
    },

    policies: async (parent, args, context) => {
      return await Policy.find({});
    },

    roomItems: async (parent, { _id }) => {
      return await Rooms.findOne({}).populate("items");
    },

    assetRooms: async (parent, { _id }) => {
      return await Assets.findOne({}).populate("rooms");
    },

    user: async (parent, args, context) => {
      console.log(context.user);
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id }).populate(
          "assets"
        );
        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
  },
  Mutation: {
    addAsset: async (parent, { name, estimatedValue, ppr, purchasedDate, location }, context) => {
      if (context.user) {     
        const assetArrayUpdate = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { assets: name, estimatedValue, ppr, purchasedDate, location }},
          { new: true }
        );

        return assetArrayUpdate;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addRoom: async (parent, { name }, context) => {
      console.log(context)
      if (context.user) {
        const roomArrayUpdate = await Assets.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { rooms: name }},
            { new: true },
        );
        return roomArrayUpdate;
      }
      throw new AuthenticationError('You need to be logged in!')
    },
    
    addItem: async (parent, { itemName, itemCategory, itemValue, purchasedDate }) => {
      console.log(context)
      if (context.user) {
        const itemArrayUpdate = await Rooms.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { itemName, itemCategory, itemValue, purchasedDate }},
          { new: true },
        );
        return itemArrayUpdate;
      }
      throw new AuthenticationError('You need to be logged in!')
    },
  // NEEDS REFACTORING
  //  updateItem: async (parent, { id, itemName, itemCatergory, itemValue }, context) => {
  //    if (context.user) {}
  //   return await Items.findOneAndUpdate(
  //      { _id: id },
  //      { itemName },
  //      { itemCatergory },
  //      { itemValue },
  //      // Return the newly updated object instead of the original
  //      { new: true }
  //    );
  //  },
  
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },


    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
