import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food items

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    image: image_filename,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Food not added" });
  }
};

// all food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find();
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Food not found" });
  }
};

// remove food items
const removeFood = async (req, res) => {
  const foodId = req.body.id;
  try {
    const food = await foodModel.findById(foodId);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(food);
    res.json({ success: true, message: "Food Deleted" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Food not deleted" });
  }
};

export { addFood, listFood, removeFood };
