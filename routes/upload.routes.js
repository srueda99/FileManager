const {Router} = require('express');
const {uploadToBucket} = require('../aws');
const router = Router();

// Function to verify the POST is a file
const verifyFile = (req, res, next) => {
    if(!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({msg:'This is not a file'});
    }
    next();
}

// --- ROUTE ---
router.post('/', verifyFile, async (req, res) => {
    console.log(req);
    const bucket = req.body.bucket;
    const file = req.files.file;
    const result = await uploadToBucket(bucket, file);
    res.json(result);
    console.log('File uploaded.');
});

module.exports = router;