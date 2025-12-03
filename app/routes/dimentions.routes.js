import { Router } from 'express';
import DimentionsController from '../controllers/dimentions.controller.js';

const router = Router();

// Create a new dimension
router.post('/', DimentionsController.create);

// Retrieve all dimensions
router.get('/', DimentionsController.findAll);

// Retrieve a single dimension by id
router.get('/:id', DimentionsController.findOne);

// Update a dimension by id
router.put('/:id', DimentionsController.update);

// Delete a dimension by id
router.delete('/:id', DimentionsController.delete);

// Delete all dimensions
router.delete('/', DimentionsController.deleteAll);

export default router;
