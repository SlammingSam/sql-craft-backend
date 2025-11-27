import { Router } from "express";

import InventoryRoutes from "./inventory.routes.js";
import BlocksRoutes from "./blocks.routes.js";
import EnchantmentsRoutes from "./enchantments.routes.js";
import EnchantmentRecipesRoutes from "./enchantmentRecipe.routes.js";
import AchievementsRoutes from "./achievements.routes.js";
import RecipiesRoutes from "./recipies.routes.js";
import ItemsRoutes from "./items.routes.js";
import RedstoneRoutes from "./redstone.routes.js";
import PlayerRoutes from "./player.routes.js";
import EffectsRoutes from "./effects.routes.js";
import ChunkRoutes from "./chunk.routes.js";
import EntityRoutes from "./entity.routes.js";
import VillagerRoutes from "./villager.routes.js";
import WorldsRoutes from "./worlds.routes.js";
import WorldSettingsRoutes from "./worldSettings.routes.js";
import DimentionsRoutes from "./dimentions.routes.js";
import BiomeRoutes from "./biome.routes.js";
import GeneratedStructuresRoutes from "./generatedStructures.routes.js";
import MobsRoutes from "./mobs.routes.js";


const router = Router();

router.use("/inventory", InventoryRoutes);
router.use("/blocks", BlocksRoutes);
router.use("/enchantments", EnchantmentsRoutes);
router.use("/enchantment-recipes", EnchantmentRecipesRoutes);
router.use("/achievements", AchievementsRoutes);
router.use("/recipies", RecipiesRoutes);
router.use("/items", ItemsRoutes);
router.use("/redstone", RedstoneRoutes);
router.use("/player", PlayerRoutes);
router.use("/effects", EffectsRoutes);
router.use("/chunk", ChunkRoutes);
router.use("/entity", EntityRoutes);
router.use("/villager", VillagerRoutes);
router.use("/worlds", WorldsRoutes);
router.use("/world-settings", WorldSettingsRoutes);
router.use("/dimentions", DimentionsRoutes);
router.use("/biome", BiomeRoutes);
router.use("/generated-structures", GeneratedStructuresRoutes);
router.use("/mobs", MobsRoutes);

export default router;
