// the user route in the src/routes/user.js file. It's quite similar to 
// the session route

import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.users));
  });

  router.get('/:userId', (req, res) => {
    return res.send(req.context.models.users[req.params.userId]);
  });

  export default router;

  // Notice we don't need to define the /users URI (path) but only the subpaths, 
  // because we did this already in the mounting process of the route in the Express application