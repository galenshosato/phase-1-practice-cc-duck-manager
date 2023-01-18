
let firstDuck
let duckRender

fetch('http://localhost:3000/ducks')
.then(resp => resp.json())
.then(duckData => duckData.forEach((duckling) => {
    if(firstDuck === undefined) {
        firstDuck = duckling
        renderDuck(firstDuck)
    }
    
    let img = document.createElement('img')
        img.src = duckling.img_url

    img.addEventListener('click', (event) => {
            renderDuck(duckling)
        })

        document.getElementById('duck-nav').append(img)
}
))


function renderDuck(duck) {

        let duckName = document.getElementById('duck-display-name')
        duckName.textContent = duck.name

        let duckImg = document.getElementById('duck-display-image')
        duckImg.src = duck.img_url

        let duckLikes = document.getElementById('duck-display-likes')
        duckLikes.innerText = `${duck.likes} likes`

        duckLikes.addEventListener('click', (event) => {
            duckLikes.innerText = `${++duck.likes} likes`
            
    })

}

const newDuckForm = document.getElementById('new-duck-form')
newDuckForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let newDuckName = event.target["duck-name-input"].value
    let newDuckImage = event.target["duck-image-input"].value
    console.log(newDuckName)
    console.log(newDuckImage)
    const newDuck = {
        name: newDuckName,
        img_url: newDuckImage,
        likes : 0
    }
    renderDuck(newDuck)

    let newDuckPlace = document.createElement('img')
    newDuckPlace.src = newDuck.img_url

    newDuckPlace.addEventListener('click', (event) => {
        renderDuck(newDuck)
    } )

    document.getElementById('duck-nav').append(newDuckPlace)
    newDuckForm.reset
})