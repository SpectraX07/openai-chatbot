import dotenv from 'dotenv/config';
import express from 'express';
import path from 'path';

// Check if the API key is being loaded correctly

import { fileURLToPath } from 'url';
import webRoutes from './routes/webRoutes.js';
import apiRoutes from './routes/apiRoutes.js';  // Ensure apiRoutes is imported

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', webRoutes);
app.use('/api', apiRoutes);  // Use the imported apiRoutes here

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
