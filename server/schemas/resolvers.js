const { AuthenticationError } = require("apollo-server-express");
const { User, Items, Rooms, Assets, Policy } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    items: async (parent, args, context) => {
      return await Items.find({}).populate("room");
    },

    item: async (parent, { _id }) => {
      return await Items.findOne({ _id });
    },

    room: async (parent, { _id }) => {
      return await Rooms.findOne({ _id }).populate("items");
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
        const user = await User.findOne({ _id: context.user._id }).populate({
          path: "assets",
          populate: [{ path: "assets" }, { path: "rooms" }, { path: "items" }],
        });
        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
  },
  Mutation: {
    addPolicy: async (parent, { name, provider, policyId, ppc }, context) => {
      console.log(context);
      if (context.user) {
        const policyArrayUpdate = await Assets.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { policy: name, provider, policyId, ppc } }
        );
        return policyArrayUpdate;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addAsset: async (
      parent,
      { name, estimatedValue, purchasedDate, location },
      context
    ) => {
      if (context.user) {
        const asset = await Assets.create({
          name,
          estimatedValue,
          ppr: 0,
          purchasedDate,
          location,
        });
        const assetArrayUpdate = await User.findByIdAndUpdate(
          { _id: context.user._id },
          {
            $push: {
              assets: asset,
            },
          },
          { new: true }
        );

        return asset;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addRoom: async (parent, { name }, context) => {
      console.log(context.headers.referer.split("/")[4]);
      const id = context.headers.referer.split("/")[4];

      const room = await Rooms.create({ name, value: 0 });

      if (context.user) {
        const roomArrayUpdate = await Assets.findByIdAndUpdate(
          { _id: id },
          { $push: { rooms: room } },
          { new: true }
        );
        return room;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addItem: async (
      parent,
      { itemName, itemCategory, itemValue, purchasedDate },
      context
    ) => {
      console.log(context.headers.referer.split("/")[4]);

      const id = context.headers.referer.split("/")[4];

      const item = await Items.create({
        itemName,
        itemCategory,
        itemValue,
        purchasedDate,
      });

      const room = await Rooms.findOne({ _id: id });
      const value = room.value + item.itemValue;
      console.log(value);
      if (context.user) {
        const itemArrayUpdate = await Rooms.findByIdAndUpdate(
          { _id: id },
          { $push: { items: item } },
          { new: true }
        );
        const updateValue = await Rooms.findByIdAndUpdate(
          { _id: id },
          { value: value },
          { new: true }
        );
        return item;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    updateItem: async (
      parent,
      { itemName, itemCategory, itemValue, purchasedDate },
      context
    ) => {
      console.log(context.headers.referer.split("/")[4]);
      console.log("here");
      const id = context.headers.referer.split("/")[4];

      const item = await Items.findByIdAndUpdate(id, {
        itemName,
        itemCategory,
        itemValue,
        purchasedDate,
      });
      return item;
      // }
      // throw new AuthenticationError("You need to be logged in!");
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
    removeItem: async (parent, { _id }) => {
      return Items.findOneAndDelete({ _id: _id });
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
