const addMovieModal = document.getElementById('add-modal');
// const addMovieMOdal = document.querySelector('#add-modal');

// const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

cancelAddMovie = () => {
    toggleMovieModal();
}

const backdropClickHandler = () => {
    toggleMovieModal();
}

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', toggleMovieModal);

