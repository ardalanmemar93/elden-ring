// seed.js
const mongoose = require('mongoose');
const Template = require('./template.model');
const Enemy = require('./enemy.model');
const Person = require('./person.model');
const Thing = require('./thing.model');
const BattleTactic = require('./battle-tactic.model');
const Action = require('./action.model');
const Situation = require('./situation.model');
const Place = require('./place.model');
const Direction = require('./direction.model');
const BodyPart = require('./body-part.model');
const Concept = require('./concept.model');
const Phrase = require('./phrase.model');



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

const situationsData = [
  "Morning",
  "Noon",
  "Evening",
  "Night",
  "Clear Sky",
  "Overcast",
  "Rain",
  "Storm",
  "Mist",
  "Snow",
  "Patrolling",
  "Procession",
  "Crowd",
  "Surprise Attack",
  "Ambush",
  "Pincer Attack",
  "Beating To A Pulp",
  "Battle",
  "Reinforcements",
  "Ritual",
  "Explosion",
  "High Spot",
  "Defensible Spot",
  "Climbable Spot",
  "Crossable Spot",
  "Bright Spot",
  "Dark Spot",
  "Open Area",
  "Cramped Area",
  "Hiding Place",
  "Sniping Spot",
  "Recon Spot",
  "Safety",
  "Danger",
  "Gorgeous View",
  "Detour",
  "Hidden Path",
  "Secret Passage",
  "Shortcut",
  "Dead End",
  "Looking Away",
  "Unnoticed",
  "Out Of Stamina"
];

const placesData = [
  "High Road",
  "Checkpoint",
  "Bridge",
  "Castle",
  "Fort",
  "City",
  "Ruins",
  "Church",
  "Tower",
  "Camp Site",
  "House",
  "Cemetery",
  "Underground Tomb",
  "Tunnel",
  "Cave",
  "Evergaol",
  "Great Tree",
  "Cellar",
  "Surface",
  "Underground",
  "Forest",
  "River",
  "Lake",
  "Bog",
  "Mountain",
  "Valley",
  "Cliff",
  "Waterside",
  "Nest",
  "Hole"
];

const directionsData = [
  "East",
  "West",
  "South",
  "North",
  "Ahead",
  "Behind",
  "Left",
  "Right",
  "Center",
  "Up",
  "Down",
  "Edge"
];

const bodyPartsData = [
  "Head",
  "Stomach",
  "Back",
  "Arms",
  "Legs",
  "Rump",
  "Tail",
  "Core",
  "Fingers"
];

const conceptsData = [
  "Life",
  "Death",
  "Light",
  "Dark",
  "Stars",
  "Fire",
  "Order",
  "Chaos",
  "Joy",
  "Wrath",
  "Suffering",
  "Sadness",
  "Comfort",
  "Bliss",
  "Misfortune",
  "Good Fortune",
  "Bad Luck",
  "Hope",
  "Despair",
  "Victory",
  "Defeat",
  "Research",
  "Faith",
  "Abundance",
  "Rot",
  "Loyalty",
  "Injustice",
  "Secret",
  "Opportunity",
  "Pickle",
  "Clue",
  "Friendship",
  "Love",
  "Bravery",
  "Vigor",
  "Fortitude",
  "Confidence",
  "Distracted",
  "Unguarded",
  "Introspection",
  "Regret",
  "Resignation",
  "Futility",
  "On The Brink",
  "Betrayal",
  "Revenge",
  "Destruction",
  "Recklessness",
  "Calmness",
  "Vigilance",
  "Tranquility",
  "Sound",
  "Tears",
  "Sleep",
  "Depths",
  "Dregs",
  "Fear",
  "Sacrifice",
  "Ruin"
];

const phrasesData = [
  "Good Luck",
  "Look Carefully",
  "Listen Carefully",
  "Think Carefully",
  "Well Done",
  "I Did It!",
  "I’ve Failed…",
  "Here!",
  "Not Here!",
  "Don’t You Dare!",
  "Do It!",
  "I Can’t Take This…",
  "Don’t Think",
  "So Lonely…",
  "Here Again…",
  "Just Getting Started",
  "Stay Calm",
  "Keep Moving",
  "Turn Back",
  "Give Up",
  "Don’t Give Up",
  "Help Me…",
  "I Don’t Believe It…",
  "Too High Up",
  "I Want To Go Home…",
  "It’s Like A Dream…",
  "Seems Familiar…",
  "Beautiful…",
  "You Don’t Have The Right",
  "Are You Ready?"
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
  } catch (error) {
    console.error('Error seeding data:', error.message);
  } finally {
    mongoose.connection.close();
  }
}

seedData();

