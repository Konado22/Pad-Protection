const { AuthenticationError } = require("apollo-server-express");
const { User, Items, Rooms, Assets, Policy } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
//
const resolvers = {
  Query: {

    items: async (parent, args, context) => {
      return await Items.find({}).populate('room');
    },

    item: async (parent, { _id }) => {
      return await Items.findById(_id).populate('room')
    },

    room: async (parent, { _id }) => {
    return await Rooms.findOne({_id}).populate('room')
    },

    rooms: async (parent, args, context) => {
      return await Rooms.find({})
      
    },

    assets: async (parent, args, context) => {
        const assets = await Assets.find({})
        console.log(assets)
        return assets
      },

    asset: async (parent, { _id }) => {
      return await Assets.findOne({_id}).populate('asset')
      },

    policy: async (parent, { _id }) => {
      return await Policy.findOne({_id});
    },

    policies: async (parent, args, context) => {
      return await Policy.find({});
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          populate: "assets",
        });

        // user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    // order: async (parent, { _id }, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: "orders.products",
    //       populate: "category",
    //     });

    //     return user.orders.id(_id);
    //   }

    //   throw new AuthenticationError("Not logged in");
    // },
    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;
    //   const order = new Order({ products: args.products });
    //   const line_items = [];

    //   const { products } = await order.populate("products").execPopulate();

    //   for (let i = 0; i < products.length; i++) {
    //     const product = await stripe.products.create({
    //       name: products[i].name,
    //       description: products[i].description,
    //       images: [`${url}/images/${products[i].image}`],
    //     });

    //     const price = await stripe.prices.create({
    //       product: product.id,
    //       unit_amount: products[i].price * 100,
    //       currency: "usd",
    //     });

    //     line_items.push({
    //       price: price.id,
    //       quantity: 1,
    //     });
    //   }

    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ["card"],
    //     line_items,
    //     mode: "payment",
    //     success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${url}/`,
    //   });

    //   return { session: session.id };
    // },
  },
  Mutation: {
    // Asset: Add 
    addRoom: async (parent, { name, value }) => {
      return await Rooms.create({ name, value });
    },
    addItem: async (parent, { itemName, itemCatergory, itemValue, room }) => {
      return await Items.create({ itemName, itemCatergory, itemValue, room });
    },

    updateItem: async (parent, { id, itemName, itemCatergory, itemValue }) => {
      return await Items.findOneAndUpdate(
        { _id: id }, 
        { itemName },
        { itemCatergory },
        { itemValue },
        // Return the newly updated object instead of the original
        { new: true }
      );
    },

    // addUser: async (parent, args) => {
    //   const user = await User.create(args);
    //   const token = signToken(user);
    //   return { token, user };
    // },

    // addOrder: async (parent, { products }, context) => {
    //   console.log(context);
    //   if (context.user) {
    //     const order = new Order({ products });
    //     await User.findByIdAndUpdate(context.user._id, {
    //       $push: { orders: order },
    //     });
    //     return order;
    //   }
    //   throw new AuthenticationError("Not logged in");
    // },
    // updateUser: async (parent, args, context) => {
    //   if (context.user) {
    //     return await User.findByIdAndUpdate(context.user._id, args, {
    //       new: true,
    //     });
    //   }
    //   throw new AuthenticationError("Not logged in");
    // },
    // updateProduct: async (parent, { _id, quantity }) => {
    //   const decrement = Math.abs(quantity) * -1;
    //   return await Product.findByIdAndUpdate(
    //     _id,
    //     { $inc: { quantity: decrement } },
    //     { new: true }
    //   );
    // },
    addUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password });
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
