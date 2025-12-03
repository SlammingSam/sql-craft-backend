import { Router } from "express";
import BiomeController from "../controllers/biome.controller.js";

const router = Router();

// Create a new biome
router.post("/", BiomeController.create);

// Retrieve all biomes
router.get("/", BiomeController.findAll);

// Retrieve a single biome by id
router.get("/:id", BiomeController.findOne);

// Update a biome by id
router.put("/:id", BiomeController.update);

// Delete a biome by id
router.delete("/:id", BiomeController.delete);

// Delete all biomes
router.delete("/", BiomeController.deleteAll);

export default router;
