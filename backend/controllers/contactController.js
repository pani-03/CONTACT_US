import Contact from '../models/Contact.js';

export const submitContact = async (req, res) => {
  try {
    const { name, email, college, message } = req.body;
    const contact = new Contact({ name, email, college, message });
    await contact.save();
    res.status(201).json({ success: true, message: 'Submitted successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
