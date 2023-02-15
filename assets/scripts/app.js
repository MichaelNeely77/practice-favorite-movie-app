const addMovieModal = document.getElementById('add-modal');
// const addMovieMOdal = document.querySelector('#add-modal');

// const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');

const close

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);


