// --- UPLOAD ROUTE ---
// Imports
const {Router} = require('express');
const {uploadObject, getBuckets} = require('../aws');
const router = Router();

// Function to verify the POST is a file
const verifyFile = (req, res, next) => {
    if(!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({msg:'This is not a file'});
    }
    next();
}

// (GET) Render the upload HTML page
router.get('/', async (req, res) => {
    var bucketsList = await getBuckets();
    console.log(bucketsList.Buckets);
    res.render('upload', {
        buckets: bucketsList.Buckets
    });
});

// (POST) Function to upload the file
router.post('/', verifyFile, async (req, res) => {
    console.log(req.body);
    var bucket = req.body.bucket;
    var file = req.files.file;
    var result = await uploadObject(bucket, file);
    res.json(result);
    console.log('File uploaded.');
});

module.exports = router;