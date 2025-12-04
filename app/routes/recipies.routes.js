import { Router } from 'express';
import RecipesController from '../controllers/recipies.controller.js';

const router = Router();

// Create a new recipe
router.post('/', RecipesController.create);

// Retrieve all recipes
router.get('/', RecipesController.findAll);

// Retrieve a single recipe by id
router.get('/:id', RecipesController.findOne);

// Update a recipe by id
router.put('/:id', RecipesController.update);

// Delete a recipe by id
router.delete('/:id', RecipesController.delete);

// Delete all recipes
router.delete('/', RecipesController.deleteAll);

export default router;
