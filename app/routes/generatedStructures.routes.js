import { Router } from "express";
import GeneratedStructuresController from "../controllers/generatedStructures.controller.js";

const router = Router();

// Create a new generated structure
router.post("/", GeneratedStructuresController.create);

// Retrieve all generated structures
router.get("/", GeneratedStructuresController.findAll);

// Retrieve a single generated structure by id
router.get("/:id", GeneratedStructuresController.findOne);

// Update a generated structure by id
router.put("/:id", GeneratedStructuresController.update);

// Delete a generated structure by id
router.delete("/:id", GeneratedStructuresController.delete);

// Delete all generated structures
router.delete("/", GeneratedStructuresController.deleteAll);

export default router;
