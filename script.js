const toggleBtn = document.getElementById('card-container');

const body = document.body;

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('flipped');
});