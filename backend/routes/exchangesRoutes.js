import express from "express";
import Exchange from "./../models/coins.exchanges.js";

const router = express.Router();

router.post("/exchanges", async (req, res) => {
  try {
    const data = req.body;

    if (!Array.isArray(data)) {
      const exchange = new Exchange(data);

      const response = await exchange.save();

      return res.status(200).json(response);
    }

    const responses = await Exchange.insertMany(data);

    return res.status(200).json(responses);
  } catch (err) {
    res.status(500).json({ message: "Error occurred while saving the data" });
  }
});

router.get("/exchanges", async (req, res) => {
  try {
    const response = await Exchange.find();

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: "Error occurred while fetching the data" });
  }
});

export default router;
