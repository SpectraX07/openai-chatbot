import express from 'express';
import { chat } from '../controllers/apiController.js';

const router = express.Router();

// API route for chatbot
router.post('/chat', chat);

export default router;
