


// const getImagenPromesa = () => new Promise( resolve => resolve('https://google.es'));
// getImagenPromesa().then(console.log)

const getImagen = async () => {
    
    try {
    const apiKey = 'ivo3caYoDs7pclsyDIsrYszXxCc2z0vk';
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await res.json();
    const {url} = data.images.original
    const img = document.createElement('img')
        img.src = url;
        document.body.append(img)
    console.log(url)
    } catch (e) {
        console.warn(e)
    }
}
getImagen()

