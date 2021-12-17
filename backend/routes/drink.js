const express = require("express");
const Drink = require("../models/Drink");
const router = express.Router();


//GET/allDrinks
router.get("/", async (req, res) => {
  const drinks = await Drink.find();
  try {
    return res.status(200).json(drinks);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't get drinks" });
  }
});


//GET/drinkById
router.get("/drink/:id", async (req, res) => {
  const { id } = req.params;
  const singleDrink = await Drink.findById(id);
  try {
    return res.status(200).json(singleDrink);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't retrieve the drink" });
  }
});


//POST/drink
router.post("/drink", async (req, res) => {
  const drinkToCreate = await Drink.create(req.body);
  try {
    return res.status(201).json(drinkToCreate);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't create drink" });
  }
});
//PUT/drink => update
router.put("/drink/:id", async (req, res) => {
  const { id } = req.params;
  const drinkToUpdate = await Drink.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(drinkToUpdate);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't update the drink" });
  }
});

//DELETE/drink/Id
router.delete("/drink/:id", async (req, res) => {
  const { id } = req.params;
  const drinkToDelete = await Drink.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: "Success on deleting the drink" });
  } catch (error) {
    return res.status(500).json({ message: "Couldn't delete the drink" });
  }
});

module.exports = router;
