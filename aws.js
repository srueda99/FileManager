// --- FUNCTIONS RELATED WITH AWS ---
// Imports
const s3 = require('aws-sdk/clients/s3');
const fs = require('fs');

// Credentials
const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const BKTMG_SECRET_KEY = process.env.BKTMG_SECRET_KEY;
const REGION = process.env.AWS_REGION;

// Connect to AWS
const storage = new s3({
    REGION,
    AWS_ACCESS_KEY,
    BKTMG_SECRET_KEY
});

// List all the buckets
const getBuckets = () => {
    return storage.listBuckets().promise();
};

// List all the objects in a bucket
const getObjects = (bucket) => {
    const bucketParams = {
        Bucket: bucket,
    };
    return storage.listObjects(bucketParams).promise();
};

// Upload a file to the selected bucket
const uploadToBucket = (bucket, file) => {
    var stream = fs.createReadStream(file.tempFilePath);
    const params = {
        Bucket: bucket,
        Key: file.name,
        Body: stream
    };
    return storage.upload(params).promise();
};

module.exports = {getBuckets, getObjects, uploadToBucket};