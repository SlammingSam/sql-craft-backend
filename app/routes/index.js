import { Router } from "express";

import InventoryRoutes from "./inventory.routes.js";
import BlocksRoutes from "./blocks.routes.js";
import EnchantmentsRoutes from "./enchantments.routes.js";
import AchievementsRoutes from "./achievements.routes.js";
import RecipiesRoutes from "./recipies.routes.js";
import ItemsRoutes from "./items.routes.js";
import PlayerRoutes from "./player.routes.js";
import EffectsRoutes from "./effects.routes.js";
import ChunkRoutes from "./chunk.routes.js";
import EntityRoutes from "./entity.routes.js";
import WorldsRoutes from "./worlds.routes.js";
import WorldSettingsRoutes from "./worldSettings.routes.js";
import DimentionsRoutes from "./dimentions.routes.js";
import BiomeRoutes from "./biome.routes.js";
import GeneratedStructuresRoutes from "./generatedStructures.routes.js";
import BlockLootRoutes from "./blockLoot.routes.js";
import FoodRoutes from "./foods.routes.js";
import MaterialRoutes from "./materials.routes.js";
import ParticleRoutes from "./particles.routes.js";

const router = Router();

router.use("/inventory", InventoryRoutes);
router.use("/blocks", BlocksRoutes);
router.use("/enchantments", EnchantmentsRoutes);
router.use("/achievements", AchievementsRoutes);
router.use("/recipies", RecipiesRoutes);
router.use("/items", ItemsRoutes);
router.use("/player", PlayerRoutes);
router.use("/effects", EffectsRoutes);
router.use("/chunk", ChunkRoutes);
router.use("/entity", EntityRoutes);
router.use("/worlds", WorldsRoutes);
router.use("/world-settings", WorldSettingsRoutes);
router.use("/dimentions", DimentionsRoutes);
router.use("/biome", BiomeRoutes);
router.use("/generated-structures", GeneratedStructuresRoutes);
router.use("/blockLoot", BlockLootRoutes);
router.use("/foods", FoodRoutes);
router.use("/materials", MaterialRoutes);
router.use("/particles", ParticleRoutes);

export default router;
