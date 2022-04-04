// --- DELETE ROUTE ---
// Imports
const {Router} = require('express');
const {getBuckets, getObjects} = require('../aws');
const {bucket} = require('./select.routes');
const router = Router();

// (GET) Render the delete HTML page
router.get('/', async (req, res) => {
    const bucketsList = await getBuckets();
    console.log(bucketsList.Buckets);
    res.render('delete', {
        buckets: bucketsList.Buckets
    });
});

// (POST) Function to delete an object in the Bucket
router.post('/', (req, res) => {
    console.log(req);
    getObjects(bucket);
});

module.exports = router;