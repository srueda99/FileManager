// --- DELETE ROUTE ---
// Imports
const {Router} = require('express');
const {getObjects} = require('../aws');
const router = Router();

// (GET) Render the delete HTML page
router.get('/', async (req, res) => {
    const bucket = process.env.BUCKET_NAME;
    const objectsList = await getObjects(bucket);
    console.log(objectsList.Contents);
    res.render('delete', {
        bucket: bucket,
        objects: objectsList.Contents
    });
});

// (POST) Function to delete an object in the Bucket
router.post('/', (req, res) => {
    //
});

module.exports = router;