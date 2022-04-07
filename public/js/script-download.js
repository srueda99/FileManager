// --- FRONTEND SCRIPT FOR DOWNLOAD ---
const link = "https://srueda-public-content.s3.us-east-2.amazonaws.com/"

// Button to download
const downloadBtn = document.querySelector('#downloadSbmt');
downloadBtn.addEventListener('click', async e => {
    e.preventDefault();
    const object = document.querySelector('#objectDownload').value;
    const formData = new FormData();
    formData.append('object', object);
    formData.append('link', link);
    await objectDownload(formData);
    alert('File downloaded');
});

// Function for a upload request to de Backend
const objectDownload = async (formData) => {
    fetch('download', {
        method: 'POST',
        body: formData
    })
    //.then(res => res.redirected())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(`There was en error: ${err}`))
};

console.log('Downloading script is running as expected');