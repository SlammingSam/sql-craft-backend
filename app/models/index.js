
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

// Associations (based on sqlcraft.plantuml)
// Player -> Inventory
db.Player.hasMany(db.Inventory, { foreignKey: "player_id" });
db.Inventory.belongsTo(db.Player, { foreignKey: "player_id" });

// Achievements -> Player
db.Player.hasMany(db.Achievements, { foreignKey: "player_id" });
db.Achievements.belongsTo(db.Player, { foreignKey: "player_id" });

// Effects -> Player, Items, Entity
db.Player.hasMany(db.Effects, { foreignKey: "player_id" });
db.Effects.belongsTo(db.Player, { foreignKey: "player_id" });
db.Items.hasMany(db.Effects, { foreignKey: "item_id" });
db.Effects.belongsTo(db.Items, { foreignKey: "item_id" });
db.Entity.hasMany(db.Effects, { foreignKey: "entity_id" });
db.Effects.belongsTo(db.Entity, { foreignKey: "entity_id" });

// Items <-> Enchantments, EnchantmentRecipes, Recipes, Inventory, Chunk
db.Items.hasMany(db.Enchantments, { foreignKey: "item_id" });
db.Enchantments.belongsTo(db.Items, { foreignKey: "item_id" });
db.Enchantments.hasMany(db.EnchantmentRecipes, { foreignKey: "enchantment_id" });
db.EnchantmentRecipes.belongsTo(db.Enchantments, { foreignKey: "enchantment_id" });
db.EnchantmentRecipes.belongsTo(db.Items, { foreignKey: "item_id" });

db.Items.hasMany(db.Recipies, { foreignKey: "output_item_id" });
db.Recipies.belongsTo(db.Items, { foreignKey: "output_item_id" });

db.Items.hasMany(db.Inventory, { foreignKey: "item_id" });
db.Inventory.belongsTo(db.Items, { foreignKey: "item_id" });

db.Blocks.hasMany(db.Inventory, { foreignKey: "block_id" });
db.Inventory.belongsTo(db.Blocks, { foreignKey: "block_id" });

db.Items.belongsTo(db.Chunk, { foreignKey: "chunk_id" });
db.Chunk.hasMany(db.Items, { foreignKey: "chunk_id" });

// Worlds -> Dimentions, WorldSettings
db.Worlds.hasMany(db.Dimentions, { foreignKey: "world_id" });
db.Dimentions.belongsTo(db.Worlds, { foreignKey: "world_id" });
db.WorldSettings.hasMany(db.Worlds, { foreignKey: "setting_id" });
db.Worlds.belongsTo(db.WorldSettings, { foreignKey: "setting_id" });

// Dimentions -> Chunk, Biome
db.Dimentions.hasMany(db.Chunk, { foreignKey: "dimension_id" });
db.Chunk.belongsTo(db.Dimentions, { foreignKey: "dimension_id" });
db.Dimentions.hasMany(db.Biome, { foreignKey: "dimension_id" });
db.Biome.belongsTo(db.Dimentions, { foreignKey: "dimension_id" });

// Chunk -> Entity, Player (location)
db.Chunk.hasMany(db.Entity, { foreignKey: "chunk_id" });
db.Entity.belongsTo(db.Chunk, { foreignKey: "chunk_id" });
db.Chunk.hasMany(db.Player, { foreignKey: "current_chunk_id" });
db.Player.belongsTo(db.Chunk, { foreignKey: "current_chunk_id" });

// Entity -> Mobs (is a), Villager (is a)
db.Entity.hasOne(db.Mobs, { foreignKey: "entity_id" });
db.Mobs.belongsTo(db.Entity, { foreignKey: "entity_id" });
db.Entity.hasOne(db.Villager, { foreignKey: "entity_id" });
db.Villager.belongsTo(db.Entity, { foreignKey: "entity_id" });

// Biome -> GeneratedStructures
db.Biome.hasMany(db.GeneratedStructures, { foreignKey: "biome_id" });
db.GeneratedStructures.belongsTo(db.Biome, { foreignKey: "biome_id" });

// Redstone -> Items
db.Items.hasMany(db.Redstone, { foreignKey: "item_id" });
db.Redstone.belongsTo(db.Items, { foreignKey: "item_id" });

export default db;
