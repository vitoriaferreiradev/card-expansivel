const cards = document.querySelectorAll('div.card')

cards.forEach(function setActive(card){
    card.addEventListener('click', () => {
        removePreviousActive()
        card.classList.add('active')
    })
})

function removePreviousActive(){
    cards.forEach((card) => {
        card.classList.remove('active')
    })
}