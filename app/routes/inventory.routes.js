import inventory from "../controllers/inventory.controller.js";
import { Router } from "express";
var router = Router()

// Create a new Inventory
router.post("/", inventory.create);

// Retrieve all Inventory
router.get("/", inventory.findAll);

// Retrieve a single Inventory with id
router.get("/:id", inventory.findOne);

// Update a Inventory with id
router.put("/:id", inventory.update);

// Delete a Inventory with id
router.delete("/:id", inventory.delete);

// Delete all Inventory
router.delete("/", inventory.deleteAll);

export default router;