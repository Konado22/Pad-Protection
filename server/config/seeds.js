const db = require("./connection");
const { User, Assets, Items, Rooms, Policy } = require("../models");

db.once("open", async () => {
  await Assets.deleteMany();
  await User.deleteMany();
  await Rooms.deleteMany();
  await Items.deleteMany();
  console.log("test");

  const rooms = await Rooms.insertMany([
    { name: 'Kitchen' },
    { name: 'Living Room' },
    { name: 'Bed Room' },
    { name: 'Garage' },
    { name: 'Guest Room' }
  ]);

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

  console.log(rooms)

  const items = await Items.insertMany([
    {
      itemName: "xbox",
      itemCategory: "electronics",
      itemValue: 300,
      room: rooms[1]._id,
    },
    {
      itemName: "necklace",
      itemCategory: "jewelry",
      itemValue: 1000,
      room: rooms[2]._id,
    },
  ]);
  console.log("roomId inserted");

  process.exit();
});
