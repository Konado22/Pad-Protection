const db = require("./connection");
const { User, Assets, Items, Rooms, Policy } = require("../models");

db.once("open", async () => {
  await Assets.deleteMany();
  await User.deleteMany();
  console.log("test");

  const assets = await Assets.insertMany([
    {
      name: "city house",
      estimatedValue: 450000,
    },
    {
      name: "mountain house",
      estimatedValue: 550000,
    },
  ]);
  console.log("assets inserted");

  const user = await User.insertMany([
    {
      firstName: "Jesse",
      lastName: "Draper",
      email: "jesse@gmail.com",
      password: "pword123",
      assets: [assets[0]._id],
    },
    {
      firstName: "Calvin",
      lastName: "Swomley",
      email: "calvin@gmail.com",
      password: "password99",
      assets: [assets[1]._id],
    },
  ]);

  const items = await Items.insertMany([
    {
      name: "xbox",
      category: "electronics",
      value: 300,
    },
    {
      name: "necklace",
      category: "jewelry",
      value: 1000,
    },
  ]);

  process.exit();
});
