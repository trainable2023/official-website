function toggleOverlay(card) {
    card.classList.toggle('show-overlay');
}


$(".card-overlay").on("click", function() {
    console.log(this);
    toggleOverlay(this)
});