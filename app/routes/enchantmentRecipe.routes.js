import { Router } from "express";
import EnchantmentRecipeController from "../controllers/enchantmentRecipe.controller.js";

const router = Router();

// Create a new enchantment recipe
router.post("/", EnchantmentRecipeController.create);

// Retrieve all enchantment recipes
router.get("/", EnchantmentRecipeController.findAll);

// Retrieve a single enchantment recipe by id
router.get("/:id", EnchantmentRecipeController.findOne);

// Update an enchantment recipe by id
router.put("/:id", EnchantmentRecipeController.update);

// Delete an enchantment recipe by id
router.delete("/:id", EnchantmentRecipeController.delete);

// Delete all enchantment recipes
router.delete("/", EnchantmentRecipeController.deleteAll);

export default router;
