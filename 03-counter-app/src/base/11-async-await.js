export const getImagen = async () => {
    
    try {
    const apiKey = 'ivo3caYoDs7pclsyDIsrYszXxCc2z0vk';
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await res.json();
    const {url} = data.images.original
    return url;
    } catch (e) {
        console.warn(e)
        return 'No Existe';
    }
}

