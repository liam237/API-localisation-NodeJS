// client.js
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

socket.on("connect", () => {
  console.log("Connected to server");

  // Envoyer un événement
  socket.emit("position", {
    vehicleId: "123",
    coordinates: [12.34, 56.78],
  });

  // Écouter les événements de position des véhicules
  socket.on("vehicle-position", (data) => {
    console.log("Vehicle Position:", data);
  });

  // Écouter les événements d'alerte des véhicules
  socket.on("vehicle-alert", (data) => {
    console.log("Vehicle Alert:", data);
  });
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});
