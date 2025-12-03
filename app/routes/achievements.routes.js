import { Router } from 'express';
import AchievementsController from '../controllers/achievements.controller.js';

const router = Router();

// Create a new achievement
router.post('/', AchievementsController.create);

// Retrieve all achievements
router.get('/', AchievementsController.findAll);

// Retrieve a single achievement by id
router.get('/:id', AchievementsController.findOne);

// Update an achievement by id
router.put('/:id', AchievementsController.update);

// Delete an achievement by id
router.delete('/:id', AchievementsController.delete);

// Delete all achievements
router.delete('/', AchievementsController.deleteAll);

export default router;
