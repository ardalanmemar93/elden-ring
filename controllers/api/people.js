const Person = require('./person.model');

const getPeople = async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getPeople,
};
