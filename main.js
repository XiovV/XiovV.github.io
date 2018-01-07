const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// Event listeners for .left
left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});

// Event listeners for .right
right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});