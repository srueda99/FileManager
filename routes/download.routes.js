// --- DOWNLOAD ROUTE ---
// Imports
const {Router} = require('express');
const {getObjects} = require('../aws');
const router = Router();

// (GET) Render the download HTML page
router.get('/', async (req, res) => {
    const bucket = process.env.BUCKET_NAME;
    const objectsList = await getObjects(bucket);
    console.log(objectsList.Contents);
    res.render('download', {
        bucket: bucket,
        objects: objectsList.Contents
    });
});

// (POST) Function to download an object from the Bucket
router.post('/', (req, res) => {
    //
});

module.exports = router;