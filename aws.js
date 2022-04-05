// --- FUNCTIONS RELATED WITH AWS ---
// Imports
const s3 = require('aws-sdk/clients/s3');
//const res = require('express/lib/response');
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
    var params = {
        Bucket: bucket,
    };
    return storage.listObjects(params).promise();
};

// Upload a file to the selected bucket
const uploadObject = (bucket, file) => {
    var stream = fs.createReadStream(file.tempFilePath);
    var params = {
        Bucket: bucket,
        Key: file.name,
        Body: stream
    };
    return storage.upload(params).promise();
};

// Delete an object of the bucket
const deleteObject = (bucket, object) => {
    var params = {
        Bucket: bucket,
        Key: object
    };
    return storage.deleteObject(params).promise();
}

// Download an object from the Bucket
const downloadObject = async (bucket, object) => {
    let file = fs.createWriteStream(object);
    var params = {
        Bucket: bucket,
        Key: object
    };
    return storage.getObject(params).createReadStream().pipe(file);
}

module.exports = {getBuckets, getObjects, uploadObject, deleteObject, downloadObject};