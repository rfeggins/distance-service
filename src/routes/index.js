// In the src/routes/index.js file import all routes from their 
// dedicated files and export them as an object. 
// This makes them available in the src/index.js file

import session from './session';
import user from './user';
import message from './message';

export default {
  session,
  user,
  message,
};