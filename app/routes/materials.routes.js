import { Router } from 'express';
import MaterialsController from '../controllers/Materials.controller.js';

const router = Router();

// Create a new Material
router.post('/', MaterialsController.create);

// Retrieve all Materials
router.get('/', MaterialsController.findAll);

// Retrieve a single Material by id
router.get('/:id', MaterialsController.findOne);

// Update an Material by id
router.put('/:id', MaterialsController.update);

// Delete an Material by id
router.delete('/:id', MaterialsController.delete);

// Delete all Materials
router.delete('/', MaterialsController.deleteAll);

export default router;
