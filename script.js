const fileInput = document.querySelector('#file')
fileInput.addEventListener('change', () => {
    const [file] = fileInput.files
    const imageElement = document.querySelector('#img')
    imageElement.src = URL.createObjectURL(file)
})