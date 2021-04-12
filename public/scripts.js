const modaloverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');


for (let card of cards) {
    card.addEventListener("click", function(){ 
        const videoId= card.getAttribute("id");
        window.location.href = `/video?id=${videoId}`
    })
}




