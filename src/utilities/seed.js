// seed.js
const mongoose = require('mongoose');
const Template = require('../models/template');
const Enemy = require('../models/enemy');
const Person = require('../models/person');
const Thing = require('../models/thing');
const BattleTactic = require('../models/battle-tactic');
const Action = require('../models/action');
const Situation = require('../models/situation');
const Place = require('../models/place');
const Direction = require('../models/direction');
const BodyPart = require('../models/body-part');
const Concept = require('../models/concept');
const Phrase = require('../models/phrase');
const Conjunction = require('../models/conjunction');



const templatesData = [
  { name: "**** ahead" },
  { name: "No **** ahead" },
  { name: "**** required ahead" },
  { name: "Be wary of ****" },
  { name: "Try ****" },
  { name: "Likely ****" },
  { name: "First off, ****" },
  { name: "Seek ****" },
  { name: "Still no ****…" },
  { name: "Why is it always ****?" },
  { name: "If only I had a ****?" },
  { name: "Didn’t expect ****…" },
  { name: "Visions of ****…" },
  { name: "Could this be a ****?" },
  { name: "Time for ****" },
  { name: "**** O, ****" },
  { name: "Behold, ****!" },
  { name: "Offer ****" },
  { name: "Praise the ****!" },
  { name: "Let there be ****" },
  { name: "Ahh, ****…" },
  { name: "****" },
  { name: "****!" },
  { name: "****?" },
  { name: "****…" }
];

