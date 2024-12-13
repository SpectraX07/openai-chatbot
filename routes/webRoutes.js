import express from 'express';
import { renderHome, renderChatPage } from '../controllers/webController.js';

const router = express.Router();

// Web routes for rendering pages
router.get('/', renderHome);
router.get('/chat', renderChatPage);

export default router;
