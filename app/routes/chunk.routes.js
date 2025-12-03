import { Router } from "express";
import ChunkController from "../controllers/chunk.controller.js";

const router = Router();

// Create a new chunk
router.post("/", ChunkController.create);

// Retrieve all chunks
router.get("/", ChunkController.findAll);

// Retrieve a single chunk by id
router.get("/:id", ChunkController.findOne);

// Update a chunk by id
router.put("/:id", ChunkController.update);

// Delete a chunk by id
router.delete("/:id", ChunkController.delete);

// Delete all chunks
router.delete("/", ChunkController.deleteAll);

export default router;
