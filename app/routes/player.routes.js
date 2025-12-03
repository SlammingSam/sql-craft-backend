import { Router } from "express";
import PlayerController from "../controllers/player.controller.js";

const router = Router();

// Create a new player
router.post("/", PlayerController.create);

// Retrieve all players
router.get("/", PlayerController.findAll);

// Retrieve a single player by id
router.get("/:id", PlayerController.findOne);

// Update a player by id
router.put("/:id", PlayerController.update);

// Delete a player by id
router.delete("/:id", PlayerController.delete);

// Delete all players
router.delete("/", PlayerController.deleteAll);

export default router;
