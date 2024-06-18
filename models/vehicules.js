import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema({
  vehicleId: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: { type: String, default: "Point" },
    coordinates: [Number],
  },
  lastUpdate: {
    type: Date,
    default: Date.now,
  },
});

const Vehicle = mongoose.model("Vehicle", VehicleSchema);

export default Vehicle;
