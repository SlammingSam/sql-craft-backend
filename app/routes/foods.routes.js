import { Router } from 'express';
import FoodsController from '../controllers/foods.controller.js';

const router = Router();

// Create a new food
router.post('/', FoodsController.create);

// Retrieve all Foods
router.get('/', FoodsController.findAll);

// Retrieve a single food by id
router.get('/:id', FoodsController.findOne);

// Update an food by id
router.put('/:id', FoodsController.update);

// Delete an food by id
router.delete('/:id', FoodsController.delete);

// Delete all Foods
router.delete('/', FoodsController.deleteAll);

export default router;
