// --- DOWNLOAD ROUTE ---
// Imports
const {Router} = require('express');
const {getObjects, downloadObject} = require('../aws');
const router = Router();
const bucket = process.env.BUCKET_NAME;

// (GET) Render the download HTML page
router.get('/', async (req, res) => {
    var objectsList = await getObjects(bucket);
    console.log(objectsList.Contents);
    res.render('download', {
        bucket: bucket,
        objects: objectsList.Contents
    });
});

// (POST) Function to download an object from the Bucket
router.post('/', async (req, res) => {
    console.log(req.body);
    var object = req.body.object;
    var result = await downloadObject(bucket, object);
    console.log(result);
    res.send(result);
    console.log('Object downloaded.');
});

module.exports = router;