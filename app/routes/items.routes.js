import { Router } from 'express';
import ItemsController from '../controllers/items.controller.js';

const router = Router();

// Create a new item
router.post('/', ItemsController.create);

// Retrieve all items
router.get('/', ItemsController.findAll);

// Retrieve a single item by id
router.get('/:id', ItemsController.findOne);

// Update an item by id
router.put('/:id', ItemsController.update);

// Delete an item by id
router.delete('/:id', ItemsController.delete);

// Delete all items
router.delete('/', ItemsController.deleteAll);

export default router;
