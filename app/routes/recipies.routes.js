import { Router } from "express";
import RecipiesController from "../controllers/recipies.controller.js";

const router = Router();

// Create a new recipe
router.post("/", RecipiesController.create);

// Retrieve all recipes
router.get("/", RecipiesController.findAll);

// Retrieve a single recipe by id
router.get("/:id", RecipiesController.findOne);

// Update a recipe by id
router.put("/:id", RecipiesController.update);

// Delete a recipe by id
router.delete("/:id", RecipiesController.delete);

// Delete all recipes
router.delete("/", RecipiesController.deleteAll);

export default router;