const wordsData = {
  enemies: [
    { name: "Enemy" },
    { name: "Weak Foe" },
    { name: "Strong Foe" },
    { name: "Monster" },
    { name: "Dragon" },
    { name: "Boss" },
    { name: "Sentry" },
    { name: "Group" },
    { name: "Pack" },
    { name: "Decoy" },
    { name: "Undead" },
    { name: "Soldier" },
    { name: "Knight" },
    { name: "Cavalier" },
    { name: "Archer" },
    { name: "Sniper" },
    { name: "Mage" },
    { name: "Ordnance" },
    { name: "Monarch" },
    { name: "Lord" },
    { name: "Demi-Human" },
    { name: "Outsider" },
    { name: "Giant" },
    { name: "Horse" },
    { name: "Dog" },
    { name: "Wolf" },
    { name: "Rat" },
    { name: "Beast" },
    { name: "Bird" },
    { name: "Raptor" },
    { name: "Snake" },
    { name: "Crab" },
    { name: "Prawn" },
    { name: "Octopus" },
    { name: "Bug" },
    { name: "Scarab" },
    { name: "Slug" },
    { name: "Wraith" },
    { name: "Skeleton" },
    { name: "Monstrosity" },
    { name: "Ill-Omened Creature" }
],

  people: [
    { name: "Tarnished" },
    { name: "Warrior" },
    { name: "Swordfighter" },
    { name: "Knight" },
    { name: "Samurai" },
    { name: "Sorcerer" },
    { name: "Cleric" },
    { name: "Sage" },
    { name: "Merchant" },
    { name: "Teacher" },
    { name: "Master" },
    { name: "Friend" },
    { name: "Lover" },
    { name: "Old Dear" },
    { name: "Old Codger" },
    { name: "Angel" },
    { name: "Fat Coinpurse" },
    { name: "Pauper" },
    { name: "Good Sort" },
    { name: "Wicked Sort" },
    { name: "Plump Sort" },
    { name: "Skinny Sort" },
    { name: "Lovable Sort" },
    { name: "Pathetic Sort" },
    { name: "Strange Sort" },
    { name: "Nimble Sort" },
    { name: "Laggardly Sort" },
    { name: "Invisible Sort" },
    { name: "Unfathomable Sort" },
    { name: "Giant Sort" },
    { name: "Sinner" },
    { name: "Thief" },
    { name: "Liar" },
    { name: "Dastard" },
    { name: "Traitor" },
    { name: "Pair" },
    { name: "Trio" },
    { name: "Noble" },
    { name: "Aristocrat" },
    { name: "Hero" },
    { name: "Champion" },
    { name: "Monarch" },
    { name: "Lord" },
    { name: "God" }
],

  things: [
    { name: "Item" },
    { name: "Necessary Item" },
    { name: "Precious Item" },
    { name: "Something" },
    { name: "Something Incredible" },
    { name: "Treasure Chest" },
    { name: "Corpse" },
    { name: "Coffin" },
    { name: "Trap" },
    { name: "Armament" },
    { name: "Shield" },
    { name: "Bow" },
    { name: "Projectile Weapon" },
    { name: "Armor" },
    { name: "Talisman" },
    { name: "Skill" },
    { name: "Sorcery" },
    { name: "Incantation" },
    { name: "Map" },
    { name: "Material" },
    { name: "Flower" },
    { name: "Grass" },
    { name: "Tree" },
    { name: "Fruit" },
    { name: "Seed" },
    { name: "Mushroom" },
    { name: "Tear" },
    { name: "Crystal" },
    { name: "Butterfly" },
    { name: "Bug" },
    { name: "Dung" },
    { name: "Grace" },
    { name: "Door" },
    { name: "Key" },
    { name: "Ladder" },
    { name: "Lever" },
    { name: "Lift" },
    { name: "Spiritspring" },
    { name: "Sending Gate" },
    { name: "Stone Astrolabe" },
    { name: "Birdseye Telescope" },
    { name: "Message" },
    { name: "Bloodstain" },
    { name: "Erdtree" },
    { name: "Elden Ring" }
],

  battleTactics: [
    { name: "Close-Quarters Battle" },
    { name: "Ranged Battle" },
    { name: "Horseback Battle" },
    { name: "Luring Out" },
    { name: "Defeating One-By-One" },
    { name: "Taking On All At Once" },
    { name: "Rushing In" },
    { name: "Stealth" },
    { name: "Mimicry" },
    { name: "Confusion" },
    { name: "Pursuit" },
    { name: "Fleeing" },
    { name: "Summoning" },
    { name: "Circling Around" },
    { name: "Jumping Off" },
    { name: "Dashing Through" },
    { name: "Brief Respite" }
],

  situations: [
    { name: "Morning" },
    { name: "Noon" },
    { name: "Evening" },
    { name: "Night" },
    { name: "Clear Sky" },
    { name: "Overcast" },
    { name: "Rain" },
    { name: "Storm" },
    { name: "Mist" },
    { name: "Snow" },
    { name: "Patrolling" },
    { name: "Procession" },
    { name: "Crowd" },
    { name: "Surprise Attack" },
    { name: "Ambush" },
    { name: "Pincer Attack" },
    { name: "Beating To A Pulp" },
    { name: "Battle" },
    { name: "Reinforcements" },
    { name: "Ritual" },
    { name: "Explosion" },
    { name: "High Spot" },
    { name: "Defensible Spot" },
    { name: "Climbable Spot" },
    { name: "Crossable Spot" },
    { name: "Bright Spot" },
    { name: "Dark Spot" },
    { name: "Open Area" },
    { name: "Cramped Area" },
    { name: "Hiding Place" },
    { name: "Sniping Spot" },
    { name: "Recon Spot" },
    { name: "Safety" },
    { name: "Danger" },
    { name: "Gorgeous View" },
    { name: "Detour" },
    { name: "Hidden Path" },
    { name: "Secret Passage" },
    { name: "Shortcut" },
    { name: "Dead End" },
    { name: "Looking Away" },
    { name: "Unnoticed" },
    { name: "Out Of Stamina" }
],

  places: [
    { name: "High Road" },
    { name: "Checkpoint" },
    { name: "Bridge" },
    { name: "Castle" },
    { name: "Fort" },
    { name: "City" },
    { name: "Ruins" },
    { name: "Church" },
    { name: "Tower" },
    { name: "Camp Site" },
    { name: "House" },
    { name: "Cemetery" },
    { name: "Underground Tomb" },
    { name: "Tunnel" },
    { name: "Cave" },
    { name: "Evergaol" },
    { name: "Great Tree" },
    { name: "Cellar" },
    { name: "Surface" },
    { name: "Underground" },
    { name: "Forest" },
    { name: "River" },
    { name: "Lake" },
    { name: "Bog" },
    { name: "Mountain" },
    { name: "Valley" },
    { name: "Cliff" },
    { name: "Waterside" },
    { name: "Nest" },
    { name: "Hole" }
],

  directions: [
    { name: "East" },
    { name: "West" },
    { name: "South" },
    { name: "North" },
    { name: "Ahead" },
    { name: "Behind" },
    { name: "Left" },
    { name: "Right" },
    { name: "Center" },
    { name: "Up" },
    { name: "Down" },
    { name: "Edge" }
],

  bodyParts: [
    { name: "Head" },
    { name: "Stomach" },
    { name: "Back" },
    { name: "Arms" },
    { name: "Legs" },
    { name: "Rump" },
    { name: "Tail" },
    { name: "Core" },
    { name: "Fingers" }
],

  concepts: [
    { name: "Life" },
    { name: "Death" },
    { name: "Light" },
    { name: "Dark" },
    { name: "Stars" },
    { name: "Fire" },
    { name: "Order" },
    { name: "Chaos" },
    { name: "Joy" },
    { name: "Wrath" },
    { name: "Suffering" },
    { name: "Sadness" },
    { name: "Comfort" },
    { name: "Bliss" },
    { name: "Misfortune" },
    { name: "Good Fortune" },
    { name: "Bad Luck" },
    { name: "Hope" },
    { name: "Despair" },
    { name: "Victory" },
    { name: "Defeat" },
    { name: "Research" },
    { name: "Faith" },
    { name: "Abundance" },
    { name: "Rot" },
    { name: "Loyalty" },
    { name: "Injustice" },
    { name: "Secret" },
    { name: "Opportunity" },
    { name: "Pickle" },
    { name: "Clue" },
    { name: "Friendship" },
    { name: "Love" },
    { name: "Bravery" },
    { name: "Vigor" },
    { name: "Fortitude" },
    { name: "Confidence" },
    { name: "Distracted" },
    { name: "Unguarded" },
    { name: "Introspection" },
    { name: "Regret" },
    { name: "Resignation" },
    { name: "Futility" },
    { name: "On The Brink" },
    { name: "Betrayal" },
    { name: "Revenge" },
    { name: "Destruction" },
    { name: "Recklessness" },
    { name: "Calmness" },
    { name: "Vigilance" },
    { name: "Tranquility" },
    { name: "Sound" },
    { name: "Tears" },
    { name: "Sleep" },
    { name: "Depths" },
    { name: "Dregs" },
    { name: "Fear" },
    { name: "Sacrifice" },
    { name: "Ruin" }
],

  phrases: [
    { name: "Good Luck" },
    { name: "Look Carefully" },
    { name: "Listen Carefully" },
    { name: "Think Carefully" },
    { name: "Well Done" },
    { name: "I Did It!" },
    { name: "I’ve Failed…" },
    { name: "Here!" },
    { name: "Not Here!" },
    { name: "Don’t You Dare!" },
    { name: "Do It!" },
    { name: "I Can’t Take This…" },
    { name: "Don’t Think" },
    { name: "So Lonely…" },
    { name: "Here Again…" },
    { name: "Just Getting Started" },
    { name: "Stay Calm" },
    { name: "Keep Moving" },
    { name: "Turn Back" },
    { name: "Give Up" },
    { name: "Don’t Give Up" },
    { name: "Help Me…" },
    { name: "I Don’t Believe It…" },
    { name: "Too High Up" },
    { name: "I Want To Go Home…" },
    { name: "It’s Like A Dream…" },
    { name: "Seems Familiar…" },
    { name: "Beautiful…" },
    { name: "You Don’t Have The Right" },
    { name: "Are You Ready?" }
],

  actions: [
    { name: "Attacking" },
    { name: "Jump Attack" },
    { name: "Running Attack" },
    { name: "Critical Hit" },
    { name: "Two-Handing" },
    { name: "Blocking" },
    { name: "Parrying" },
    { name: "Guard Counter" },
    { name: "Sorcery" },
    { name: "Incantation" },
    { name: "Skill" },
    { name: "Summoning" },
    { name: "Throwing" },
    { name: "Healing" },
    { name: "Running" },
    { name: "Rolling" },
    { name: "Backstepping" },
    { name: "Jumping" },
    { name: "Crouching" },
    { name: "Target Lock" },
    { name: "Item Crafting" },
    { name: "Gesturing" },
],
};

  const conjunctionsData = [
    { name: "And Then" },
    { name: "Or" },
    { name: "But" },
    { name: "Therefore" },
    { name: "In Short" },
    { name: "Except" },
    { name: "By The Way" },
    { name: "So To Speak" },
    { name: "All The More" },
    { name: "," }
  ];
  
  

async function seedData() {
  let connection;
  try {
      connection = await mongoose.connect('mongodb://localhost/elden-ring', {
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

    await Situation.insertMany(situationsData);
    console.log('Situations seeded successfully');

    await Place.insertMany(placesData);
    console.log('Places seeded successfully');

    await Direction.insertMany(directionsData);
    console.log('Directions seeded successfully');

    await BodyPart.insertMany(bodyPartsData);
    console.log('Body Parts seeded successfully');

    await Concept.insertMany(conceptsData);
    console.log('Concepts seeded successfully');

    await Phrase.insertMany(phrasesData);
    console.log('Phrases seeded successfully');

    await Conjunction.insertMany(conjunctionsData);
    console.log('Conjunctions seeded successfully');

  } catch (error) {
    console.error('Error seeding data:', error.message || error);
  } finally {
    // Close the connection whether there was an error or not
    if (connection) {
      await connection.connection.close();
      console.log('MongoDB connection closed');
    }
  }
}

seedData();

module.exports = { templatesData, wordsData, conjunctionsData};
