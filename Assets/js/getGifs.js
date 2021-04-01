const getGifs = async () => {
    // get all gifs from the bucket
    const response = await fetch('https://storage.googleapis.com/storage/v1/b/gif-gallery/o/')
    const { items } = await response.json()

    // add all links to the IMAGE_LINKS array
    items.forEach(item => IMAGE_LINKS.push(item.mediaLink))

    // display the gifs
    displayGifs(IMAGE_LINKS)
}

window.addEventListener('load', getGifs)
