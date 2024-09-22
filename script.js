document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const buttonsContainer = document.querySelector('.buttons');
    let swapped = false; 
    yesButton.addEventListener('click', () => {
        window.location.href = 'segundapagina.html';
    });
    noButton.addEventListener('click', () => {
        if (swapped) {
            buttonsContainer.style.flexDirection = 'row';
        } else {
            buttonsContainer.style.flexDirection = 'row-reverse';
        }
        swapped = !swapped; 
    });
});
