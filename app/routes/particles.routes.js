import { Router } from 'express';
import ParticlesController from '../controllers/Particles.controller.js';

const router = Router();

// Create a new Particle
router.post('/', ParticlesController.create);

// Retrieve all Particles
router.get('/', ParticlesController.findAll);

// Retrieve a single Particle by id
router.get('/:id', ParticlesController.findOne);

// Update an Particle by id
router.put('/:id', ParticlesController.update);

// Delete an Particle by id
router.delete('/:id', ParticlesController.delete);

// Delete all Particles
router.delete('/', ParticlesController.deleteAll);

export default router;
