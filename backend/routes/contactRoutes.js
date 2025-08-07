import express from 'express';
import Contact from '../models/Contact.js'; // ✅ This was missing!
import { submitContact } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', submitContact);

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

export default router;
