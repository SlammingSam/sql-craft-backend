
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
import Achievements from "./achievements.model.js";
import Recipies from "./recipies.model.js";
import Items from "./items.model.js";
import Player from "./player.model.js";
import Effects from "./effects.model.js";
import Chunk from "./chunk.model.js";
import Entity from "./entity.model.js";
import Worlds from "./worlds.model.js";
import WorldSettings from "./worldSettings.model.js";
import Dimentions from "./dimentions.model.js";
import Biome from "./biome.model.js";
import GeneratedStructures from "./generatedStructures.model.js";
import BlockLoot from "./blockLoot.model.js";
import Foods from "./foods.model.js";
import Materials from "./materials.model.js";
import Particles from "./particles.model.js";

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Inventory = Inventory;
db.Blocks = Blocks;
db.Enchantments = Enchantments;
db.Achievements = Achievements;
db.Recipies = Recipies;
db.Items = Items;
db.Player = Player;
db.Effects = Effects;
db.Chunk = Chunk;
db.Entity = Entity;
db.Worlds = Worlds;
db.WorldSettings = WorldSettings;
db.Dimentions = Dimentions;
db.Biome = Biome;
db.GeneratedStructures = GeneratedStructures;
db.BlockLoot = BlockLoot;
db.Foods = Foods;
db.Materials = Materials;
db.Particles = Particles;

// Define associations here if needed

// Associations (based on sqlcraft.plantuml)
// Player -> Inventory
db.Player.hasMany(db.Inventory, { foreignKey: "id" });
db.Inventory.belongsTo(db.Player, { foreignKey: "id" });

// Achievements -> Player
db.Player.hasMany(db.Achievements, { foreignKey: "id" });
db.Achievements.belongsTo(db.Player, { foreignKey: "id" });

// Effects -> Player, Items, Entity, particles
db.Player.hasMany(db.Effects, { foreignKey: "id" });
db.Effects.belongsTo(db.Player, { foreignKey: "id" });
db.Items.hasMany(db.Effects, { foreignKey: "id" });
db.Effects.belongsTo(db.Items, { foreignKey: "id" });
db.Entity.hasMany(db.Effects, { foreignKey: "id" });
db.Effects.belongsTo(db.Entity, { foreignKey: "id" });
db.Player.hasMany(db.Particles, { foreignKey: "id" });
db.Particles.belongsTo(db.Player, { foreignKey: "id" });
db.Entity.hasMany(db.Particles, { foreignKey: "id" });
db.Particles.belongsTo(db.Entity, { foreignKey: "id" });

// Items <-> Enchantments, Recipes, Inventory, Chunk, blockloot
db.Items.hasMany(db.Enchantments, { foreignKey: "id" });
db.Enchantments.belongsTo(db.Items, { foreignKey: "id" });
db.Enchantments.hasMany(db.Recipies, { foreignKey: "id" });

db.Items.hasMany(db.Recipies, { foreignKey: "id" });
db.Recipies.belongsTo(db.Items, { foreignKey: "id" });

db.Items.hasMany(db.Inventory, { foreignKey: "id" });
db.Inventory.belongsTo(db.Items, { foreignKey: "id" });

db.Blocks.hasMany(db.Inventory, { foreignKey: "id" });
db.Inventory.belongsTo(db.Blocks, { foreignKey: "id" });
db.Blocks.hasMany(db.BlockLoot, { foreignKey: "id" })
db.BlockLoot.belongsTo(db.Blocks, { foreignKey: "id" })

db.Items.belongsTo(db.Chunk, { foreignKey: "id" });
db.Chunk.hasMany(db.Items, { foreignKey: "id" });

// Worlds -> Dimentions, WorldSettings
db.Worlds.hasMany(db.Dimentions, { foreignKey: "id" });
db.Dimentions.belongsTo(db.Worlds, { foreignKey: "id" });
db.WorldSettings.hasMany(db.Worlds, { foreignKey: "id" });
db.Worlds.belongsTo(db.WorldSettings, { foreignKey: "id" });

// Dimentions -> Chunk, Biome
db.Dimentions.hasMany(db.Chunk, { foreignKey: "id" });
db.Chunk.belongsTo(db.Dimentions, { foreignKey: "id" });
db.Dimentions.hasMany(db.Biome, { foreignKey: "id" });
db.Biome.belongsTo(db.Dimentions, { foreignKey: "id" });

// Chunk -> Entity, Player (location)
db.Chunk.hasMany(db.Entity, { foreignKey: "id" });
db.Entity.belongsTo(db.Chunk, { foreignKey: "id" });
db.Chunk.hasMany(db.Player, { foreignKey: "id" });
db.Player.belongsTo(db.Chunk, { foreignKey: "id" });

// Biome -> GeneratedStructures
db.Biome.hasMany(db.GeneratedStructures, { foreignKey: "id" });
db.GeneratedStructures.belongsTo(db.Biome, { foreignKey: "id" });

export default db;
