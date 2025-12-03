import { Router } from "express";
import EntityController from "../controllers/entity.controller.js";

const router = Router();

// Create a new entity
router.post("/", EntityController.create);

// Retrieve all entities
router.get("/", EntityController.findAll);

// Retrieve a single entity by id
router.get("/:id", EntityController.findOne);

// Update an entity by id
router.put("/:id", EntityController.update);

// Delete an entity by id
router.delete("/:id", EntityController.delete);

// Delete all entities
router.delete("/", EntityController.deleteAll);

export default router;
