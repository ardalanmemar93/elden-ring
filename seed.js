// seed.js
const mongoose = require('mongoose');
const Template = require('./template.model');
const Enemy = require('./enemy.model');

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

async function seedData() {
  try {
    await mongoose.connect('mongodb://localhost:27017/your-database-name', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Template.insertMany(templatesData);
    console.log('Templates seeded successfully');

    await Enemy.insertMany(enemiesData);
    console.log('Enemies seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error.message);
  } finally {
    mongoose.connection.close();
  }
}

seedData();

