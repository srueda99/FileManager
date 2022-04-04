// --- INDEX ROUTE ---
// Imports
const {Router} = require('express');
const router = Router();

// Function to render the main page
router.get('/', async (req, res) => {
    res.render('index');
});

module.exports = router;