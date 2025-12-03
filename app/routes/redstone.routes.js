import { Router } from "express";
import RedstoneController from "../controllers/redstone.controller.js";

const router = Router();

// Create a new redstone entry
router.post("/", RedstoneController.create);

// Retrieve all redstone entries
router.get("/", RedstoneController.findAll);

// Retrieve a single redstone entry by id
router.get("/:id", RedstoneController.findOne);

// Update a redstone entry by id
router.put("/:id", RedstoneController.update);

// Delete a redstone entry by id
router.delete("/:id", RedstoneController.delete);

// Delete all redstone entries
router.delete("/", RedstoneController.deleteAll);

export default router;
