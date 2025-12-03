import { Router } from "express";
import BlocksController from "../controllers/blocks.controller.js";

const router = Router();

// Create a new block
router.post("/", BlocksController.create);

// Retrieve all blocks
router.get("/", BlocksController.findAll);

// Retrieve a single block by id
router.get("/:id", BlocksController.findOne);

// Update a block by id
router.put("/:id", BlocksController.update);

// Delete a block by id
router.delete("/:id", BlocksController.delete);

// Delete all blocks
router.delete("/", BlocksController.deleteAll);

export default router;
