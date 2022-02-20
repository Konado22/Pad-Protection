const db = require("./connection");
const { User, Assets, Items, Rooms, Policy } = require("../models");

db.once("open", async () => {
  await Assets.deleteMany();
  await User.deleteMany();
  await Rooms.deleteMany();
  await Items.deleteMany();
  await Policy.deleteMany();

  console.log("db cleared");

  const items = await Items.insertMany([
    {
      itemName: "xbox",
      itemCategory: "electronics",
      itemValue: 300,
    },
    {
      itemName: "necklace",
      itemCategory: "jewelry",
      itemValue: 1000,
    },
    {
      itemName: "blender",
      itemCategory: "appliance",
      itemValue: "200",
    },
    {
      itemName: "television",
      itemCategory: "electronics",
      itemValue: "300",
    },
    {
      itemName: "bike",
      itemCategory: "gear",
      itemValue: "6000",
    },
    {
      itemName: "bed frame",
      itemCategory: "furniture",
      itemValue: "500",
    },
    {
      itemName: "skis",
      itemCategory: "gear",
      itemValue: "1100",
    },
    {
      itemName: "tent",
      itemCategory: "gear",
      itemValue: "350",
    },
    {
      itemName: "couch",
      itemCategory: "furniture",
      itemValue: "750",
    },
    {
      itemName: "chair",
      itemCategory: "furniture",
      itemValue: "350",
    },
    {
      itemName: "PC",
      itemCategory: "electronics",
      itemValue: "2000",
    },
  ]);
  console.log("items added");

  const policy = await Policy.insertMany([
    {
      name: "mountain house",
      provider: "state farm",
      policyId: "g7d9gd",
      ppc: 20000,
    },
    {
      name: "city house",
      provider: "state farm",
      policyId: "j9k3f3",
      ppc: 25000,
    },
  ]);
  console.log("policies added");

  const rooms = await Rooms.insertMany([
    { name: "Kitchen", value: 600, items: [items[2]._id] },
    { name: "Living Room", value: 1000, items: [items[3]._id, items[8]._id] },
    { name: "Bed Room", value: 1200, items: [items[5]._id, items[1]._id] },
    {
      name: "Garage",
      value: 2000,
      items: [items[4]._id, items[6]._id, items[7]._id],
    },
    { name: "Guest Room", value: 900, items: [items[9]._id, items[10]._id] },
  ]);
  console.log("rooms added");

  const assets = await Assets.insertMany([
    {
      name: "city house",
      estimatedValue: 450000,
      ppr: 10000,
      location: "Denver",
      policy: [policy[0]._id],
      rooms: [rooms[0]._id, rooms[1]._id, rooms[2]._id],
    },
    {
      name: "mountain house",
      estimatedValue: 550000,
      ppr: 15000,
      location: "Lake City",
      policy: [policy[1]._id],
      rooms: [rooms[3]._id, rooms[4]._id],
    },
  ]);
  console.log("assets added");

  const user = await User.insertMany([
    {
      firstName: "Jesse",
      lastName: "Draper",
      email: "jesse@gmail.com",
      password: "$2b$10$Hg0uoLLpBj1HrJoW0/s6keYIro.MFkGTyBztTwpgv00WdI1YfSijO",
      profile: "homeowner",
      assets: [assets[0]._id, assets[1]._id],
    },
    //PW: pword123
    {
      firstName: "Calvin",
      lastName: "Swomley",
      email: "calvin@gmail.com",
      password: "$2b$10$Hg0uoLLpBj1HrJoW0/s6keYIro.MFkGTyBztTwpgv00WdI1YfSijO",
      profile: "homeowner",
      assets: [assets[1]._id],
    },
    //PW: pword123
  ]);

  console.log(rooms);

  process.exit();
});
