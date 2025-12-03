import { Router } from 'express';
import EnchantmentsController from '../controllers/enchantments.controller.js';

const router = Router();

// Create a new enchantment
router.post('/', EnchantmentsController.create);

// Retrieve all enchantments
router.get('/', EnchantmentsController.findAll);

// Retrieve a single enchantment by id
router.get('/:id', EnchantmentsController.findOne);

// Update an enchantment by id
router.put('/:id', EnchantmentsController.update);

// Delete an enchantment by id
router.delete('/:id', EnchantmentsController.delete);

// Delete all enchantments
router.delete('/', EnchantmentsController.deleteAll);

export default router;
