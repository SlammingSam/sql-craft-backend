import { Router } from "express";
import WorldSettingsController from "../controllers/worldSettings.controller.js";

const router = Router();

// Create a new world setting
router.post("/", WorldSettingsController.create);

// Retrieve all world settings
router.get("/", WorldSettingsController.findAll);

// Retrieve a single world setting by id
router.get("/:id", WorldSettingsController.findOne);

// Update a world setting by id
router.put("/:id", WorldSettingsController.update);

// Delete a world setting by id
router.delete("/:id", WorldSettingsController.delete);

// Delete all world settings
router.delete("/", WorldSettingsController.deleteAll);

export default router;
