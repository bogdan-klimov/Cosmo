const planetItem = document.getElementsByClassName('list_item')
const solarSystem = document.getElementById('solar_system')
const planetItemDescription = document.getElementsByClassName('planet_description')
const backBlocks = document.getElementsByClassName('back_block')

const setActivePlanetItem = (i) => {
    for (let i = 0; i< planetItemDescription.length; i++) {
        planetItemDescription[i].style.display = 'none'
        planetItem[i].classList.remove('active')
    }
    solarSystem.style.display = "none"
    planetItem[i].classList.add('active')
    planetItemDescription[i].style.display = 'flex'
}

const parallaxEffect = (wrapper_id, bg_id) => {
    document.getElementById(wrapper_id).addEventListener('mousemove', (e) => {
        const x = e.pageX / window.innerWidth;
        const y = e.pageY / window.innerHeight;
        document.getElementById(bg_id)
            .style.transform = `translate(${-(x * 30) + 'px'}, ${-(y * 30) + 'px'})`
    })
}

for (let i = 0; i < planetItem.length; i++) {
    planetItem[i].addEventListener('click', setActivePlanetItem.bind(null, i))
}

for (let i = 0; i < backBlocks.length; i++) {
    backBlocks[i].addEventListener('click', () => {
        planetItem[i].classList.remove('active')
        planetItemDescription[i].style.display = 'none'
        solarSystem.style.display = "flex"
    })
}

parallaxEffect('app_wrapper', 'cosmo_bg')

