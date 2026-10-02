const Contact = require('../models/contacts');

// Get all contacts
const getAll = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single contact by ID
const getSingle = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact is not found' });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new contact
const createContact = async (req, res) => {
  try {
    const contact = new Contact({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    });

    const saved = await contact.save();
    res.status(201).json({ id: saved._id }); // Return only the ID of the newly created contact
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a contact by ID
const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
      },
      { returnDocument: 'after', runValidators: true } 
    );

    if (!contact) {
      return res.status(404).json({ message: 'Contact is not found' });
    }

    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a contact by ID
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: 'Contact is not found' });
    }

    res.status(200).send(); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact
};