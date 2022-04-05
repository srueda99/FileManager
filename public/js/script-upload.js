// --- FRONTEND SCRIPT ---
// Button to upload
const uploadBtn = document.querySelector('#uploadSbmt');
uploadBtn.addEventListener('click', async e => {
    e.preventDefault();
    const bucket = document.querySelector('#bucketUpload').value;
    const file = document.querySelector('#file').files[0];
    const formData = new FormData();
    formData.append('bucket', bucket);
    formData.append('file', file);
    await objectUpload(formData);
    alert('File uploaded');
});

// Function for a upload request to de Backend
const objectUpload = async (formData) => {
    fetch('upload', {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(`There was en error: ${err}`))
};

console.log('Uploading script is running as expected');