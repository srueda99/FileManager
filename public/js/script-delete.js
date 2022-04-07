// --- FRONTEND SCRIPT FOR DELETE ---
// Button to upload
const deleteBtn = document.querySelector('#deleteSbmt');
deleteBtn.addEventListener('click', async e => {
    e.preventDefault();
    const object = document.querySelector('#objectDelete').value;
    const formData = new FormData();
    formData.append('object', object);
    await objectDelete(formData);
    alert('File deleted');
});

// Function for a upload request to de Backend
const objectDelete = async (formData) => {
    fetch('delete', {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(`There was en error: ${err}`))
};

console.log('Deleting script is running as expected');