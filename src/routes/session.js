// Express offers the Express Router to create such modular routes 
// without mounting them directly to the Express application instance.
// in the src/routes/session.js file we will only returns the 
// pseudo authenticated user for now

import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    return res.send(req.context.models.users[req.context.me.id]);
  });

  export default router; 