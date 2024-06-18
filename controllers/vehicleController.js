import Vehicle from "../models/Vehicules.js";

export const getVehiclePositions = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
