import { Router } from "express";
import WorldsController from "../controllers/worlds.controller.js";

const router = Router();

// Create a new world
router.post("/", WorldsController.create);

// Retrieve all worlds
router.get("/", WorldsController.findAll);

// Retrieve a single world by id
router.get("/:id", WorldsController.findOne);

// Update a world by id
router.put("/:id", WorldsController.update);

// Delete a world by id
router.delete("/:id", WorldsController.delete);

// Delete all worlds
router.delete("/", WorldsController.deleteAll);

export default router;
