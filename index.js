const express = require('express');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');
const multer = require('multer');
const mime = require('mime-types');
const cors = require('cors');

// Credentials
dotenv.config();
const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const BKTMG_SECRET_KEY = process.env.BKTMG_SECRET_KEY;

// Start the server, running on port 2020
const app = express();
const port = process.env.PORT || 2020;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

// Load S3 service and connect to AWS CLI using the Bucket Management user
AWS.config.update({region: 'us-east-2'});
const s3 = new AWS.S3({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: BKTMG_SECRET_KEY
});

// Render the main page
app.get('/', (req, res) => {
    res.sendFile(__dirname +"/views/index.html");
});

// List the Buckets
app.get('/list', (req, res) => {
    s3.listBuckets(function(err, data) {
        if (err) {
          console.log("Error occurred: ", err);
        } else {
          console.log("Active Buckets:\n", data.Buckets);
        }
    });
});

// Upload files
const storage = multer.diskStorage({
    destination: 'temp/',
    filename: function(req, file, cllbck){
        cllbck("", Date.now()+"."+mime.extension(file.mimetype));
    }
});

const upload = multer({
    storage: storage
})
app.post('/upload', upload.single('uploadF'), (req, res) => {
    console.log(req);
    res.send("Archivo subido, espero que no sea un virus.")
});