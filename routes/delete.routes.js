// --- DELETE ROUTE ---
// Imports
const {Router} = require('express');
const {getObjects, deleteObject} = require('../aws');
const router = Router();
const bucket = process.env.BUCKET_NAME;

// (GET) Render the delete HTML page
router.get('/', async (req, res) => {
    var objectsList = await getObjects(bucket);
    console.log(objectsList.Contents);
    res.render('delete', {
        bucket: bucket,
        objects: objectsList.Contents
    });
});

// (POST) Function to delete an object in the Bucket
router.post('/', async (req, res) => {
    console.log(req.body);
    var object = req.body.object;
    var result = await deleteObject(bucket, object);
    res.json(result);
    console.log('Object deleted.');
});

module.exports = router;