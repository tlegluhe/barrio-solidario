import express, { Router } from 'express';
// Import index action from movies controller
import { users } from './controllers/users';

// Initialize the router
const router = Router();

router.route('/users.json')
  .get(users);
  
export default router;