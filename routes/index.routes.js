// --- RENDER ROUTE ---
// Imports
const {Router} = require('express');
const {getBuckets, getObjects} = require('../aws');
const router = Router();

// Function to render the main page
router.get('/', async (req, res) => {
    const list = await getBuckets();
    console.log(list.Buckets);
    res.render('index', {
        buckets: list.Buckets
    });
});

module.exports = router;