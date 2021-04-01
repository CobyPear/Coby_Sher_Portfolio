// takes IMAGE_LINKS and dynamically adds the gifs to the page
const displayGifs = (imageURLs) => {
    imageURLs.forEach(image => {
        // create a row
        const row = document.createElement('div')
        row.className = 'd-flex flex-row'
        row.style = 'margin-bottom: 2rem'

        // create an img
        const img = document.createElement('img')
        const imageName = image.split('/')[9].split('.')[0]
        img.src = image
        img.alt = imageName
        img.classList = 'img-fluid flex-fill'
        img.dataset.toggle = 'tooltip'
        img.dataset.placement = 'top'
        img.title = imageName

        //Append the elements to the page
        row.append(img)
        MAIN.append(row)
    })
}