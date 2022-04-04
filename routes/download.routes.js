// --- DOWNLOAD ROUTE ---
// Imports
const {Router} = require('express');
const {getBuckets} = require('../aws');
const router = Router();

// (GET) Render the download HTML page
router.get('/', async (req, res) => {
    const bucketsList = await getBuckets();
    console.log(bucketsList.Buckets);
    res.render('download', {
        buckets: bucketsList.Buckets
    });
});

module.exports = router;