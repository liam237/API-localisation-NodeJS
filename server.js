import express from "express";
import http from "http";
import { Server as socketIo } from "socket.io";
import dotenv from "dotenv";
import connectDB from "./config/mangoose_mongodb.js";
import authRoutes from "./routes/authRoutes.js";
import vehicleRoutes from "./routes/vehicleRoutes.js";
import VehicleSimulator from "./VehicleSimulator.js";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new socketIo(server, {
  cors: {
    origin: "*",
  },
});

connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/vehicles", vehicleRoutes);

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
const simulator = new VehicleSimulator();

simulator.on("position", async (data) => {
  console.log("Données de position reçues:", data);
  const {
    vehicleId: truckId,
    position: { lat: latitude, lon: longitude },
  } = data;

  if (!truckId || !latitude || !longitude) {
    console.error("Champs obligatoires manquants:", {
      truckId,
      latitude,
      longitude,
    });
    return;
  }

  try {
    const newPosition = new Position({
      truckId,
      latitude,
      longitude,
    });
    await newPosition.save();
    io.emit("position", newPosition);
  } catch (err) {
    console.error("position:", err.message);
  }
});

simulator.on("alert", (data) => {
  io.emit("alert", data);
});
simulator.start();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
