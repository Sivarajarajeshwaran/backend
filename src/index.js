// This file is a workaround because Render's Start Command is currently looking for src/index.js.
// It simply imports your main server.js file to start the application.

require('../server.js');
