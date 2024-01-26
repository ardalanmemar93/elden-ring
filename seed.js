// seed.js
const mongoose = require('mongoose');
const Template = require('./template.model');
const Enemy = require('./enemy.model');
const Person = require('./person.model');
const Thing = require('./thing.model');
const BattleTactic = require('./battle-tactic.model');
const Action = require('./action.model');



const templatesData = [
  "**** ahead",
  "No **** ahead",
  "**** required ahead",
  "Be wary of ****",
  "Try ****",
  "Likely ****",
  "First off, ****",
  "Seek ****",
  "Still no ****…",
  "Why is it always ****?",
  "If only I had a ****?",
  "Didn’t expect ****…",
  "Visions of ****…",
  "Could this be a ****?",
  "Time for ****",
  "**** O, ****",
  "Behold, ****!",
  "Offer ****",
  "Praise the ****!",
  "Let there be ****",
  "Ahh, ****…",
  "****",
  "****!",
  "****?",
  "****…"
];

const enemiesData = [
  "Enemy",
  "Weak Foe",
  "Strong Foe",
  "Monster",
  "Dragon",
  "Boss",
  "Sentry",
  "Group",
  "Pack",
  "Decoy",
  "Undead",
  "Soldier",
  "Knight",
  "Cavalier",
  "Archer",
  "Sniper",
  "Mage",
  "Ordnance",
  "Monarch",
  "Lord",
  "Demi-Human",
  "Outsider",
  "Giant",
  "Horse",
  "Dog",
  "Wolf",
  "Rat",
  "Beast",
  "Bird",
  "Raptor",
  "Snake",
  "Crab",
  "Prawn",
  "Octopus",
  "Bug",
  "Scarab",
  "Slug",
  "Wraith",
  "Skeleton",
  "Monstrosity",
  "Ill-Omened Creature"
];

const peopleData = [
  "Tarnished",
  "Warrior",
  "Swordfighter",
  "Knight",
  "Samurai",
  "Sorcerer",
  "Cleric",
  "Sage",
  "Merchant",
  "Teacher",
  "Master",
  "Friend",
  "Lover",
  "Old Dear",
  "Old Codger",
  "Angel",
  "Fat Coinpurse",
  "Pauper",
  "Good Sort",
  "Wicked Sort",
  "Plump Sort",
  "Skinny Sort",
  "Lovable Sort",
  "Pathetic Sort",
  "Strange Sort",
  "Nimble Sort",
  "Laggardly Sort",
  "Invisible Sort",
  "Unfathomable Sort",
  "Giant Sort",
  "Sinner",
  "Thief",
  "Liar",
  "Dastard",
  "Traitor",
  "Pair",
  "Trio",
  "Noble",
  "Aristocrat",
  "Hero",
  "Champion",
  "Monarch",
  "Lord",
  "God"
];

const thingsData = [
  "Item",
  "Necessary Item",
  "Precious Item",
  "Something",
  "Something Incredible",
  "Treasure Chest",
  "Corpse",
  "Coffin",
  "Trap",
  "Armament",
  "Shield",
  "Bow",
  "Projectile Weapon",
  "Armor",
  "Talisman",
  "Skill",
  "Sorcery",
  "Incantation",
  "Map",
  "Material",
  "Flower",
  "Grass",
  "Tree",
  "Fruit",
  "Seed",
  "Mushroom",
  "Tear",
  "Crystal",
  "Butterfly",
  "Bug",
  "Dung",
  "Grace",
  "Door",
  "Key",
  "Ladder",
  "Lever",
  "Lift",
  "Spiritspring",
  "Sending Gate",
  "Stone Astrolabe",
  "Birdseye Telescope",
  "Message",
  "Bloodstain",
  "Erdtree",
  "Elden Ring"
];

const battleTacticsData = [
  "Close-Quarters Battle",
  "Ranged Battle",
  "Horseback Battle",
  "Luring Out",
  "Defeating One-By-One",
  "Taking On All At Once",
  "Rushing In",
  "Stealth",
  "Mimicry",
  "Confusion",
  "Pursuit",
  "Fleeing",
  "Summoning",
  "Circling Around",
  "Jumping Off",
  "Dashing Through",
  "Brief Respite"
];

const actionsData = [
  "Attacking",
  "Jump Attack",
  "Running Attack",
  "Critical Hit",
  "Two-Handing",
  "Blocking",
  "Parrying",
  "Guard Counter",
  "Sorcery",
  "Incantation",
  "Skill",
  "Summoning",
  "Throwing",
  "Healing",
  "Running",
  "Rolling",
  "Backstepping",
  "Jumping",
  "Crouching",
  "Target Lock",
  "Item Crafting",
  "Gesturing"
];


async function seedData() {
  try {
    await mongoose.connect('mongodb://localhost:27017/elden-ring', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Template.insertMany(templatesData);
    console.log('Templates seeded successfully');

    await Enemy.insertMany(enemiesData);
    console.log('Enemies seeded successfully');

    await Person.insertMany(peopleData);
    console.log('People seeded successfully');

    await Thing.insertMany(thingsData);
    console.log('Things seeded successfully');

    await BattleTactic.insertMany(battleTacticsData);
    console.log('Battle Tactics seeded successfully');

    await Action.insertMany(actionsData);
    console.log('Actions seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error.message);
  } finally {
    mongoose.connection.close();
  }
}

seedData();

