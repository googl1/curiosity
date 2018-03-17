import express, { Router } from 'express';
// Import index action from entries controller
import { index } from './controllers/entries';

// Initialize the router
const router = Router();

// Handle /entries.json route with index action from entries controller
router.route('/entries.json')
  .get(index);

export default router;
