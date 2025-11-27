
import { Sequelize } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

// Models
//on Delete

/* Sql Craft Models
Inventory 
Blocks
Enchantments
EnchantmentRecipes
Achievements
Recipies
Items
Redstone
Player
Effects
Chunk
Entity
Villager
Worlds
WorldSettings
Dimentions
Biome
GeneratedStructures
Mobs
*/

import Inventory from "./inventory.model.js";
import Blocks from "./blocks.model.js";
import Enchantments from "./enchantments.model.js";
import EnchantmentRecipes from "./enchantmentRecipe.model.js";
import Achievements from "./achievements.model.js";
import Recipies from "./recipies.model.js";
import Items from "./items.model.js";
import Redstone from "./redstone.model.js";
import Player from "./player.model.js";
import Effects from "./effects.model.js";
import Chunk from "./chunk.model.js";
import Entity from "./entity.model.js";
import Villager from "./villager.model.js";
import Worlds from "./worlds.model.js";
import WorldSettings from "./worldSettings.model.js";
import Dimentions from "./dimentions.model.js";
import Biome from "./biome.model.js";
import GeneratedStructures from "./generatedStructures.model.js";
import Mobs from "./mobs.model.js";

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Inventory = Inventory;
db.Blocks = Blocks;
db.Enchantments = Enchantments;
db.EnchantmentRecipes = EnchantmentRecipes;
db.Achievements = Achievements;
db.Recipies = Recipies;
db.Items = Items;
db.Redstone = Redstone;
db.Player = Player;
db.Effects = Effects;
db.Chunk = Chunk;
db.Entity = Entity;
db.Villager = Villager;
db.Worlds = Worlds;
db.WorldSettings = WorldSettings;
db.Dimentions = Dimentions;
db.Biome = Biome;
db.GeneratedStructures = GeneratedStructures;
db.Mobs = Mobs;

// Define associations here if needed


export default db;
