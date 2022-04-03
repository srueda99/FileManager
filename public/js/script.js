const uploadBtn = document.querySelector('#upload');
uploadBtn.addEventListener('click', e => {
    e.preventDefault();
    const bucket = document.querySelector('#buckets').value;
    const file = document.querySelector('#file').files[0];
    const formData = new FormData();
    formData.append('bucket', bucket);
    formData.append('file', file);
    fileUp(formData);
});

const fileUp = (formData) => {
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
console.log('Script running as expected');