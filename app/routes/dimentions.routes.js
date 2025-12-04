import { Router } from 'express';
import DimensionsController from '../controllers/dimentions.controller.js';

const router = Router();

// Create a new dimension
router.post('/', DimensionsController.create);

// Retrieve all dimensions
router.get('/', DimensionsController.findAll);

// Retrieve a single dimension by id
router.get('/:id', DimensionsController.findOne);

// Update a dimension by id
router.put('/:id', DimensionsController.update);

// Delete a dimension by id
router.delete('/:id', DimensionsController.delete);

// Delete all dimensions
router.delete('/', DimensionsController.deleteAll);

export default router;
