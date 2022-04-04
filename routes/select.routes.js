// --- SELECTED BUCKET ROUTE ---
// Imports
const {Router} = require('express');
const router = Router();
var bucket;

// (POST) Function to upload the file
router.post('/', (req, res) => {
    console.log(req);
    bucket = req.body.bucket;
    console.log('Bucket selected.');
});

module.exports = {router, bucket};